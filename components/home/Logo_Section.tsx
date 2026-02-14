import Image from "next/image";

const LogoSection = () => {
  return (
    <section className="w-dvw h-dvh overflow-hidden relative flex items-center justify-center">
      {/* === Putting Assets === */}
      <div className="absolute top-25 w-full h-75 flex items-center justify-center duration-150 hover:rotate-5">
        <Image
          src="/logo-bg.png"
          alt="Logo Background"
          width={750}
          height={500}
          className="absolute w-[85vw] h-auto object-cover"
        />
        <Image
          src="/logo.png"
          alt="Logo"
          fetchPriority="high"
          width={750}
          height={500}
          className="absolute w-[60vw] h-auto object-cover"
        />
        <span className="absolute text-center top-[20vw] text-4xl -rotate-5">
          Make Projects, Not Excuses and Earn Rewards with Carnival.
        </span>
      </div>

      {/* === Content === */}
      <form className="absolute bottom-[4vw] flex items-center justify-center bg-orange-400 border-amber-800 border-[1vw] p-[1vw] rounded-lg">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border rounded-md bg-white text-black outline-0 border-none focus:ring-2"
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
