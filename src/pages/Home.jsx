import About from "./About";
import Hero from "../components/Hero";
import Skills from "./Skills";
import Projects from "./Projects"
import Contact from './Contact'
export default function Home() {
  return (
    <div className="pt-20 bg-gray-700">
      {/* Home Section */}
      <Hero/>

      {/* About Section */}
      <About/>

      {/* Projects Section */}
       <Projects/>

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact/>
    </div>
  );
}
