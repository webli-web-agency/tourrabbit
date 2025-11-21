"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Aarav Sharma",
    text: "Our Hyderabad to Goa trip was perfectly planned. Smooth booking, beautiful stays and great support throughout.",
  },
  {
    name: "Riya Verma",
    text: "Amazing experience! They helped us choose the best package for Pondicherry and everything was exactly as promised.",
  },
  {
    name: "Krishna Patel",
    text: "Very professional. The trip was budget-friendly yet premium. Loved the hotel selection and itinerary.",
  },
  {
    name: "Nikita Mehra",
    text: "Booking my Manali trip was super easy. I felt safe, comfortable and well-guided the whole time.",
  },
  {
    name: "Sahil Gupta",
    text: "Great value for money! The Kerala package was stunning and well organized. Highly recommended.",
  },
  {
    name: "Priya Deshmukh",
    text: "Loved how transparent and helpful they were. My solo trip to Jaipur became memorable because of them.",
  },
  {
    name: "Arjun Nair",
    text: "Everything was smooth right from pickup to drop. Perfect for family vacations. Will surely book again.",
  },
  {
    name: "Meera Joshi",
    text: "Affordable and hassle-free. Our Ooty trip was beautiful and perfectly planned.",
  },
  {
    name: "Rohan Jadhav",
    text: "Superb service! Quick responses, clear details and no hidden charges. Goa trip was 10/10.",
  },
];

const Testimonials = () => {
  const cardsRef = useRef([]);

  // GSAP Reveal Animation
  useGSAP(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.18,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#testimonial",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="testimonial"
      className="relative w-full min-h-screen py-20 bg-black flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
        Happy Travellers
      </h2>
      <p className="text-neutral-400 text-lg mt-3">
        Real experiences from people who travelled with us
      </p>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-[90%] max-w-6xl">
        {testimonials.map((t, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl 
                       shadow-[0_8px_30px_rgba(0,0,0,0.25)] 
                       hover:scale-[1.02] transition-all duration-300"
          >
            <h3 className="text-white font-semibold text-lg">{t.name}</h3>

            <p className="text-neutral-300 mt-4 text-sm leading-relaxed">
              "{t.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
