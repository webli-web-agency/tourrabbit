import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const About = () => {
  const container = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // HEADING ANIMATION
      gsap.from(".head-1", {
        y: 150,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      gsap.from(".head-2", {
        y: -150,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      // CHARACTER BY CHARACTER COLOR CHANGE
      let chars = textRef.current.querySelectorAll(".char");

      gsap.to(chars, {
        color: "#FACC15",
        stagger: 0.03,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top 96%",
          end: "bottom 96%",
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert();
  });

  const aboutText =
    "Tour Rabbit, founded in 2022 by Ninny Yadav and situated in Hyderabad, Telangana, began with a simple idea — to make travel feel personal again. What started as a small initiative soon grew into a trusted travel companion for people who wanted more than just tickets and itineraries. We believe every journey carries a story, and our mission is to make that story unforgettable. From thoughtfully curated tour packages to fully customized travel plans, Tour Rabbit handles every detail with care, responsibility, and creativity. Whether it’s a spontaneous weekend getaway, a peaceful solo trip, or a family vacation filled with memories, we ensure comfort, clarity, and complete support at every step. Our goal is to deliver smooth, stress-free, and meaningful travel experiences that stay with you long after the journey ends. With Tour Rabbit, you don’t just travel — you discover, explore, and create moments that become lifelong memories.";

  return (
    <section
      ref={container}
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 text-white"
    >
      {/* HEADING */}
      <h1 className="text-[12vw] md:text-[7vw] font-bold tracking-tight flex gap-6 justify-center leading-none">
        <div className="head-1 block">OUR</div>
        <div className="head-2 text-yellow-500 block">STORY</div>
      </h1>

      {/* PARAGRAPH */}
      <p
        ref={textRef}
        className="mt-10 max-w-4xl text-center text-xl md:text-xl text-neutral-300 leading-[1.8] tracking-wide"
      >
        {aboutText.split("").map((char, index) => (
          <span key={index} className="char text-neutral-500">
            {char}
          </span>
        ))}
      </p>
    </section>
  );
};

export default About;
