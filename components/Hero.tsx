"use client";

import Image from "next/image";
import profilePic from "@/public/sharif.jpg";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const profilePicRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(profilePicRef.current, {
      duration: 1,
      opacity: 0,
      y: -100,
      ease: "power2.inOut",
    });
    tl.from(".words", {
      duration: 0.5,
      opacity: 0,
      scale: 1.2,
      ease: "power2.inOut",
      stagger: 0.2,
    });
    tl.from(btnRef.current, {
      duration: 0.5,
      opacity: 0,
      scale: 0.8,
      ease: "power2.inOut",
      delay: 0.2,
    });
  });
  return (
    <div
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center md:h-auto"
    >
      <div className="grid items-center justify-items-center gap-4">
        <div ref={profilePicRef} className="avatar">
          <div className="w-48 rounded-xl">
            <Image src={profilePic} alt="Hafizuddin Sharif" />
          </div>
        </div>
        <h1 ref={textRef} className="words text-4xl font-bold">
          Hi, I'm Sharif!
        </h1>
        <p ref={textRef} className="words text-lg">
          Full-stack developer with user-centric design in mind
        </p>
        <div ref={btnRef}>
          <a href="#contact">
            <button type="button" className="btn btn-primary">
              Get in touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
