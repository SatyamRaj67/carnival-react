import React from "react";
import Image from "next/image";

type RewardBoxProps = {
  amount: string;
  subtitle: string;
  description: string;
  className?: string;
};

const RewardBox = ({
  amount,
  subtitle,
  description,
  className = "",
}: RewardBoxProps) => {
  return (
    <div
      className={`w-full max-w-md md:w-1/3 md:max-w-[25vw] h-auto md:h-[20vw] bg-amber-500 border-amber-900 outline-[1vw] outline-amber-800 border-[0.75vw] rounded-lg flex items-center justify-center flex-col ${className}`}
    >
      <h3 className="text-[3vw] w-full text-center pt-[1vw]">{amount}</h3>
      <span className="text-[1.5vw]">{subtitle}</span>
      <p className="w-full h-full flex items-center justify-center p-[2vw] text-[1.25vw] text-center border-t-amber-900 border-t-[0.75vw]">
        {description}
      </p>
    </div>
  );
};

const SubmissionSection = () => {
  const rewards = [
    {
      id: 1,
      amount: "+$10",
      subtitle: "First on a new Editor/App",
      description:
        "Ship the first original extension for an editor/app no one's hit yet.",
    },
    {
      id: 2,
      amount: "+$25",
      subtitle: "Goes Viral",
      description:
        "Make something people love — think 100+ GitHub ⭐ or 250+ social likes.",
    },
    {
      id: 3,
      amount: "+$5-$20",
      subtitle: "Wildcard Bonus",
      description:
        "Extra love for wildly creative, funny, or technically impressive builds.",
    },
  ];

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
          Submission
        </span>
      </div>

      <div className="absolute top-[20vw] left-0 right-0 text-center">
        <h1 className="text-[3vw]">Sweet Deals on Submission</h1>
        <p className="text-[2vw]">
          Bonus boosts for standout builds — be original and have fun.
        </p>
      </div>

      <div className="relative w-full flex flex-col sm:flex-col md:flex-row items-center justify-center top-[30vw] sm:top-[26vw] md:top-[20vw] gap-[6vw] sm:gap-[5vw] md:gap-[3vw] pb-[28vw] sm:pb-[22vw] md:pb-[15vw] px-[6vw] sm:px-[8vw] md:px-0">
        {/* === BOX === */}
        {rewards.map((reward) => (
          <RewardBox
            key={reward.id}
            amount={reward.amount}
            subtitle={reward.subtitle}
            description={reward.description}
          />
        ))}

        {/* UI Designs */}
        <span className="absolute w-[95vw] h-[4vw] top-[7vw] bg-amber-900 -z-10 rounded-lg"></span>
      </div>
    </section>
  );
};

export default SubmissionSection;
