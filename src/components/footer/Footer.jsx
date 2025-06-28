import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='text-center mt-10'>
      <h1 className='text-2xl font-bold font-sans text-[#8163b4] '>Akhand Awasthi</h1>

      <div className='flex justify-center gap-4 text-white text-center mt-5 pb-10'>
        <a target='_blank' href="https://www.linkedin.com/in/akhand-awasthi-b05b31293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <FaLinkedin className='hover:text-[#8245ec]'  size={20}/>
        </a>
        <a target='_blank' href="https://www.instagram.com/_akhand_24?igsh=MWVpMHExeTJwamQ2aA==">
        <FaInstagram className='hover:text-[#8245ec]'  size={20}/>
        </a>
        <a target='_blank' href="https://github.com/akhand-24">
        <FaGithub className='hover:text-[#8245ec]' size={20}/>
        </a>

      </div>
    </div>
  )
}

export default Footer
