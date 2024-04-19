"use client";

import { FaDownload } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IFile, deleteFile } from "@/libs/firebase/storage";

export default function DocumentList({ data }: { data: IFile[] }) {
  const handleDeleteFile = async (fileName: string) => {
    try {
      await deleteFile(fileName, "document");
      location.reload();
    } catch (error) {
      console.log("Error deleting file: ", error);
    }
  };

  return (
    <section className="py-4">
      <b>Uploaded documents: </b>
      <div className="flex flex-col gap-2 py-8">
        {data?.map((document: any, i: number) => (
          <div
            key={i}
            className="border-b p-1 cursor-pointer flex justify-between items-end"
          >
            <p>{document.fileName}</p>
            <div className="flex justify-center items-end gap-4 py-1">
              <a
                href={document.url}
                download={document.fileName}
                target="_blank"
              >
                <FaDownload />
              </a>
              <button
                className="text-red-600 text-xl"
                onClick={() => handleDeleteFile(document.fileName)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
