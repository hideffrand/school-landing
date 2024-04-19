import { deleteFile, getAllFiles, uploadFile } from "@/libs/firebase/storage";
import DocumentList from "../components/DocumentList";
import BackButton from "../components/BackButton";
import FileUploader from "../components/FileUploader";

const getServerSideProps = async () => {
  return await getAllFiles("documents");
};

export default async function ManageDocuments() {
  const documents = await getServerSideProps();

  return (
    <div className="h-full w-full bg-white rounded-xl p-8">
      <h1 className="flex item-center gap-4 font-bold text-xl border-b pb-4">
        <BackButton /> Manage Documents
      </h1>

      <FileUploader type="document" />
      <DocumentList data={documents} />
    </div>
  );
}
