import Logo from "@/components/Logo";
import Link from "next/link";
import { RxExit } from "react-icons/rx";
import { IoHome } from "react-icons/io5";
import { FaFolder } from "react-icons/fa";
import { IoDocumentText, IoSettingsSharp } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { getCurrentUser, signOut } from "@/libs/supabase/auth";

export default function Sidebar() {
  const links: any[] = [
    {
      title: "Home",
      icon: <IoHome />,
      path: "/dashboard",
    },
    {
      title: "Pendaftar",
      icon: <IoDocumentText />,
      path: "/dashboard/pendaftar",
    },
    {
      title: "Gallery",
      icon: <IoMdPhotos />,
      path: "/dashboard/gallery",
    },
    {
      title: "Documents",
      icon: <FaFolder />,
      path: "/dashboard/documents",
    },
    {
      title: "Settings",
      icon: <IoSettingsSharp />,
      path: "/dashboard/settings",
    },
  ];

  async function handleSignOut() {
    await fetch("/api/auth/signout", { method: "POST" });
  }

  async function handleGetCurrentUser() {
    const user = await getCurrentUser();
    const cookie = document.cookie;
    console.log(cookie);
    return user ? user?.email : "...";
  }

  return (
    <div className="w-80 h-screen sticky top-4 p-4">
      <div className="w-full h-full bg-dark-green p-4 text-white flex flex-col justify-between rounded-xl shadow-2xl">
        <div className="flex flex-col items-center gap-4">
          <Logo />
          <div className="w-full px-6 py-6 border-t border-gray-600">
            <h1 className="text-xl font-bold">Welcome,</h1>
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className="px-6 py-2 rounded-lg flex items-center gap-4 hover:bg-super-dark-green"
            >
              <div>{link.icon}</div>
              {link.title}
            </Link>
          ))}
        </div>
        <section className="w-full py-4 border-t border-gray-600">
          <button
            onClick={handleSignOut}
            className="py-2 px-6 w-full rounded-lg flex items-center gap-4 hover:bg-super-dark-green"
          >
            <div>
              <RxExit />
            </div>
            Keluar
          </button>
        </section>
      </div>
    </div>
  );
}
