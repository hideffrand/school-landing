import { deleteFile, getAllFiles, uploadFile } from "@/libs/firebase/storage";
import Layout from "../components/Layout";
import { FaDownload } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const getServerSideProps = async () => {
  return await getAllFiles("documents");
};

export default async function ManageDocuments() {
  // const handleUploadFile = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     await uploadFile(fileToUpload, activeSection);
  //     location.reload();
  //   } catch (error) {
  //     console.log("Error when uploading image: ", error);
  //   }
  //   setFileToUpload(null);
  // };

  // const handleDeleteFile = async (fileToDelete: string) => {
  //   try {
  //     await deleteFile(fileToDelete, activeSection);
  //   } catch (error) {
  //     console.log("Error deleting file: ", error);
  //   }
  // };

  const documents = await getServerSideProps();

  return (
    <Layout>
      <div className="h-full w-full bg-white rounded-xl p-8">
        <h1 className="font-bold text-xl border-b pb-4">Manage Files</h1>

        <section className="p-4 bg-gray-100">
          <p className="pb-4">Upload new document:</p>
          <form
            // onSubmit={handleUploadFile}
            className="flex flex-col items-start gap-4"
          >
            <input
              type="file"
              // onChange={(e) => setFileToUpload(e.target.files?.[0] ?? null)}
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
                    // onClick={() => handleDeleteFile(document.fileName)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
