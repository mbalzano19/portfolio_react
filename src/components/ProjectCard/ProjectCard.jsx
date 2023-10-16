import React, { useEffect } from "react";

export default function ProjectCard() {

  useEffect(() => {
    // Add the 'fade-in' class to each element with a delay
    const elements = document.querySelectorAll(".fade-in-item");
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("fade-in");
      }, index * 200); // Adjust the delay for each item as needed
    });
  }, []);

  const projects = [
    {
      title: "BalzanoBeats",
      description: "Online store to buy and sell beats",
      imageUrl: "https://i.imgur.com/towFCYM.png",
      link: "https://balzanobeats.onrender.com/",
    },
    {
      title: "GainzTracker",
      description: "Workout log to keep track of workout progress",
      imageUrl: "https://i.imgur.com/TIfuOaS.png",
      link: "https://gainztracker.fly.dev/",
    },
    {
      title: "Read it, baby!",
      description:
        "App designed to take guesswork out of finding books to read to your young children",
      imageUrl: "https://i.imgur.com/5wLjULR.png",
      link: "https://bookreadingapp.onrender.com/",
    },
  ];

  return (
    <>
    <h1 className="mt-12 text-4xl font-mono fade-in-item">Projects</h1>
    <div className="flex flex-wrap justify-center mt-16">
      {projects.map((project, index) => (
        <div
          key={index}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4 transition transform hover:scale-105 fade-in-item"
        >
          <a href={project.link}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="rounded-t-lg h-48 w-full object-cover"
            />
          </a>
          <div className="p-5">
            <a href={project.link}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project.description}
            </p>
            <a
              href={project.link}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Project
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
