import React from "react";
import Image from "next/image";

const RewardSection = () => {
  return (
    <section className="relative w-full min-h-screen ">
      {/* === TRANSITION SECTION === */}
      <div className="relative w-full flex items-center justify-center top-[10vw]">
        <Image
          src="/left-ropes.png"
          alt="Left Ropes"
          width={300}
          height={300}
          className="absolute w-auto h-[15vw] left-[8vw] top-[-10vw] object-cover"
        />
        <Image
          src="/right-ropes.png"
          alt="Right Ropes"
          width={200}
          height={400}
          className="absolute w-auto h-[15vw] right-[8vw] top-[-5.5vw] object-cover"
        />
        <Image
          src="/railing.png"
          alt="Railing"
          width={1080}
          height={133}
          className="w-full h-auto object-cover z-10"
        />
        <span className="absolute text-center top-[1vw] text-[3vw] rotate-2 text-white bg-amber-500 border-amber-800 border-[1vw] p-[1vw] rounded-lg z-20">
          Rewards
        </span>
      </div>

      <div className="relative w-full flex items-center justify-center top-[20vw] gap-[5vw] pb-[15vw]">
        {/* === BOX === */}
        <div className="w-[25vw] h-[20vw] bg-amber-500 border-amber-900 outline-[1vw] outline-amber-800 border-[0.75vw] rounded-lg flex items-center justify-center flex-col">
          <h3 className="text-[3vw] w-full text-center pt-[1vw]">🎨</h3>
          <span className="text-[1.5vw]">Creative Tools</span>
          <p className="w-full h-full  p-[2vw] text-[1.25vw] border-t-amber-900 border-t-[0.75vw]">
            • Procreate license <br /> • JetBrains IDE license <br /> • Design
            tools <br /> • Cursor Pro
          </p>
        </div>
        <div className="w-[25vw] h-[20vw] bg-amber-500 border-amber-900 outline-[1vw] outline-amber-800 border-[0.75vw] rounded-lg flex items-center justify-center flex-col">
          <h3 className="text-[3vw] w-full text-center pt-[1vw]">🖥️</h3>
          <span className="text-[1.5vw]">Hardware & Setup</span>
          <p className="w-full h-full p-[2vw] text-[1.25vw] border-t-amber-900 border-t-[0.75vw]">
            • Peripherals <br />
            • Computer upgrades <br />
            • Development hardware <br />• Specialty devices
          </p>
        </div>
        <div className="w-[25vw] h-[20vw] bg-amber-500 border-amber-900 outline-[1vw] outline-amber-800 border-[0.75vw] rounded-lg flex items-center justify-center flex-col">
          <h3 className="text-[3vw] w-full text-center pt-[1vw]">🔑</h3>
          <span className="text-[1.5vw]">Infrastructure</span>
          <p className="w-full h-full p-[2vw] text-[1.25vw] border-t-amber-900 border-t-[0.75vw]">
            • Domain credits <br /> • Cloud hosting <br /> • API access <br />•
            Development services
          </p>
        </div>

        {/* UI Designs */}
        <span className="absolute w-[95vw] h-[4vw] top-[7vw] bg-amber-900 -z-10 rounded-lg"></span>
      </div>
    </section>
  );
};

export default RewardSection;
