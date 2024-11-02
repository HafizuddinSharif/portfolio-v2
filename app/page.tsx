import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen max-w-4xl mx-auto p-8 pb-20 gap-16 sm:p-20 font-poppins">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
