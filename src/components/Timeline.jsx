import React from "react";

const timelineData = [
  {
    date: "Mar 2025 - Current",
    title: "Survey Programmer at Ventures Middle East",
    description:
      "I develop surveys for market research projects and ensure reliable data pipelines with strong quality control. I also contribute to data analysis and create dashboards for reporting insights.",
  },
  {
    date: "20 Jul, 2025",
    title: "Microsoft Certified: Azure Administrator Associate",
    description:
      "Validated expertise in managing Azure resources, implementing and monitoring cloud infrastructure, and ensuring cloud security and performance.",
  },
  {
    date: "4 May, 2025",
    title: "AWS Certified Solution Architect - Associate",
    description:
      "Demonstrated ability to design scalable, reliable cloud solutions on AWS, with a strong grasp of architecture best practices.",
  },
  {
    date: "11 Jan, 2021",
    title: "CompTIA Network+ Certified",
    description:
      "Validated foundational networking skills, including network troubleshooting, configuration, and infrastructure support across wired and wireless systems.",
  },
  {
    date: "12 Jun, 2024",
    title: "Graduated with a BSc in Computer Engineering",
    description:
      "Graduated with a strong foundation in computer science, software development, and cloud technologies—bridging the gap between engineering and computing.",
  },
  {
    date: "Jun – Aug, 2023",
    title: "Software Engineering Internship at WayOn IT Solutions",
    description:
      "Developed the front-end of an e-commerce website using HTML, CSS, and JavaScript. Implemented interactive features to improve user experience and assisted with debugging and performance optimization.",
  },
  {
    date: "Jun – Jul, 2022",
    title: "IT Internship at Royal Horizon LLC",
    description:
      "Configured 20+ employee devices and resolved 10+ weekly IT and network issues. Supported troubleshooting and assisted with system upgrades.",
  },
];

export default function Timeline() {
  return (
    <section>
  <div className="text-c4 py-8">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-[12px] md:my-[24px]">
      {/* Left Column */}
      <div className="flex flex-col w-full sticky md:top-[144px] lg:w-1/3 mt-2 md:mt-[12px] px-8">
        
        <h2 className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
          My Journey
        </h2>
        <p className="text-sm md:text-base text-c3 mb-[40px]">
          A look back at the moments that defined my path — projects I’ve built, challenges I’ve overcome, and the milestones that continue to drive my passion forward.
        </p>
      </div>

      {/* Right Column */}
      <div className="ml-[0px] md:ml-[12px] lg:w-2/3 sticky">
        <div className="relative w-full h-full px-6 md:px-10">
          {/* Vertical center line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-c1 rounded-full z-0"></div>

          <div className="relative z-10 space-y-12">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 !== 0;
              return (
                <div
                  key={index}
                  className={`flex justify-between items-center w-full ${
                    isLeft ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-5/12"></div>
                  <div
                    className={`w-5/12 px-1 py-4 text-[18px] ${
                      isLeft ? "text-right" : "text-left"
                    }`}
                  >
                    <p className="mb-[3px] text-c3">{item.date}</p>
                    <h4 className="mb-[3px] font-bold md:text-2xl text-c1">{item.title}</h4>
                    <p className="md:text-base leading-snug text-c4">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Decorative image */}
          <img
            className="mx-auto -mt-[36px] md:-mt-[36px]"
            src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
            alt="timeline center"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
