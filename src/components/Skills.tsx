import React from 'react'

const Skills = () => {
  return (
    <div  id='skills'className='container pt-32'>
        <div className='grid md:-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
        <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
        <p className='text-grey-500 pt-2'>
            I have a solid foundation in web development, specializing HTML, CSS, JAVASCRIPT and TYPESCRIPT. 
        </p>
        </div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">HTML</h2>
                    <h2 data-aos="zoom-in-up">Javascript</h2>
                    
                </div>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.js</h2>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
