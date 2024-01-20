import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { generalData } from "@/data";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full py-8 px-8 md:px-40 flex flex-col md:flex-row justify-between items-start md:items-center border-t bg-gray-200"
    >
      <Logo />
      <section className="flex flex-col md:flex-row gap-8 justify-end">
        <div className="md:w-1/4">
          <p className="pb-4 font-bold">Alamat</p>
          <p className="">{generalData.alamat.alamatLengkap}</p>
        </div>
        <div>
          <p className="pb-4 font-bold">Kontak Kami</p>
          <div className="flex items-center gap-2">
            <div className="text-xl text-dark-green">
              <IoIosCall />
            </div>
            <p>0341-579-327</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="">
              <div className="text-xl text-dark-green">
                <FaWhatsapp />
              </div>
              <p>0895-0402-7351</p>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xl text-dark-green">
              <MdEmail />
            </div>
            <p>agapesaja123@gmail.com</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
