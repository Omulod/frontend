"use client";
import { TypeAnimation } from "react-type-animation";

const HomeHeroTypeAnim = () => {
  const words = [
    "simplify*",
    1000,
    "launch*",
    1000,
    "scale*",
    1000,
    "elevate*",
    1000,
    "accelerate*",
    1000,
    "refine*",
    1000,
    "optimize*",
    1000,
    "streamline*",
    1000,
    "transform*",
    1000,
    "build*",
    1000,
    "grow*",
    1000,
    "reimagine*",
    1000,
    "shape*",
    1000,
    "power*",
    1000,
  ];
  return (
    <TypeAnimation
      sequence={words}
      wrapper="span"
      speed={20}
      style={{ display: "inline-block" }}
      className="text-primary-500 min-w-32 md:min-w-60"
      repeat={Infinity}
    />
  );
};

export default HomeHeroTypeAnim;
