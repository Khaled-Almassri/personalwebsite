import React from 'react';

const Cv = () => {
  const resumeImage = '/resume.jpg';  
  const resumeDownload = '/resume.pdf'; 

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 text-c4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8">
        
        {/* Left: Resume Image */}
        <div className="w-full md:w-1/2 border border-c1/20 shadow-lg rounded-lg overflow-hidden">
          <img
            src={resumeImage}
            alt="Resume"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right: Text and Download Button */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-c1">My Resume</h1>
          <p className="text-base leading-relaxed text-c4">
            Below is a visual of my most recent resume showcasing my technical skills,
            work experience, and educational background. You can download the full PDF version
            by clicking the button below.
          </p>
          <a
            href={resumeDownload}
            download
            className="inline-block bg-c1 hover:bg-c1/80 text-c4 font-medium py-2 px-5 rounded-lg transition duration-300"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cv;
