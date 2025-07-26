import React from 'react';
import Dayra from "../assets/dayra.svg";
import Porfolio from "../assets/portfolio.svg";
import MeFit from "../assets/mefit.svg";
import Dubai from "../assets/dubai.svg";

const projects = [
  {
    title: 'Dayra - A Serverless Service Market place (on-going)',
    description: 'Building a serverless service marketplace using AWS (Lambda, API Gateway, Cognito, DynamoDB, S3) with a React frontend. Open to collaboration and mentorship opportunities.',
    image: Dayra,
    link: '/projects/ecommerce',
  },
  {
    title: 'My Portfolio Website',
    description: 'A responsive and dynamic portfolio website built with React to showcase my skills, projects, and professional experience. The site is hosted on AWS for reliable performance and scalability, highlighting my expertise in modern web development and cloud deployment.',
    image: Porfolio,
    link: '/projects/portfolio',
  },
  {
    title: 'Dubai Real Estimate Value Estimator',
    description: 'Developed a full-stack web app that estimates property value based on user-input features using a regression ML model (scikit-learn). Built with HTML, CSS, JS (frontend) and Python (backend), showcasing end-to-end integration of machine learning in a real-world application.',
    image: Dubai,
    link: '/projects/portfolio',
  },
  {
    title: 'MeFit - A Complete Fitness Mobile App',
    description: 'Built a cross-platform fitness app with Flutter that tracks steps, enables friend challenges, and uses an ML model to generate personalized workout plans based on user data.',
    image: MeFit,
    link: '/projects/portfolio',
  },
];

const ProjectCards = () => {
  return (
    <section className="py-16 px-4 text-c4">
  <div className="flex flex-col gap-16 max-w-2xl mx-auto">
    {projects.map((project, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row items-center gap-8 bg-blur rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full md:max-w-[256px] aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-2xl font-bold text-c1">{project.title}</h3>
          <p className="text-base text-c4 leading-relaxed">{project.description}</p>
          {/*<a
            href={project.link}
            className="text-c3 font-medium hover:underline"
          >
            Read More →
          </a>*/}
        </div>
      </div>
    ))}
  </div>
</section>
  );
};

export default ProjectCards;