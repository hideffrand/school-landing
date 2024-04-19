import { IFile, getAllFiles, uploadFile } from "@/libs/firebase/storage";
import FileUploader from "../components/FileUploader";
import ImageList from "../components/ImageList";
import BackButton from "../components/BackButton";

const getServerSideProps = async (): Promise<IFile[] | []> => {
  return await getAllFiles("gallery");
};

export default async function ManageGallery() {
  const images = await getServerSideProps();

  return (
    <>
      <div className="h-full w-full bg-white rounded-xl p-8">
        <h1 className="flex item-center gap-4 font-bold text-xl border-b pb-4">
          <BackButton /> Manage Documents
        </h1>

        <FileUploader type="image" />
        <ImageList data={images} />
      </div>
    </>
  );
}
