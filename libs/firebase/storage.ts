import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { app } from "./init";

const storage = getStorage(app);

export interface IFile {
  fileName: string;
  url: string;
}

export const getAllFiles = async (
  folderName: string
): Promise<IFile[] | []> => {
  try {
    console.log("Fetching all images...");
    const listRef = ref(storage, folderName);
    const result = await listAll(listRef);
    const filesDataPromises = result.items.map(async (itemRef) => {
      return {
        fileName: itemRef.name,
        url: await getDownloadURL(itemRef),
      };
    });

    const filesData = await Promise.all(filesDataPromises);
    return filesData;
  } catch (error) {
    console.log("Error fetching all files: ", error);
    return [];
  }
};

export const uploadFile = async (
  fileToUpload: File,
  type: string
): Promise<void> => {
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
      return;
    }
  } catch (error) {
    console.log("Error while uploading image: ", error);
    alert("Failed to upload image");
    return;
  }
};

export const deleteFile = async (
  fileName: string,
  type: string
): Promise<void> => {
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
    return;
  } catch (error) {
    console.log("Error deleting file: ", error);
    alert("Error deleting file");
    return;
  }
};
