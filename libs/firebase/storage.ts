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

export const deleteFile = async (fileName: any, type: string) => {
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

export const getAllFiles = async (folderName: string) => {
  try {
    const listRef = ref(storage, folderName);
    const result = await listAll(listRef);

    const data = await Promise.all(
      result.items.map(async (itemRef) => {
        const { name } = itemRef;
        const url = await getDownloadURL(itemRef);

        return { fileName: name, url };
      })
    );

    return data;
  } catch (error) {
    console.log("Error fetching all files: ", error);
  }
};
