import React from "react";
import Image from "next/image";

const rewardCards = [
  {
    icon: "🎨",
    title: "Creative Tools",
    items: [
      "Procreate license",
      "JetBrains IDE license",
      "Design tools",
      "Cursor Pro",
    ],
  },
  {
    icon: "🖥️",
    title: "Hardware & Setup",
    items: [
      "Peripherals",
      "Computer upgrades",
      "Development hardware",
      "Specialty devices",
    ],
  },
  {
    icon: "🔑",
    title: "Infrastructure",
    items: [
      "Domain credits",
      "Cloud hosting",
      "API access",
      "Development services",
    ],
  },
];

const RewardSection = () => {
  return (
    <section className="relative w-full min-h-screen ">
      {/* === TRANSITION SECTION === */}
      <div className="relative w-full flex items-center justify-center top-[10vw]">
        <Image
          src="/left-ropes.png"
          alt=""
          width={300}
          height={300}
          className="absolute w-auto h-[15vw] left-[8vw] top-[-10vw] object-cover"
        />
        <Image
          src="/right-ropes.png"
          alt=""
          width={200}
          height={400}
          className="absolute w-auto h-[15vw] right-[8vw] top-[-5.5vw] object-cover"
        />
        <Image
          src="/railing.png"
          alt=""
          width={1080}
          height={133}
          className="w-full h-auto object-cover z-10"
        />
        <span className="absolute text-center top-[1vw] text-[3vw] rotate-2 text-white bg-amber-500 border-amber-800 border-[1vw] p-[1vw] rounded-lg z-20">
          Rewards
        </span>
      </div>

      <div className="relative w-full flex items-center justify-center top-[20vw] gap-[5vw] pb-[15vw]">
        {rewardCards.map((card) => (
          <div
            key={card.title}
            className="w-[25vw] h-[20vw] bg-amber-500 border-amber-900 outline-[1vw] outline-amber-800 border-[0.75vw] rounded-lg flex items-center justify-center flex-col"
          >
            <h3 className="text-[1.5vw] w-full text-center pt-[1vw]">
              <span
                role="img"
                aria-hidden="true"
                className="text-[3vw] align-middle mr-[0.5vw]"
              >
                {card.icon}
              </span>
              <span>{card.title}</span>
            </h3>
            <ul className="w-full h-full p-[2vw] text-[1.25vw] border-t-amber-900 border-t-[0.75vw] list-disc pl-[3vw]">
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* UI Designs */}
        <span className="absolute w-[95vw] h-[4vw] top-[7vw] bg-amber-900 -z-10 rounded-lg"></span>
      </div>
    </section>
  );
};

export default RewardSection;
