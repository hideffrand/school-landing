import CTAButton from "@/components/CTAButton";
import Gallery from "@/components/Gallery";
import HubungiKamiBtn from "@/components/HubungiKamiButton";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="w-full h-screen flex flex-col justify-center items-center bg-opacity-10 px-8">
        <div className="hero-bg-image bg-top"></div>
        <h1 className="text-2xl md:text-5xl font-bold text-dark-green text-center">
          Berikan pengalaman belajar anak <br /> yang terbaik bersama TK Agape
        </h1>
        <div className="flex md:hidden justify-start w-full gap-4 py-8">
          <HubungiKamiBtn />
          <CTAButton />
        </div>
      </main>
      <section id="about us" className="w-full flex flex-col md:flex-row px-8 md:px-40 py-10">
        <div className="md:w-1/2">
          <p className="text-orange py-4">Tentang Kami</p>
          <h1 className="text-dark-green text-2xl font-bold">
            Selamat datang di TK Agape
          </h1>
          <p>
            Kami berkomitmen memberikan pendidikan terbaik dengan fondasi iman
            Kristen. Kami menyemai kecerdasan dan nilai-nilai luhur pada setiap
            anak.
          </p>
          <button className="bg-light-green py-2 px-4 rounded-full my-8">
            Hubungi Kami
          </button>
        </div>
        <Image
          src="/gallery/tk-b.jpg"
          width={800}
          height={800}
          alt="Halo"
          className="md:w-1/2 h-1/2 object-cover rounded-lg aspect-video"
        />
      </section>

      <Gallery />

      <Footer />
    </>
  );
}
