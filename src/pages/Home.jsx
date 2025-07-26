import TypingOnce from "../components/TypingOnce";
import { CloudCheck, Layers, Goal, ShieldCheck } from "lucide-react";
import khaledpicaws from "../assets/khaledpicaws.jpg";
import ResponsiveMarquee from "../components/ResponsiveMarquee";

export default function Home() {
  return (
    <>
      {/* Mobile + Small Tablet layout (0–767px) */}
      <div className="flex flex-col justify-between py-[200px] px-[20px] md:hidden">
        <TypingOnce text={"Hi, my name is"} />
        <p className="text-[80px] text-c4">Khaled Almassri</p>
        <p className="text-[40px] text-c3">
          I move infrastructure to the cloud—and keep it there.
        </p>
      </div>

      {/* Desktop layout (≥768px) */}
      <div className="hidden md:flex flex-row items-center justify-between py-[100px] px-6 gap-12">
        {/* Text Section */}
        <div className="flex flex-col gap-6 md:gap-8 flex-[2] w-full max-w-3xl">
          <TypingOnce text={"Hi, my name is"} />
          <p className="text-[50px] lg:text-[80px] font-bold text-c4 leading-tight">
            Khaled Almassri
          </p>
          <p className="text-[24px] lg:text-[40px] text-c3">
            I move infrastructure to the cloud—and keep it there.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-[1] w-full max-w-sm">
          <img
            src={khaledpicaws}
            alt="Khaled Almassri"
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justfiy-between gap-[30px] mx-auto text-center text-c4 max-w-[80%] text-[28px]">
        <h1 className="text-c1 text-[48px]">Who is Khaled Almassri</h1>
        <p>
          Hi, I’m Khaled Almassri — a cloud computing enthusiast and Computer
          Engineering graduate based in the UAE. I thrive at the intersection of
          infrastructure, automation, and innovation.
        </p>
        <p>
          Armed with a high honors degree, the AZ-104, AWS Solutions Architect –
          Associate, and CompTIA Network+ certifications, I’ve built a strong
          foundation in cloud architecture, networking, and systems
          administration.
        </p>
        <p>
          By day, I work as a Survey Programmer at Ventures Middle East,
          automating data processes and deploying interactive systems. On
          evenings and weekends, I dive into cloud labs, infrastructure as code,
          and personal projects that push my learning forward.
        </p>
        <p>
          My goal is to design and implement secure, resilient, and automated
          cloud solutions that solve real-world problems — and to grow every day
          doing what I love.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[50px] max-w-[95%] mx-auto pt-[80px] text-c4">
        <div className="flex flex-col items-center text-center p-4 h-full bg-transparent gap-[10px]">
          <CloudCheck className="w-[8em] h-[8em] mx-auto" />
          <h2 className="text-[32px] uppercase text-c1">Skills</h2>
          <p className="text-[20px]">
            AWS, Azure, IAM, VPC, EC2, S3, Route 53, Load Balancers, Bash
            scripting, AWS CLI, Infrastructure as Code
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4 h-full bg-transparent gap-[10px]">
          <Goal className="w-[8em] h-[8em] mx-auto" />
          <h2 className="text-[32px] uppercase text-c1">Goals</h2>
          <p className="text-[20px]">
            To grow into a Cloud Engineer or DevOps role focused on building
            scalable, secure, and automated multi-cloud systems.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4 h-full bg-transparent gap-[10px]">
          <Layers className="w-[8em] h-[8em] mx-auto" />
          <h2 className="text-[32px] uppercase text-c1">Tech stack</h2>
          <p className="text-[20px]">
            Python, Flask, HTML/CSS, JavaScript, SQL, Git, Linux,
            Virtualization, TCP/IP, Network Security
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4 h-full bg-transparent gap-[10px]">
          <ShieldCheck className="w-[8em] h-[8em] mx-auto" />
          <h2 className="text-[32px] uppercase text-c1">Certs</h2>
          <p className="text-[20px]">
            I’m certified in CompTia Network+, AWS SAA, and AZ-104.
          </p>
        </div>
      </div>

      <div className="flex flex-col justfiy-between gap-[10px] py-[80px] mx-auto text-center text-c4 max-w-[80%] text-[28px]">
        <h1 className="text-c1 text-[48px]">Educational Background</h1>
        <p>BSc in Computer Engineering – Atilim University (Ankara, Turkey)</p>
        <p>Graduated with High Honors, GPA: 3.49</p>
        <p>
          My academic journey laid the technical foundation that I continue to
          build on through hands-on labs, certifications, and real-world
          projects.
        </p>
      </div>

      <ResponsiveMarquee />
    </>
  );
}
