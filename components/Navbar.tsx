"use client"

import Link from "next/link";
import CTAButton from "./CTAButton";
import { IoMenu } from "react-icons/io5";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import { navLinks } from "@/data";
import { useState } from "react";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  function handleSidebar() {
    setShowSidebar((showSidebar) => !showSidebar);
  }

  return (
    <>
      {showSidebar && <Sidebar />}
      <nav className="w-full px-8 md:px-10 py-8 h-20 fixed z-10 flex justify-center">
        <div className="w-full md:w-auto">
          <div className="bg-white h-16 px-6 shadow-xl rounded-full flex gap-40 justify-between items-center">
            <Logo />
            <div className="hidden md:flex gap-4 items-center">
              {navLinks.map((link, i) => (
                <Link key={i} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <CTAButton />
            </div>
            <div
              className="block md:hidden text-3xl text-dark-green z-50"
              onClick={handleSidebar}
            >
              <IoMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
