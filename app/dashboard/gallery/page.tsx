import { deleteFile, getAllFiles, uploadFile } from "@/libs/firebase/storage";
import Layout from "../components/Layout";

const getServerSideProps = async () => {
  return await getAllFiles("gallery");
};

export default async function ManageGallery() {
  const handleUploadFile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await uploadFile(fileToUpload, activeSection);
      location.reload();
    } catch (error) {
      console.log("Error when uploading image: ", error);
    }
  };

  // const handleDeleteFile = async (fileToDelete: string) => {
  //   try {
  //     await deleteFile(fileToDelete, activeSection);
  //   } catch (error) {
  //     console.log("Error deleting file: ", error);
  //   }
  // };

  const images = await getServerSideProps();

  return (
    <Layout>
      <div className="h-full w-full bg-white rounded-xl p-8">
        <h1 className="font-bold text-xl border-b pb-4">Manage Files</h1>

        <section className="p-4 bg-gray-100">
          <p className="pb-4">Upload new image:</p>
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
          <b>Uploaded images: </b>
          <div className="flex flex-wrap gap-2 py-8">
            {images?.map((image: any, i: number) => (
              <div
                key={i}
                style={{ backgroundImage: `url(${image.url})` }}
                className="w-20 h-20 bg-cover bg-center"
              ></div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
