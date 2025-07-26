import Timeline from "../components/Timeline";

export default function About() {
  return (
    <>
      <div className="flex flex-col justfiy-between gap-[30px] mx-auto text-center text-c4 max-w-[80%] text-[28px] py-[200px]">
        <h1 className="text-c1 text-[48px]">About Me</h1>
        <p>
          Hi, I’m Khaled Almassri — a cloud computing enthusiast and Computer
          Engineering graduate based in the UAE. I thrive at the intersection of
          infrastructure, automation, and innovation.
        </p>
      </div>

      <Timeline />
    </>
  );
}
