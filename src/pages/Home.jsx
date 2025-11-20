import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
        ".rabbitWrap",
        { y: 150, opacity: 0, scale: 0.7 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2 },
        "-=0.8"
      )
      .fromTo(
      ".leftText",
      { y: -150, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.8"
    )
      .fromTo(
        ".rightText",
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo(
        ".subText",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        ".ctaBtn",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8"
      );

    gsap.to(".rabbitImg", {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut",
    });

    gsap.to(".scrollIcon", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });
  }, { scope: container });

  return (
    <section
    id="home"
      ref={container}
      className="relative w-full h-screen overflow-hidden"
    >
      <div className="w-full h-full flex flex-col justify-center md:justify-start md:mt-[30vh] items-center text-center gap-6 px-4">

        {/* TITLE + IMAGE */}
        <div className="flex justify-center items-center gap-3 md:gap-6">
          
          <h1 className="leftText text-[12vw] md:text-[8vw] font-bold text-yellow-500 tracking-tight opacity-0">
            TOUR
          </h1>

          <div className="rabbitWrap flex justify-center items-center opacity-0">
            <img
              src="/heroImage/rabbit.png"
              alt="rabbit"
              className="rabbitImg w-32 sm:w-40 md:w-56 select-none pointer-events-none"
            />
          </div>

          <h1 className="rightText text-[12vw] md:text-[8vw] font-bold text-white tracking-tight opacity-0">
            RABBIT
          </h1>
        </div>

        {/* SUBTEXT */}
        <p className="subText text-white/80 text-base md:text-xl max-w-xl opacity-0">
          Making travel dreams a reality — one adventure at a time.
        </p>

        {/* CTA BUTTON */}
        <button className="ctaBtn px-7 py-3 bg-yellow-500 text-black rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all opacity-0">
          Start Your Journey
        </button>
      </div>

      {/* SCROLL ICON */}
      <div className="scrollIcon absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-80">
        <ChevronDown size={40} strokeWidth={1.5} />
      </div>
    </section>
  );
};

export default Home;
