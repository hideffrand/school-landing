"use client";

import { deleteFile, getAllFiles, uploadFile } from "@/db/firebase/storage";
import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import { GrGallery } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export default function ManageFiles() {
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [images, setImages] = useState<any>([]);
  const [documents, setDocuments] = useState<any>([]);
  const [activeSection, setActiveSection] = useState<string>("image");

  const handleUploadFile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await uploadFile(fileToUpload, activeSection);
      location.reload()
    } catch (error) {
      console.log("Error when uploading image: ", error);
    }
    setFileToUpload(null);
  };

  const handleDeleteFile = async (fileToDelete: string) => {
    try {
      await deleteFile(fileToDelete, activeSection);
    } catch (error) {
      console.log("Error deleting file: ", error);
    }
  };

  async function fetchAllImages() {
    try {
      getAllFiles("gallery").then((res) => setImages(res));
    } catch (error) {
      console.log("Error fetching images:", error);
    }
  }

  async function fetchAllDocuments() {
    try {
      getAllFiles("documents").then((res) => setDocuments(res));
    } catch (error) {
      console.log("Error fetching images:", error);
    }
  }

  useEffect(() => {
    fetchAllImages();
    fetchAllDocuments();
  }, []);

  return (
    <Layout>
      <div className="h-full w-full bg-white rounded-xl p-8">
        <h1 className="font-bold text-xl border-b pb-4">Manage Files</h1>

        <div className="flex gap-2 py-4">
          <button
            onClick={() => setActiveSection("image")}
            className="flex items-center justify-center gap-2 py-1 px-4 bg-gray-100 rounded-lg hover:bg-dark-green hover:text-white"
          >
            <div>
              <GrGallery />
            </div>
            Photos
          </button>
          <button
            onClick={() => setActiveSection("document")}
            className="flex items-center justify-center gap-2 py-1 px-4 bg-gray-100 rounded-lg hover:bg-dark-green hover:text-white"
          >
            <div>
              <IoDocumentTextOutline />
            </div>
            Documents
          </button>
        </div>

        {activeSection == "image" && (
          <>
            <section className="p-4 bg-gray-100">
              <p className="pb-4">Upload new image:</p>
              <form
                onSubmit={handleUploadFile}
                className="flex flex-col items-start gap-4"
              >
                <input
                  type="file"
                  onChange={(e) => setFileToUpload(e.target.files?.[0] ?? null)}
                />
                <button
                  type="submit"
                  className="px-4 py-0.5 bg-gray-200 rounded-md border border-gray-600 hover:bg-dark-green hover:text-white"
                >
                  Upload
                </button>
              </form>
            </section>

            <section className="py-4">
              <b>Uploaded images: </b>
              <div className="flex flex-wrap gap-2 py-8">
                {images?.map((image: any, i: number) => (
                  <div key={i}>
                    <Image
                      src={image.url}
                      alt={image.fileName}
                      width={400}
                      height={400}
                      className="w-20 bg-gray-200 flex-grow-1"
                    />
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeSection == "document" && (
          <>
            <section className="p-4 bg-gray-100">
              <p className="pb-4">Upload new document:</p>
              <form
                onSubmit={handleUploadFile}
                className="flex flex-col items-start gap-4"
              >
                <input
                  type="file"
                  onChange={(e) => setFileToUpload(e.target.files?.[0] ?? null)}
                />
                <button
                  type="submit"
                  className="px-4 py-0.5 bg-gray-200 rounded-md border border-gray-600 hover:bg-dark-green hover:text-white"
                >
                  Upload
                </button>
              </form>
            </section>

            <section className="py-4">
              <b>Uploaded documents: </b>
              <div className="flex flex-col gap-2 py-8">
                {documents?.map((document: any, i: number) => (
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
          </>
        )}
      </div>
    </Layout>
  );
}
