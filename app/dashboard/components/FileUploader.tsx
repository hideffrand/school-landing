"use client";

import { FormEvent, useState } from "react";
import { uploadFile } from "@/libs/firebase/storage";

export default function FileUploader({ type }: { type: string }) {
  const [fileToUpload, setFileToUpload] = useState<null | File>(null);

  const handleUploadFile = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (fileToUpload) {
        await uploadFile(fileToUpload, type);
        location.reload();
      }
      throw Error;
    } catch (error) {
      console.log("Error when uploading image: ", error);
    }
  };

  return (
    <section className="p-4 bg-gray-100">
      <p className="pb-4">Upload new {type}:</p>
      <form
        onSubmit={handleUploadFile}
        className="flex flex-col items-start gap-4"
      >
        <input
          type="file"
          onChange={(e) => setFileToUpload(e.target.files?.[0] ?? null)}
        />
        <button className="px-4 py-0.5 bg-gray-200 rounded-md border border-gray-600 hover:bg-dark-green hover:text-white">
          Upload
        </button>
      </form>
    </section>
  );
}
