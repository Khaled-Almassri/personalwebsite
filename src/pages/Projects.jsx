import ProjectCards from "../components/ProjectCards";
import TextWriter from "../components/TextWriter"; 
export default function Projects() {
  return (
    <>
      <div className="flex flex-col justfiy-between gap-[30px] mx-auto text-center text-c4 max-w-[80%] text-[28px] py-[200px]">
        <h1 className="text-c1 text-[48px]">My Projects</h1>
        <p>
          A selection of work that reflects my skills, creativity, and
          problem-solving approach.
        </p>
        <p>
          Each project is a step in my journey, shaped by collaboration,
          curiosity, and impact.
        </p>
      </div>

      <ProjectCards />
    </>
  );
}
