import Image from "next/image";
import Hero from "./components/main/Hero"
import Skills from './components/main/Skills'
import Encryption from "./components/main/Encryption";
import Footer from "./components/main/Footer";
import Project from "./components/main/Project";
import Experience from "./components/main/Experience";
import About from "./components/main/About";
export default function Home() {
  return (
      <main className="h-full w-full">
        <div className="flex flex-col ">
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Project />
    <Footer/>
    
        </div>

      </main>
    
   
  );
}
