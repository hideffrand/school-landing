"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedImage({
  key,
  imageUrl,
}: {
  key: number;
  imageUrl: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div ref={ref} key={key} className="md:w-1/3 object-contain ">
      <Image
        src={imageUrl}
        width={800}
        height={800}
        alt={`Gallery Image ${key + 1}`}
        className="rounded-lg hover:rounded-2xl"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "scale(1)" : "scale(0.8)",
          transition: "0.4s",
        }}
      />
    </motion.div>
  );
}
