import Image from "next/image";

const LogoSection = () => {
  return (
    <section className="w-full h-[75vw] overflow-hidden relative flex justify-center lg:h-dvh ">
      {/* === Putting Assets === */}
      <div className="relative top-[5vw] w-[85vw] h-[30vw] flex items-center justify-center duration-150 hover:rotate-[5deg]">
        <Image
          src="/logo-bg.png"
          alt="Logo Background"
          width={750}
          height={500}
          className="absolute w-auto h-[30vw] object-cover"
        />
        <Image
          src="/logo.png"
          alt="Logo"
          fetchPriority="high"
          width={750}
          height={500}
          className="absolute w-auto h-[25vw] object-cover"
        />
        <span className="absolute text-center bottom-0 text-[2.5vw] -rotate-[5deg]">
          Make Projects, Not Excuses and Earn Rewards with Carnival.
        </span>
      </div>

      {/* === Content === */}
      <form className="absolute top-[40vw] w-[75vw] flex items-center justify-center bg-orange-400 border-amber-800 border-[1vw] p-[1vw] rounded-lg lg:w-[30vw]">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border rounded-md bg-white text-black outline-0 border-none focus:ring-2 flex-1"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-500 text-white rounded-md transition-all hover:tracking-widest"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default LogoSection;
