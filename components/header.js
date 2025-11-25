import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Plane, Heart } from "lucide-react";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".nav-wrapper",
      { opacity: 0, y: "-25%" },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  const toggleMenu = () => {
    const tl = gsap.timeline({
      defaults: { duration: 0.35, ease: "power2.out" },
    });

    if (!isOpen) {
      tl.to(".line-1", { rotate: 45, y: 6 })
        .to(".line-2", { rotate: -45, y: -6 }, "<")
        .to(".overlay", { yPercent: -100, opacity: 1 }, "<")
        .fromTo(
          ".nav-link",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.06 },
          "<0.15"
        );
    } else {
      tl.to(".nav-link", { opacity: 0, y: 10, stagger: -0.06 })
        .to(".overlay", { yPercent: 0, opacity: 0 }, "<")
        .to(".line-1", { rotate: 0, y: 0 }, "-=0.1")
        .to(".line-2", { rotate: 0, y: 0 }, "<");
    }

    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    const tl = gsap.timeline({
      defaults: { duration: 0.3, ease: "power2.out" },
    });

    tl.to(".nav-link", { opacity: 0, y: 10, stagger: -0.06 })
      .to(".overlay", { yPercent: 0, opacity: 0 }, "<")
      .to(".line-1", { rotate: 0, y: 0 }, "-=0.1")
      .to(".line-2", { rotate: 0, y: 0 }, "<");

    setIsOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className="
          nav-wrapper
          fixed top-0 left-0 w-full z-[999]
          bg-black/90 backdrop-blur-lg border-b border-white/10
          px-8 py-6 flex items-center justify-between
          opacity-0
        "
      >
        {/* GLOW BACKGROUND */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] bg-yellow-400 blur-[180px] rounded-full opacity-25"></div>
        </div>

        {/* LEFT LOGO + BRAND */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden glow">
            <img src="/logo.webp" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-white/80 uppercase text-xs tracking-[0.25em]">
              <Plane className="w-4 h-4 text-white/70" />
              Tour Rabbit
            </div>
            <span className="text-white/60 text-[11px]">
              Hop into unforgettable journeys 🐇
            </span>
          </div>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={toggleMenu}
          className="relative z-10 h-8 w-8 flex flex-col justify-center gap-2 cursor-pointer"
        >
          <span className="line-1 block w-8 h-[2px] bg-white rounded-full" />
          <span className="line-2 block w-8 h-[2px] bg-white rounded-full" />
        </button>
      </header>

      {/* OVERLAY */}
      <div
        className="
          overlay fixed top-0 left-0 w-screen h-screen
          bg-gradient-to-b from-[#f8e27a] via-[#f4c539] to-black
          z-[98] flex flex-col justify-center items-center gap-5 md:gap-10
          text-black text-md md:text-2xl font-bold tracking-wide uppercase
          opacity-0
          translate-y-full
        "
      >
        {/* LINKS */}
        <a href="#home" onClick={closeMenu} className="nav-link hover:text-white transition">Home</a>
        <a href="#services" onClick={closeMenu} className="nav-link hover:text-white transition">Services</a>
        <a href="#about" onClick={closeMenu} className="nav-link hover:text-white transition">About</a>
        <a href="#testimonial" onClick={closeMenu} className="nav-link hover:text-white transition">Testimonial</a>
        <a href="#packages" onClick={closeMenu} className="nav-link hover:text-white transition">Packages</a>
        <a href="#contact" onClick={closeMenu} className="nav-link hover:text-white transition">Contact</a>

        {/* FOOTER */}
        <div className="absolute bottom-8 text-center text-sm text-white font-light px-4">
          © 2025 Tour Rabbit — Made with
          <Heart className="inline w-4 h-4 mx-1" fill="#f4c539" color="#f4c539" />
          by
          <a href="https://webli.vercel.app" target="_blank" className="ml-1 underline underline-offset-4 hover:text-[#f4c539] transition">
            Webli Studio
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
