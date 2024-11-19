import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id:0,
        title:"Todo List",
        desc:"A React & TypeScript based app for managing and organizing your tasks efficiently.",
        img:"/project-01.jpg",
        tags:["React", "Node", "CSS", "Typescript"],
    },
    {
      id: 1,
      title:"Countdown Timer",
      desc:"A Next.js & TypeScript powered website to track time with an interactive countdown feature.",
      img:"/project-02.jpg",
      tags:["Next.js", "Node", "CSS", "Typescript"],
  },
  {
    id: 2,
    title:"Guessing Game",
    desc:"A  game where players try to release a hidden word, number, or concepts based on limited cluesor feedback.",
    img:"/project-03.jpg",
    tags:["HTML", "Node", "CSS", "Typescript"],
},
{
  id: 3,
  title:"Currency Converter Project",
  desc:"A simple HTML and Typescript powered tool for converting currencies with real-time rates.",
  img:"/project-04.jpg",
  tags:["HTML", "Node", "CSS", "Typescript"],
},
{
  id: 4,
  title:"Word Counter",
  desc:"A Word Counter counts the word in a string called text. Just replace text with the content you want to analyze",
  img:"/project-05.jpg",
  tags:["HTML", "Node", "CSS", "Typescript"],
},
{
id: 5,
  title:"A Simple Calculator Project",
  desc:"A  basic HTML , CSS and TypeScript calculator for performing essential arithmetic operations.",
  img:"/project-06.jpg",
  tags:["HTML", "Node", "CSS", "Typescript"],
}








  






]

const Projects = () => {
  return (
    <div  id='projects'className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
          {data.map((el) => (<Card
          key={el.id}
          title={el.title}
          desc={el.desc}
          img={el.img}
          tags={el.tags}
          />))}
        </div>
      
    </div>
  )
}

export default Projects
