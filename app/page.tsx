import CTAButton from "@/components/CTAButton";
import Gallery from "@/components/Gallery";
import HubungiKamiBtn from "@/components/HubungiKamiButton";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { programPembelajaran } from "@/data";
import AnimatedCard from "@/components/AnimatedCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        id="home"
        className="w-full md:h-screen flex flex-col justify-center items-center bg-opacity-10 px-8 md:px-40"
      >
        <div className="hero-bg-image bg-top"></div>
        <div className="w-full min-h-screen flex flex-col-reverse md:flex-row gap-8 justify-center items-center">
          <div>
            <h1 className="text-dark-green text-2xl md:text-4xl font-bold pb-4">
              Selamat datang di <br /> TK Agape
            </h1>
            <p className="md:text-xl text-sm md:w-3/4">
              Kami berkomitmen memberikan pendidikan terbaik dengan fondasi iman
              Kristen. Kami menyemai kecerdasan dan nilai-nilai luhur pada
              setiap anak.
            </p>
            <div className="flex justify-start w-full gap-4 py-8">
              <HubungiKamiBtn />
              <CTAButton />
            </div>
          </div>
          <Image
            src="/gallery/tk-b.jpg"
            width={800}
            height={800}
            alt="Halo"
            className="md:w-1/2 mt-40 md:mt-0 object-cover rounded-lg aspect-video hover:scale-[1.02] transition-transform duration-300 shadow-xl"
          />
        </div>
      </main>

      <section id="program-pembelajaran" className="w-full min-h-screen px-8 md:px-40 pb-20 flex flex-col justify-center items-center">
        <h1 className="text-dark-green text-2xl font-bold text-center pb-8">
          Program Pembelajaran
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          {programPembelajaran.map((program, i) => (
            <AnimatedCard
              key={i}
              imgUrl={program.img}
              title={program.title}
              desc={program.desc}
            />
          ))}
        </div>
      </section>

      <Gallery />

      <Footer />
    </>
  );
}
