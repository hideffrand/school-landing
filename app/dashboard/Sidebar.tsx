import Logo from "@/components/Logo";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed w-80 h-screen bg-dark-green p-8 text-white">
      <Logo />
      <div className="flex flex-col">
        <p className="p-2 rounded-t-lg">Kelola Konten</p>
        <Link href="" className="pl-4 py-2">Galeri</Link>
      </div>
    </div>
  );
}
