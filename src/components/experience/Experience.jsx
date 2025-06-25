import React from 'react'
import { experiences } from '../../constants';

function Experience() {
  return (
    <div>
      <section id="experience" className="p-12 text-center">
        <h1 className="text-5xl text-white font-bold font-sans underline underline-offset-10 decoration-6 decoration-[#8245ec]">
          Experiences
        </h1>
        <p className="text-lg text-gray-300 mt-10 font-sans font-bold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
        <div className="relative p-10 mx-40">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full" />
          {experiences.map((exp) => (
            <div
              className={`  grid grid-cols-2 gap-15 mt-8
                 `}
            >
              <div className={`${ exp.id%2==0 ? "col-start-1 col-end-2":"col-start-2 col-end-3" }  p-5 border-2 border-gray-400 rounded-3xl bg-gray-900 duration-300 hover:scale-105 `}   >
                <div className='flex '>

                <img className="w-20 rounded-3xl " src={exp.img} alt="" />
                <div className='ml-7 text-left' >

                <h2 className="text-3xl text-white font-bold font-sans">
                  {exp.role}
                </h2>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-gray-500">{exp.date}</p>
                </div>
                </div>
                <p className="text-gray-300 mt-3 text-left">{exp.desc}</p>
                <h2 className="text-white mt-4 text-lg font-bold font-sans text-left ml-1 ">
                  Skills:
                </h2>
                <div className='flex flex-wrap'>
                  {exp.skills.map((skill) => (
                    <div className="text-white bg-[#8245ec] rounded-lg p-2 m-1 ">{skill}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Experience
