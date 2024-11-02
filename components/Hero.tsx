import Image from "next/image";
import profilePic from "@/public/sharif.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="h-screen md:h-auto grid items-center justify-items-center gap-4"
    >
      <div className="avatar">
        <div className="w-48 rounded-xl">
          <Image src={profilePic} alt="Hafizuddin Sharif" />
        </div>
      </div>
      <h1 className="text-4xl font-bold">Hi, I'm Sharif!</h1>
      <p className="text-lg">
        Full-stack developer with user-centric design in mind
      </p>
      <a href="#contact">
        <button type="button" className="btn btn-primary">
          Get in touch
        </button>
      </a>
    </div>
  );
};

export default Hero;
