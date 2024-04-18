import Image from "next/image";
import Sidebar from "./components/Sidebar";
import ManageDocuments from "./sections/ManageDocument";
import ManageGallery from "./sections/ManageGallery";
import ManageSettings from "./sections/ManageSettings";
import ManagePendaftar from "./sections/MangePendaftar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - TK Agape",
};

export default function Dashboard({
  searchParams,
}: {
  searchParams: { section: string };
}) {
  return (
    <>
      <div className="bg-gray-100 w-full h-screen flex relative">
        <Sidebar />
        <section className="w-full h-full p-4 flex flex-col gap-4 text-dark-green">
          {(searchParams.section == "Home" || searchParams.section == null) && (
            <div className="h-full w-full bg-white rounded-xl px-6 py-4 border flex items-center justify-center">
              <Image
                src="/vectors/Usability-testing-bro.png"
                width={400}
                height={400}
                alt="Hero Image"
              />
            </div>
          )}
          {searchParams.section == "Pendaftar" && <ManagePendaftar />}
          {searchParams.section == "Gallery" && <ManageGallery />}
          {searchParams.section == "Documents" && <ManageDocuments />}
          {searchParams.section == "Settings" && <ManageSettings />}
        </section>
      </div>
    </>
  );
}
