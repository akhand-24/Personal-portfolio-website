import React from 'react'
import { education } from '../../constants'

function Education() {
  return (
    <div>
      <section id='education' className="p-12 text-center">
      <h1 className="text-5xl text-white font-bold font-sans underline underline-offset-10 decoration-6 decoration-[#8245ec]">
          Education
        </h1>
        <p className="text-lg text-gray-300 mt-10 font-sans font-bold">
        My education has been a journey of learning and development. Here are the details of my academic background
        </p>

        <div className='relative p-10 lg:mx-40'>
        <div className="lg:inline hidden absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full" />
          {
            education.map((edu)=>(
              <div className='grid lg:grid-cols-2 grid-cols-1'>
              <div className={`${edu.id %2 ==0 ? "col-start-1 col-end-2":"col-start-2 col-end-3" } border-2 border-gray-300 rounded-2xl m-5 p-5 bg-gray-900 duration-300 hover:scale-105`}>
                <div className='flex '>

                <div>
                  <img src={edu.img} className='w-30 mt-4' alt="" />
                </div>
                <div className='ml-3 p-2'>
                  <h2 className='text-2xl font-bold  text-white text-left'>{edu.degree}</h2>
                  <h2 className='text-gray-300 text-left'>{edu.school}</h2>
                  <h2 className='text-gray-500 text-left mt-1.5'>{edu.date}</h2>
                </div>
                </div>
                <h2 className='text-lg font-bold mt-4 font-sans text-gray-400  text-left   '>Grade: {edu.grade}</h2>
                <p className='text-gray-400 text-left mt-2'>
                    {edu.desc}
                </p>
              </div>
              </div>
            ))
          }
        </div>

      </section>
    </div>
  )
}

export default Education
