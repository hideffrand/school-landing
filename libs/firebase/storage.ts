import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { app } from "./init";

export const storage = getStorage(app);

export const uploadFile = async (fileToUpload: any, type: string) => {
  try {
    if (type == "image") {
      const allowedTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp",
      ];
      if (!allowedTypes.includes(fileToUpload.type)) {
        alert(
          "Invalid file type. Please upload a PNG, JPEG, JPG, or WEBP image."
        );
        return;
      }

      const fileRef = ref(storage, `gallery/${fileToUpload.name}`);
      await uploadBytes(fileRef, fileToUpload);

      alert("Image uploaded successfully!");
    } else {
      const allowedTypes = ["application/pdf", "application/msword"];
      if (!allowedTypes.includes(fileToUpload.type)) {
        alert("Invalid file type. Please upload a PDF or DOC files.");
        return;
      }

      const fileRef = ref(storage, `documents/${fileToUpload.name}`);
      await uploadBytes(fileRef, fileToUpload);

      alert("Document uploaded successfully!");
    }
  } catch (error) {
    console.log("Error while uploading image: ", error);
    alert("Failed to upload image");
  }
};

export const deleteFile = async (fileName: string, type: string) => {
  try {
    if (type == "image") {
      const fileRef = ref(storage, `gallery/${fileName}`);
      await deleteObject(fileRef);

      alert("Document deleted successfully!");
    } else {
      const fileRef = ref(storage, `documents/${fileName}`);
      await deleteObject(fileRef);

      alert("Document deleted successfully!");
    }
  } catch (error) {
    console.log("Error deleting file: ", error);
  }
};

// Define an interface for the cached data
interface CachedData {
  timestamp: number;
  data: { fileName: string; url: string }[];
}

// Define an object to store cached data
const cache: { [folderName: string]: CachedData } = {};

export const getAllFiles = async (folderName: string) => {
  try {
    // Check if folderName exists in cache and if it's not expired
    if (
      cache[folderName] &&
      Date.now() - cache[folderName].timestamp < CACHE_EXPIRY
    ) {
      return cache[folderName].data;
    }

    const listRef = ref(storage, folderName);
    const result = await listAll(listRef);

    const data = await Promise.all(
      result.items.map(async (itemRef) => {
        const { name } = itemRef;
        const url = await getDownloadURL(itemRef);

        return { fileName: name, url };
      })
    );

    // Update cache with new data
    cache[folderName] = {
      timestamp: Date.now(),
      data: data,
    };

    return data;
  } catch (error) {
    // Handle errors
    console.log("Error fetching all files: ", error);
    throw error; // Rethrow the error to handle it outside
  }
};

// Define cache expiry time (e.g., 1 hour)
const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hour in milliseconds
