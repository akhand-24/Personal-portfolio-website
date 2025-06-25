
import React from "react";
import TypeIt from "typeit-react";
// Lazy-load React Typing Effect

import photo from "../../assets/cov.jpeg"
import Tilt from "react-parallax-tilt";
function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[17vw] font-sans mt-16 md:mt-20 lg:mt-20"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight whitespace-nowrap">
            Akhand Awasthi
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeIt
              options={{ speed: 100, deleteSpeed: 50, loop: true }}
              getBeforeInit={(instance) => {
                instance
                  .type("Coder")
                  .pause(1000)
                  .delete()
                  .type("Competitive Programmer")
                  .pause(1000)
                  .delete()
                  .type("Fullstack Developer")
                  .pause(1000)
                  .delete()
                  .type("Graphic Designer")
                  .pause(1000);
                return instance;
              }}
            />
          </h3>
          <p className="text-gray-400 text-lg font-semibold">
            I’m a 2nd-year ECE student passionate about coding, problem-solving,
            and creativity. Actively solving DSA problems and participating in
            competitive programming, I’m proficient in full-stack development
            and graphic designing. My aim is to blend technical skills and
            creativity to solve real-world problems effectively.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-3 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={photo}
              alt="Akhand Awasthi"
              className="w-full filter brightness-75 contrast-125 sepia-20  h-full rounded-full object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default About



