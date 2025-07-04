"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const HomeHeroImage = () => {
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <motion.div
      layoutId={mouseX.toString() + mouseY.toString()}
      animate={{
        x: mouseX / 60,
        y: mouseY / 60,
        // prettier-ignore
        // rotate: 45 + (mouseX / 60),
        transition: { duration: 1 },
      }}
      className="flex md:block items-center justify-center"
    >
      <Image
        src="/images/hero-image.png"
        width={666}
        height={666}
        alt="hero-image"
        className="md:w-[666px] md:h-[666px] w-[200px] h-[200px] object-scale-down"
      />
    </motion.div>
  );
};

export default HomeHeroImage;
