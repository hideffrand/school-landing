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
        className="w-full md:h-screen flex flex-col justify-center items-center bg-opacity-10 py-10 px-8 md:px-40"
      >
        <div className="hero-bg-image bg-top"></div>
        <div className="w-full min-h-screen flex flex-col-reverse md:flex-row gap-8 justify-between items-center py-32">
          <div className="backdrop-blur-lg border p-4 md:p-10 rounded-xl flex flex-col items-start justify-center">
            <h1 className="text-dark-green text-xl md:text-5xl font-bold pb-4">
              Selamat datang di <br /> TK Agape
            </h1>
            <p className="md:text-xl text-sm md:w-full">
              Kami berkomitmen memberikan pendidikan terbaik dengan fondasi iman
              Kristen. Kami menyemai kecerdasan dan nilai-nilai luhur pada
              setiap anak.
            </p>
            <div className="flex justify-start w-full gap-4 py-8">
              <div className="hidden md:block">
                <ContactButton />
              </div>
              <CTAButton />
            </div>
          </div>
          <Image
            src="/gallery/tk-b.jpg"
            width={800}
            height={800}
            alt="Halo"
            className="md:w-1/2 md:mt-0 object-cover rounded-lg aspect-video hover:scale-[1.02] transition-transform duration-300 shadow-xl"
          />
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
