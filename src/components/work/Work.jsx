import React from 'react'
import githubLogo, { projects } from '../../constants'
import { FaGithub } from 'react-icons/fa6'
function Work() {
  return (
    <div>
      <section id='work' className='p-12 text-center'>
      <h1 className="text-5xl text-white font-bold font-sans underline underline-offset-10 decoration-6 decoration-[#8245ec]">
          Projects
        </h1>
        <p className="text-lg text-gray-300 mt-10 font-sans font-bold">
        A showcase of the projects I have worked on, highlighting my skills and experience in various technologies.
        </p>
        <div className='grid lg:grid-cols-3 grid-cols-1 mt-5 lg:mx-25 p-10  '>
          {
            projects.map((project)=>(
              <div className=' border-2 border-white rounded-4xl m-6 p-10 bg-gray-900'>
                <h2 className='text-3xl font-bold font-sans mb-4 text-white'>{project.title}</h2>
                <p className='text-gray-400 text-left'>{project.description}</p>
                <div className='flex flex-wrap mt-2'>

                {
                  project.tags.map((tag)=>(
                    <div className='text-[#8d71be] bg-[#37107a] mx-1 p-1 rounded-2xl my-1'>
                      {tag}
                    </div>
                  ))
                }
                </div >
                <a href={project.github} target='_blank'  className='flex text-white mt-3 p-2 gap-2 '>
                  <FaGithub className='hover:text-[#8245ec]' size={24}/>
                  Github
                  </a>
              </div>
            ))
          }

        </div>
      </section>
    </div>
  )
}

export default Work
