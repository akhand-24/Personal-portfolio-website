import React from "react";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about"
import Skill from "./components/skill/skill";
import Experience from "./components/experience/experience";
import Work from "./components/work/work";
import Education from "./components/education/education";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import BlurBlob from "./components/BlurBlob";

function App() {
  return (
    <div className="bg-[#050414]">
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skill />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
