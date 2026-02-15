import React from "react";
import Image from "next/image";

const faqs = [
  {
    id: "team-participation",
    question: "Do I need a team to participate?",
    answer:
      "Not essentially! You can participate solo or form a team of up to 4 pirates. Check our Slack channel if you're looking for crewmates.",
  },
  {
    id: "participation-fee",
    question: "Is there a participation fee?",
    answer:
      "No, the carnival is completely free for everyone. Just bring your laptop and your creative spirit!",
  },
  {
    id: "extension-types",
    question: "What kind of extensions can I build?",
    answer:
      "You can build any VS Code extension that improves developer productivity, adds fun features, or just makes the editor look cool.",
  },
  {
    id: "grant-distribution",
    question: "How are the grants distributed?",
    answer:
      "Grants are awarded based on the complexity, utility, and 'wow' factor of your submission. Payment is processed via bank transfer or crypto.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      className="w-full cursor-pointer bg-amber-500 border-amber-800 border-[0.75vw] outline-[1vw] outline-amber-900 rounded-lg mb-[2vw] transition-all duration-300"
    >
      <div className="flex items-center justify-between p-[1.5vw]">
        <h3 className="text-[1.8vw] font-bold text-amber-950">{question}</h3>
        <span
          className={`text-[2vw] text-amber-900 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 border-t border-amber-800/30"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`text-[1.2vw] text-amber-950 font-medium leading-tight p-[1.5vw] pt-0 transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </button>
  );
};

const FAQSection = () => {
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
          FAQ Section - Under Construction
        </span>
      </div>

      {/* === Content === */}
      <div className="relative w-full top-[20vw] flex items-center justify-center pb-[30vw]">
        <div className="w-full max-w-[70vw] flex flex-col items-center justify-center gap-[1vw]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>

      {/* === UI Background Planks === */}
      <span className="absolute w-[12vw] h-[56vw] top-[26vw] right-[10vw] bg-amber-800 border-amber-900 border-[1vw] rounded-lg -z-10 -rotate-2"></span>
      <span className="absolute w-[8vw] h-[56vw] top-[26vw] left-[10vw] bg-amber-800 border-amber-900 border-[1vw] rounded-lg -z-10 rotate-3 "></span>
    </section>
  );
};

export default FAQSection;
