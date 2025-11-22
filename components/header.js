import React, { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Plane, Heart } from "lucide-react";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    // Header slide-in animation
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

  // MENU OPEN/CLOSE TOGGLE
  const toggleMenu = () => {
    const tl = gsap.timeline({
      defaults: { duration: 0.3, ease: "power2.out" },
    });

    if (!isOpen) {
      // OPEN MENU
      tl.to(".line-1", { rotate: 45, y: 6 })
        .to(".line-2", { rotate: -45, y: -6 }, "<")
        .to(".overlay", { yPercent: -100 }, "<")
        .fromTo(
          ".nav-link",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.06 }
        );
    } else {
      // CLOSE MENU
      tl.to(".nav-link", { opacity: 0, y: 10, stagger: -0.06 })
        .to(".overlay", { yPercent: 0 }, "<")
        .to(".line-1", { rotate: 0, y: 0 }, "-=0.1")
        .to(".line-2", { rotate: 0, y: 0 }, "<");
    }

    setIsOpen((prev) => !prev);
  };

  // CLOSE MENU WHEN LINK CLICKED
  const closeMenu = () => {
    const tl = gsap.timeline({
      defaults: { duration: 0.3, ease: "power2.out" },
    });

    tl.to(".nav-link", { opacity: 0, y: 10, stagger: -0.06 })
      .to(".overlay", { yPercent: 100 }, "<")
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
          opacity-0 -translate-y-1/4    /* INITIAL HIDDEN STATE */
        "
      >
        {/* GLOW BACKGROUND */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[45vw] h-[45vw] bg-yellow-400 blur-[180px] rounded-full opacity-25"
          ></div>
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

        {/* HAMBURGER BUTTON */}
        <button
          onClick={toggleMenu}
          className="relative z-10 h-8 w-8 flex flex-col justify-center gap-2 cursor-pointer"
        >
          <span className="line-1 block w-8 h-[2px] bg-white rounded-full" />
          <span className="line-2 block w-8 h-[2px] bg-white rounded-full" />
        </button>
      </header>

      {/* FULL-SCREEN OVERLAY MENU */}
      <div
        className="
          overlay fixed top-[100%] left-0 w-screen h-screen 
          bg-gradient-to-b from-[#f8e27a] via-[#f4c539] to-black
          z-[98] flex flex-col justify-center items-center gap-10
          text-black text-3xl font-bold tracking-wide uppercase
        "
      >
        <a href="#home" onClick={closeMenu} className="nav-link hover:text-white transition">
          Home
        </a>
        <a href="#services" onClick={closeMenu} className="nav-link hover:text-white transition">
          Services
        </a>
        <a href="#about" onClick={closeMenu} className="nav-link hover:text-white transition">
          About
        </a>
        <a href="#testimonial" onClick={closeMenu} className="nav-link hover:text-white transition">
          Testimonial
        </a>
        <a href="#packages" onClick={closeMenu} className="nav-link hover:text-white transition">
          Packages
        </a>
        <a href="#contact" onClick={closeMenu} className="nav-link hover:text-white transition">
          Contact
        </a>

        {/* FOOTER TEXT */}
        <div className="absolute bottom-8 text-center text-sm text-white font-light">
          © 2025 Tour Rabbit — Made with
          <span className="inline-flex items-center text-yellow-600">
            <Heart className="w-4 h-4 mx-1" fill="#f4c539" color="#f4c539" />
          </span>
          by
          <a
            href="https://webli.vercel.app"
            target="_blank"
            className="ml-1 underline underline-offset-4 hover:text-[#f4c539] transition"
          >
            Webli Studio
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
