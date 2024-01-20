import Link from "next/link";
import CTAButton from "./CTAButton";
import { IoMenu } from "react-icons/io5";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="w-full px-8 md:px-10 py-10 h-20 fixed z-10 flex justify-center">
      <div className="w-full md:w-auto">
        <div className="bg-white h-16 px-6 shadow-xl rounded-full flex gap-40 justify-between items-center">
          <Logo />
          <div className="hidden md:flex gap-4 items-center">
            <Link className="" href="/#home">
              Home
            </Link>
            <Link className="" href="/#program-pembelajaran">
              Program
            </Link>
            <Link className="" href="/#gallery">
              Galeri
            </Link>
            <Link className="" href="/#footer">
              Hubungi Kami
            </Link>
            <CTAButton />
          </div>
          <div className="block md:hidden text-3xl text-dark-green">
            <IoMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
