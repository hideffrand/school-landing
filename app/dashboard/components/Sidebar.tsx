"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import { RxExit } from "react-icons/rx";
import { IoHome } from "react-icons/io5";
import { FaFolder } from "react-icons/fa";
import { IoDocumentText, IoSettingsSharp } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { supabase } from "@/libs/supabase/init";
import { logout } from "@/libs/supabase/auth";

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

  const changeSectionAction = (title: string) => {
    window.location.href = `/dashboard?section=${title}`;
  };

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
            <button
              key={i}
              className="px-6 py-2 rounded-lg flex items-center gap-4 hover:bg-super-dark-green cursor-pointer"
              onClick={() => changeSectionAction(link.title)}
            >
              <div>{link.icon}</div>
              {link.title}
            </button>
          ))}
        </div>
        <section className="w-full py-4 border-t border-gray-600">
          <button
            onClick={() => logout()}
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
