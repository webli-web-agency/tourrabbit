// Card.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Card = ({ icon: Icon, title, desc }) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
      },
    });
  });

  return (
    <div
      ref={cardRef}
      className="
        group 
        bg-white/5 
        backdrop-blur-xl 
        border border-yellow-400/20
        shadow-[0_0_18px_rgba(255,200,0,0.12)]

        hover:border-yellow-400/40
        hover:shadow-[0_0_30px_rgba(255,220,0,0.35)]
        hover:scale-[1.03]

        transition-all duration-300 
        rounded-2xl 
        p-6 flex flex-col items-center text-center cursor-pointer
      "
    >
      {/* ICON */}
      <div className="text-yellow-400 mb-4 group-hover:scale-125 transition-all duration-300">
        <Icon size={40} strokeWidth={1.5} />
      </div>

      {/* TITLE */}
      <h3 className="text-white font-semibold text-lg tracking-wide">
        {title}
      </h3>

      {/* DESCRIPTION */}
      {desc && (
        <p className="text-neutral-300 text-sm mt-2 leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  );
};

export default Card;
