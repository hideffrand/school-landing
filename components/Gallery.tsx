"use client";

import { useState, useEffect } from "react";
import { loadImages } from "../utils/loadImages";
import AnimatedImage from "./AnimatedImage";
import { motion } from "framer-motion";

export default function Gallery() {
  const [imageList, setImageList] = useState<string[]>([]);

  useEffect(() => {
    const images = loadImages();
    setImageList(images);
  }, []);

  return (
    <>
      <section
        id="gallery"
        className="w-full px-8 md:px-40 py-20 flex flex-col justify-center items-center bg-dark-green scroll-mt-20"
      >
        <h1 className="text-white text-2xl font-bold py-8">Galeri Kegiatan</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {imageList?.map((image, i) => (
            <motion.div
              key={i}
              className="md:w-[40%] object-contain cursor-pointer"
            >
              <AnimatedImage imageUrl={image} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
