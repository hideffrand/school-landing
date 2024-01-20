"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedImage({ imageUrl }: { imageUrl: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <Image
        ref={ref}
        src={imageUrl}
        width={800}
        height={800}
        alt={`Gallery Image`}
        className="rounded-lg hover:rounded-2xl hover:scale-[1.02] transition-transform duration-300"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "scale(1)" : "scale(0.8)",
          transition: "0.4s",
        }}
      />
    </>
  );
}
