import Timeline from "../components/Timeline";

export default function About() {
  return (
    <>
      <div className="flex flex-col justfiy-between gap-[30px] mx-auto text-center text-c4 max-w-[80%] text-[28px] py-[200px]">
        <h1 className="text-c1 text-[48px]">About Me</h1>
        <p>
          Curious mind, creative soul. Always learning, building, and finding meaning in the little things.
        </p>
      </div>

      <Timeline />
    </>
  );
}
