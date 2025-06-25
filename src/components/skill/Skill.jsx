import React from 'react'
import { SkillsInfo } from '../../constants';
import Tilt from 'react-parallax-tilt';

function Skill() {
  return (
    <div>
      <section id="skills" className="p-12 text-center">
        <h1 className="text-5xl text-white font-bold font-sans underline underline-offset-10 decoration-6 decoration-[#8245ec]">
          Skills
        </h1>
        <p className="text-lg text-gray-300 mt-10 font-sans font-bold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
        <div className="grid grid-cols-2 p-10 gap-10 mx-50">
          <div className="border-2 bg-gray-900 border-gray-400 rounded-4xl p-5">
            <h2 className="text-gray-500 text-2xl font-bold">FRONTEND</h2>
            <div className="grid grid-cols-3 gap-4 p-4">
              {SkillsInfo[0].skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  scale={1.1}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  <div
                    key={skill.name}
                    className=" flex border-2 border-gray-500 rounded-4xl p-1 cursor-pointer "
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 m-2 "
                    />
                    <p className="text-gray-300 mt-2">{skill.name}</p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
          <div className="border-2 bg-gray-900 border-gray-400 rounded-4xl p-5">
            <h2 className="text-gray-500 text-2xl font-bold">BACKEND</h2>
            <div className="grid grid-cols-3 gap-4 p-4">
              {SkillsInfo[1].skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  scale={1.1}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  <div className="flex border-2 border-gray-500 rounded-4xl p-1 cursor-pointer ">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 object-contain aspect-square m-2 "
                    />
                    <p className="text-gray-300 mt-2">{skill.name}</p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
          <div className="border-2 bg-gray-900 border-gray-400 rounded-4xl p-5">
            <h2 className="text-gray-500 text-2xl font-bold">LANGUAGES</h2>
            <div className="grid grid-cols-3 gap-4 p-4">
              {SkillsInfo[2].skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  scale={1.1}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  <div className="flex border-2 border-gray-500 rounded-4xl p-1 cursor-pointer ">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 m-2 "
                    />
                    <p className="text-gray-300 mt-2">{skill.name}</p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
          <div className="border-2 bg-gray-900 border-gray-400 rounded-4xl p-5">
            <h2 className="text-gray-500 text-2xl font-bold">TOOLS</h2>
            <div className="grid grid-cols-3 gap-4 p-4">
              {SkillsInfo[3].skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  scale={1.1}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  <div className="flex border-2 border-gray-500 rounded-4xl p-1 cursor-pointer ">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 m-2 "
                    />
                    <p className="text-gray-300 mt-2">{skill.name}</p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill
