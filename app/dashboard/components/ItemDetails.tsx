import Icon from "@/components/Icons";
import Image from "next/image";
import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import { IFile, deleteFile } from "@/libs/firebase/storage";
import { FaRegImage } from "react-icons/fa6";

export default function ItemDetails({ image }: { image: IFile | null }) {
  const handleDeleteFile = async () => {
    try {
      if (image) {
        await deleteFile(image.fileName, "image");
        location.reload();
      }
    } catch (error) {
      console.log("Error deleting file: ", error);
    }
  };

  return (
    <div className="fixed bg-white rounded-md h-full w-1/3 top-0 right-0 p-8">
      <span className="flex items-center gap-8">
        <button className="">
          <Icon>
            <IoClose />
          </Icon>
        </button>
        <h1 className="text-lg font-semibold">Details</h1>
      </span>
      {image?.url ? (
        <Image
          className="w-full"
          src={image.url}
          width={400}
          height={400}
          alt={image.fileName}
        />
      ) : (
        <div className="w-full h-32 bg-gray-200 rounded-md text-4xl flex items-center justify-center text-gray-400">
          <FaRegImage />
        </div>
      )}
      <h1 className="text-md py-4">{image?.fileName}</h1>
      <p>Actions: </p>
      <form action={handleDeleteFile}>
        <button
          formAction={handleDeleteFile}
          className="bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-700"
        >
          Delete
        </button>
      </form>
    </div>
  );
}
