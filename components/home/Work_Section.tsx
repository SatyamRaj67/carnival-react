import Image from "next/image";

const WorkSection = () => {
  return (
    <section className="w-dvw h-auto relative flex items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <Image
          src="/railing.png"
          alt="Railing"
          width={1080}
          height={133}
          className="w-full h-auto object-cover"
        />
        <span className="absolute text-center text-4xl rotate-2 bg-amber-500 border-amber-800 border-[1vw] p-[1vw] rounded-lg">
          How it works
        </span>
      </div>
    </section>
  );
};

export default WorkSection;
