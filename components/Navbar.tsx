import Image from "next/image";
import Link from "next/link";
import HubungiKamiButton from "./HubungiKamiButton";
import CTAButton from "./CTAButton";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="w-full px-8 md:px-10 py-10 h-20 fixed z-10 flex justify-center">
      <div className="w-full md:w-auto">
        <div className="bg-white h-16 px-8 shadow-xl rounded-full flex gap-20 justify-between md:justify-center items-center">
          <div className="hidden md:flex gap-8">
            <Link className="" href="#home">
              Home
            </Link>
            <Link className="" href="#aboutus">
              Tentang Kami
            </Link>
            <Link className="" href="gallery">
              Gallery
            </Link>
          </div>
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="Logo TK Agape"
            className="aspect-square w-16 md:w-24"
          />
          <div className="hidden md:flex gap-4">
            <HubungiKamiButton />
            <CTAButton />
          </div>
          <div className="block md:hidden text-4xl text-dark-green">
            <IoMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
