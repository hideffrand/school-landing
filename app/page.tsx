import CTAButton from "@/components/CTAButton";
import Gallery from "@/components/Gallery";
import ContactButton from "@/components/ContactButton";
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
        className="w-full h-screen flex gap-4 flex-col justify-end md:justify-center md:items-center bg-opacity-10 py-10 px-8 md:px-40 md:text-center"
      >
        <div className="hero-bg-image bg-top"></div>
        <h1 className="text-dark-green text-3xl md:text-5xl font-bold pb-4">
          Selamat datang di <br /> TK Agape
        </h1>
        <p className="md:text-xl text-md md:w-1/2">
          Kami berkomitmen memberikan pendidikan terbaik dengan fondasi iman
          Kristen. Kami menyemai kecerdasan dan nilai-nilai luhur pada setiap
          anak.
        </p>
        <div className="flex gap-4 py-8">
          <ContactButton />
          <CTAButton />
        </div>
      </main>

      <section
        id="program"
        className="w-full min-h-screen px-8 md:px-40 pb-20 flex flex-col justify-center items-center"
      >
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
