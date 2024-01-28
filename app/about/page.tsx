import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Navbar />
      <div
        id="page-about-banner"
        className="w-full h-[32vh] md:h-[50dvh] px-8 md:px-40 flex items-end"
      >
        <div className="bg-dark-green px-8 md:px-20 py-4 md:py-10 rounded-t-xl">
          <h1 className="md:text-4xl text-white font-black">Tentang Kami</h1>
        </div>
      </div>
      <div className="w-full min-h-[100dvh] flex flex-col md:flex-row px-8 md:px-40 py-10 md:py-20">
        <div className="md:w-1/2">
          <h1 className="text-dark-green text-xl md:text-4xl font-bold pb-4">Visi</h1>
          <p className="md:text-xl pb-4">
            Menjadikan anak yang beriman, berkarakter, aktif, krearif, mandiri,
            serta bertumbuh dalam kasih Tuhan.
          </p>
          <h1 className="text-dark-green text-xl md:text-4xl font-bold pt-8 pb-4">
            Misi
          </h1>
          <ol className="list-decimal flex flex-col gap-1 md:gap-4 md:text-xl pl-4 md:pl-8">
            <li>Anak yang mengasihi Tuhan</li>
            <li>Anak yang mengasihi bangsa</li>
            <li>Anak yang mempunyai cita-cita</li>
            <li>
              Anak didik dibimbing menjadi pribadi yang tidak hanya pandai
              dalampengetahuan, tetapi juga menjadi anak yang baik, penuh kasih,
              percaya diri, serta bertanggung jawab.
            </li>
            <li>
              Guru yang mencintai Tuhan, seperti Tuhan yang mencintai mereka dan
              melayani dengan hati yang bertanggung jawab, dan berdedikasi
              tinggi padaprofesinya, dengan mengikuti ilmu pengetahuan,
              perkembangan pengajaran, memberi teladan serta komukatif
            </li>
          </ol>
        </div>
        <div className="w-1/2 hidden md:flex justify-center items-center">
          <Image
            src="/gallery/guru.jpg"
            width={600}
            height={600}
            alt="Foto guru TK Agape"
            className="rounded-xl"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
