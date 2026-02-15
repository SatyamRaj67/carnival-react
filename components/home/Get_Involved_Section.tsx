import React from "react";
import Image from "next/image";

const GetInvolvedSection = () => {
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
          How to Get Involved
        </span>
      </div>

      {/* === A LIST OF STEPS TO FOLLOW === */}
      <div className="relative w-full top-[20vw] flex items-center justify-center pb-[15vw]">
        <ul className="w-full max-w-[80vw] flex flex-col items-center justify-center gap-[4vw]">
          <li className="w-full text-[1.5vw] p-[1vw] bg-amber-500 border-amber-800 border-[0.75vw] outline-[1vw] outline-amber-900 rounded-lg mb-[1vw] flex items-center justify-start gap-[1vw]">
            <span className="bg-amber-800 rounded-full w-[2vw] h-[2vw] flex items-center justify-center text-white">
              1
            </span>
            <div>
              <h3 className="text-[1.5vw]">Join the #carnival channel</h3>
              <p className="text-[1vw]">
                Ask, share, and vibe with the community on Slack
              </p>
            </div>
          </li>
          <li className="w-full text-[1.5vw] p-[1vw] bg-amber-500 border-amber-800 border-[0.75vw] outline-[1vw] outline-amber-900 rounded-lg mb-[1vw] flex items-center justify-start gap-[1vw]">
            <span className="bg-amber-800 rounded-full w-[2vw] h-[2vw] flex items-center justify-center text-white">
              2
            </span>
            <div>
              <h3 className="text-[1.5vw]">Set up Hackatime</h3>
              <p className="text-[1vw]">
                Start tracking your time to earn grants
              </p>
            </div>
          </li>
          <li className="w-full text-[1.5vw] p-[1vw] bg-amber-500 border-amber-800 border-[0.75vw] outline-[1vw] outline-amber-900 rounded-lg mb-[1vw] flex items-center justify-start gap-[1vw]">
            <span className="bg-amber-800 rounded-full w-[2vw] h-[2vw] flex items-center justify-center text-white">
              3
            </span>
            <div>
              <h3 className="text-[1.5vw]">Build your Extension</h3>
              <p className="text-[1vw]">
                Create a plugin or widget and ship it
              </p>
            </div>
          </li>
          <li className="w-full text-[1.5vw] p-[1vw] bg-amber-500 border-amber-800 border-[0.75vw] outline-[1vw] outline-amber-900 rounded-lg mb-[1vw] flex items-center justify-start gap-[1vw]">
            <span className="bg-amber-800 rounded-full w-[2vw] h-[2vw] flex items-center justify-center text-white">
              4
            </span>
            <div>
              <h3 className="text-[1.5vw]">Submit for review</h3>
              <p className="text-[1vw]">
                Claim your rewards and get recognized
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* === UI === */}
      <span className="absolute w-[10vw] h-[52vw] top-[26vw] left-[5vw] bg-amber-800 border-amber-900 border-[1vw] rounded-lg -z-10"></span>
    </section>
  );
};

export default GetInvolvedSection;
