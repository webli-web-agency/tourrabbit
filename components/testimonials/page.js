"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const testimonials = [
  { name: "Aarav Sharma", text: "Our Hyderabad to Goa trip was perfectly planned. Smooth booking, beautiful stays and great support throughout." },
  { name: "Riya Verma", text: "Amazing experience! They helped us choose the best package for Pondicherry and everything was exactly as promised." },
  { name: "Krishna Patel", text: "Very professional. The trip was budget-friendly yet premium. Loved the hotel selection and itinerary." },
  { name: "Nikita Mehra", text: "Booking my Manali trip was super easy. I felt safe, comfortable and well-guided the whole time." },
  { name: "Sahil Gupta", text: "Great value for money! The Kerala package was stunning and well organized. Highly recommended." },
  { name: "Priya Deshmukh", text: "Loved how transparent and helpful they were. My solo trip to Jaipur became memorable because of them." },
  { name: "Arjun Nair", text: "Everything was smooth right from pickup to drop. Perfect for family vacations. Will surely book again." },
  { name: "Meera Joshi", text: "Affordable and hassle-free. Our Ooty trip was beautiful and perfectly planned." },
  { name: "Rohan Jadhav", text: "Superb service! Quick responses, clear details and no hidden charges. Goa trip was 10/10." },
];

const Testimonials = () => {
  const container = useRef(null);
  const cardsRef = useRef([]);

  // Reset refs per render
  cardsRef.current = [];

  useGSAP(() => {
    const ctx = gsap.context(() => {

      // Heading Animations
      gsap.from(".test-head-1", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.from(".test-head-2", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.from(".test-sub", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });

      // Card Animation
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonial"
      ref={container}
      className="w-full min-h-screen py-20 bg-black flex flex-col items-center px-6 relative z-[5]"
    >
      {/* Heading */}
      <h1 className="text-[12vw] md:text-[7vw] font-bold tracking-tight flex gap-4 justify-center leading-none text-center">
        <span className="test-head-1 block text-white">HAPPY</span>
        <span className="test-head-2 block text-yellow-500">TRAVELLERS</span>
      </h1>

      {/* Subtext */}
      <p className="test-sub text-neutral-300 max-w-2xl mt-4 text-center text-sm md:text-lg">
        Real experiences from people who travelled with us.
      </p>

      {/* Cards Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[90%] max-w-6xl">
        {testimonials.map((t, i) => (
          // yellowice glow cards
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="rounded-lg shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-shadow duration-300"
          >
            <div className="bg-black rounded-lg p-6 h-full flex flex-col justify-between">
              <p className="text-neutral-300 text-sm md:text-base mb-4">"{t.text}"</p>
              <h3 className="text-yellow-500 font-semibold text-sm md:text-base mt-4 self-end">- {t.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
