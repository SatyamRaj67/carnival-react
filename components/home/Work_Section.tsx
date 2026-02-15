import Image from "next/image";

const WorkSection = () => {
  return (
    <section className="w-full h-[120vw] relative">
      {/* === TRANSITION SECTION === */}
      <div className="w-full flex items-center justify-center">
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
        <span className="absolute text-center top-[2.5vw] text-[3vw] rotate-2 text-white bg-amber-500 border-amber-800 border-[1vw] p-[1vw] rounded-lg z-20">
          How it works
        </span>
      </div>

      {/* === CONTENT SECTION === */}
      <div className="relative w-full">
        {/* Assets */}
        <div>
          <Image
            src="/tent.png"
            alt="Tent"
            width={600}
            height={400}
            className="absolute w-auto h-[24vw] left-[5vw] object-cover hover:-translate-y-5 transition-all "
          />
          <Image
            src="/carousel.png"
            alt="Carousel"
            width={600}
            height={600}
            className="absolute w-auto h-[30vw] top-[35vw] left-[65vw] object-cover hover:-translate-y-5 transition-all "
          />
          <Image
            src="/ferris-wheel.png"
            alt="Ferris Wheel"
            width={500}
            height={500}
            className="absolute w-auto h-[30vw] top-[75vw] left-[5vw] object-cover hover:-translate-y-5 transition-all"
          />

          {/* Staircase should be in the same for overlapping */}
          <div className="relative left-[35vw] top-[20vw] w-[30vw] h-[35vw]">
            <Image
              src="/stair-1.png"
              alt="Stair 1"
              width={550}
              height={700}
              className="absolute w-auto h-[35vw] left-[5vw] object-cover "
            />
            <Image
              src="/stair-path-1.png"
              alt="Stair Path 1"
              width={550}
              height={700}
              className="absolute w-auto h-[35vw] left-[5vw] object-cover "
            />
          </div>
          <div className="relative h-[15vw] w-[40vw] left-[25vw] top-[27vw]">
            <Image
              src="/stair-2.png"
              alt="Stair 2"
              width={950}
              height={400}
              className="absolute w-auto h-[15vw] left-[5vw] object-cover "
            />
            <Image
              src="/stair-path-2.png"
              alt="Stair Path 2"
              width={950}
              height={400}
              className="absolute w-auto h-[15vw] left-[5vw] object-cover scale-x-105"
            />
          </div>

          {/* === Information Boxes === */}
<<<<<<< HEAD
          <div className="absolute top-[6vw] right-[5vw] w-[30vw] h-[18vw] bg-amber-500 border-amber-900 border-[1vw] rounded-lg">
            <h2 className="text-center text-white text-[1.5vw] bg-amber-800 border-amber-900 border-[1vw] rounded-lg relative top-[2vw] scale-100 md:scale-125 max-w-full overflow-hidden wrap-break-words">
              Step 1: Make a Plugin/Extension
=======
          <div className="absolute top-[6vw] right-[5vw] w-[25vw] h-[18vw] bg-amber-500 border-amber-900 border-[1vw] rounded-lg">
            <h2 className="text-center text-white text-[1.5vw] bg-amber-800 border-amber-900 border-[1vw] rounded-lg relative top-[2vw] scale-125">
              Step 1: Make an Extension
>>>>>>> parent of 3f907c4 (Home Page is finally done)
            </h2>
            <p className="text-center text-white text-[1.5vw] relative top-[4vw] px-[1vw]">
              Create a new extension in your development environment.
            </p>
          </div>

          <div className="absolute top-[36vw] left-[10vw] w-[25vw] h-[18vw] bg-amber-500 border-amber-900 border-[1vw] rounded-lg">
            <h2 className="text-center text-white text-[1.5vw] bg-amber-800 border-amber-900 border-[1vw] rounded-lg relative top-[2vw] scale-125">
              Step 2: Ship Your Extension
            </h2>
            <p className="text-center text-white text-[1.5vw] relative top-[4vw] px-[1vw]">
              Publish your extension to the Chrome Web Store and share it with
              the world.
            </p>
          </div>

          <div className="absolute top-[82vw] right-[10vw] w-[25vw] h-[18vw] bg-amber-500 border-amber-900 border-[1vw] rounded-lg">
            <h2 className="text-center text-white text-[1.5vw] bg-amber-800 border-amber-900 border-[1vw] rounded-lg relative top-[2vw] scale-125">
              Step 3: Earn Rewards
            </h2>
            <p className="text-center text-white text-[1.5vw] relative top-[4vw] px-[1vw]">
              Earn points based on the popularity and impact of your extension.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
