"use clients";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Contact = () => {
  const container = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Left Heading
      gsap.from(".head-1", {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      // Right Heading
      gsap.from(".head-2", {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      // Form Fade In
      gsap.from(".formWrap", {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 65%",
        },
      });
    }, container);

    return () => ctx.revert();
  });

  return (
    <section
      id="contact"
      ref={container}
      className="relative w-full min-h-screen flex flex-col items-center px-6 py-20 text-white"
    >
      {/* Heading */}
      <h1 className="text-[12vw] md:text-[7vw] font-bold tracking-tight flex gap-4 justify-center leading-none">
        <div className="head-1">CONTACT</div>
        <div className="head-2 text-yellow-500">US</div>
      </h1>

      {/* SUBTEXT */}
      <p className="text-neutral-300 text-center mt-4 text-sm md:text-lg max-w-xl">
        Have questions or ready to plan your next adventure?  
        We're here to help you anytime.
      </p>

      {/* FORM */}
      <div className="formWrap w-full max-w-3xl mt-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl">
        
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-center">
          <div className="flex flex-col items-center gap-2">
            <Phone className="text-yellow-400" size={28} />
            <p className="text-sm text-neutral-300">+91 9618165352</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Mail className="text-yellow-400" size={28} />
            <p className="text-sm text-neutral-300">tourrabbitholidays@gmail.com</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <MapPin className="text-yellow-400" size={28} />
            <p className="text-sm text-neutral-300">Hyderabad, Telangana</p>
          </div>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-yellow-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-yellow-400"
          />

          <input
            type="number"
            placeholder="Phone Number"
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-yellow-400 md:col-span-2"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-yellow-400 md:col-span-2"
          ></textarea>

          {/* BUTTON */}
          <button
            type="submit"
            className="md:col-span-2 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-full transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
