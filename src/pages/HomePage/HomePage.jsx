import { checkToken } from '../../utilities/users-service'
import './HomePage.css'

export default function HomePage() {
  // async function handleCheckToken() {
  //     const expDate = await checkToken()
  //     console.log(expDate)
  
    return (
      <>
      <h1>Matthew Balzano</h1>
      <h2 className='text-sm'>Software Engineer</h2>

      <img src="https://i.imgur.com/A6LO9td.jpg" alt="" id='headshot'/>
      <div className="md:container md:mx-auto z-10 w-full max-w-5xl items-center justify-between flex-col font-mono text-sm lg:flex" id='bio'>
        <p>In early 2023, I decided to chase a new passion of mine: software engineering. Wanting to push myself to better my skills, I enrolled in General Assembly's Software Engineering Immersive Bootcamp in April of 2023. During this experience, I built full-stack applications and deepended my knowledge of JavaScript and Python. Additionally, I learned some new skills, such as React.
        <br />
        <br />
        I come from the audio tech industry where I worked as a Customer Support Specialist for three years. Succeeding in this role allowed me to walk away with a deep love for creatively problem solving, as well as connecting with customers to understand their needs and solving their problems.This is largely what lead me to the software engineering industry: to be able to creatively solve problems using code.
        <br />
        <br />
        I am currently looking for my first software development role. Although I do not have the most experience, I do have an unwavering tenacity to consistently learn and develop my skills. One thing my bootcamp experience taught me is how to learn complex topics in a short period of time. I can't wait for the opportunity to bring my knowledge and desire for learning to a company.
        <br />
        <br />
        When I am not working, you can catch me working out in the gym, hiking a mountain, or making music in the studio. I am passionate about personal health and I love to express myself creatively.

        </p>
      </div>
      </>
    )
  }
  