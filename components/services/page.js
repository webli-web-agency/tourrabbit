"use client";

// Service.jsx
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Card from "../card.js"

// Icons
import {
  Car,
  Train,
  BedDouble,
  Binoculars,
  Flame,
  Map,
  Utensils,
  ShieldCheck,
  Ticket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Services = () => {
  const container = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // LEFT HEADING ANIMATION (SAME AS About.jsx)
      gsap.from(".head-1", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      // RIGHT HEADING ANIMATION (SAME AS About.jsx)
      gsap.from(".head-2", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      // SUBTEXT ANIMATION
      gsap.from(".service-sub", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 65%",
        },
      });
    }, container);

    return () => ctx.revert();
  });

  const services = [
    { icon: Car, title: "Transport", desc: "Safe & comfortable AC transport." },
    { icon: Train, title: "Train Tickets", desc: "Confirmed tickets included." },
    { icon: BedDouble, title: "Stay", desc: "Cozy hotels & camps included." },
    { icon: Binoculars, title: "Sightseeing", desc: "Explore top attractions." },
    { icon: Flame, title: "Campfire", desc: "Bonfire & DJ night activities." },
    { icon: Map, title: "Trip Guide", desc: "Dedicated trip captain support." },
    { icon: Utensils, title: "Meals", desc: "Breakfast & dinner included." },
    { icon: ShieldCheck, title: "First Aid", desc: "Safety support available." },
    { icon: Ticket, title: "Tolls & Taxes", desc: "All charges included." },
  ];

  return (
    <section
      ref={container}
      id="services"
      className="w-full min-h-screen flex flex-col items-center px-6 py-20 text-white"
    >
      {/* HEADING */}
      <h1 className="text-[12vw] md:text-[7vw] font-bold tracking-tight flex gap-4 justify-center leading-none">
        <div className="head-1 block">OUR</div>
        <div className="head-2 text-yellow-500 block">SERVICES</div>
      </h1>

      {/* SUBTEXT */}
      <p className="service-sub text-neutral-300 max-w-2xl mt-4 text-center text-sm md:text-lg">
        We provide everything you need for a perfect and stress-free travel
        experience.
      </p>

      {/* CARDS GRID */}
      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-14">
        {services.map((s, i) => (
          <Card key={i} icon={s.icon} title={s.title} desc={s.desc} />
        ))}
      </div>
    </section>
  );
};

export default Services;
