"use client"

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCardProps {
  key: number;
  imgUrl: string;
  title: string;
  desc: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ key, imgUrl, title, desc }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      key={key}
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "" : "translateY(20px)",
        transition: "0.8s",
      }}
      className="border flex flex-col justify-center items-center rounded-xl"
    >
      <Image
        src={imgUrl}
        width={400}
        height={400}
        alt={title}
        className="hover:scale-[1.1] transition-transform duration-300"
      />
      <div className="p-8 bg-dark-green rounded-xl shadow-xl">
        <h1 className="text-light-green font-semibold text-xl pb-4">{title}</h1>
        <p className="text-gray-300">{desc}</p>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
