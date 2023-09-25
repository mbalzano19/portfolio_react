import React from "react";

export default function BioPage() {
  const bioData = {
    name: "Matthew Balzano",
    bio: `In early 2023, I decided to chase a passion of mine: software engineering. 
          Wanting to push myself to better my skills, I enrolled in General Assembly's 
          Software Engineering Immersive Bootcamp in April of 2023. During this experience, 
          I built full-stack applications and deepened my knowledge of JavaScript and Python. 
          Additionally, I learned some new skills, such as React.\n\n
          I come from the audio tech industry where I worked as a Customer Support Specialist 
          for three years. Succeeding in this role allowed me to walk away with a deep love for 
          creatively problem solving, as well as connecting with customers to understand their 
          needs and solving their problems. This is largely what lead me to the software engineering 
          industry: to be able to creatively solve problems using code.\n\n
          I am currently looking for my first software development role. Although I do not have 
          the most experience, I do have an unwavering tenacity to consistently learn and develop 
          my skills. One thing my bootcamp experience taught me is how to learn complex topics in a 
          short period of time. I can't wait for the opportunity to bring my knowledge and desire for 
          learning to a company.\n\n
          When I am not working, you can catch me working out in the gym, hiking a mountain, 
          or making music in the studio. I am passionate about personal health and I love to express 
          myself creatively.`,
    imageUrl: "https://i.imgur.com/A6LO9td.jpg",
  };

  const paragraphs = bioData.bio.split("\n\n");

  const bioElements = paragraphs.map((paragraph, index) => (
    <React.Fragment key={index}>
      <p className="text-white-700 dark:text-white-400 mb-4">{paragraph}</p>
      {index < paragraphs.length - 1 && <hr className="my-4" />}
    </React.Fragment>
  ));

  return (
    <div className="flex mt-12 mx-auto max-w-6xl">
      <div className="w-1/3 pr-8">
        <img
          src={bioData.imageUrl}
          alt={bioData.name}
          className="rounded-full h-auto w-full"
        />
      </div>
      <div className="w-2/3">
        <h1 className="text-4xl font-mono mb-4">{bioData.name}</h1>
        {bioElements}
      </div>
    </div>
  );
}
