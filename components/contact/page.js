"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const Contact = () => {
  const container = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const WEB3_KEY = process.env.NEXT_PUBLIC_FORM_KEY;

  useGSAP(() => {
    const ctx = gsap.context(() => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("All fields are required!");
      return;
    }

    const form = new FormData();
    form.append("access_key", WEB3_KEY);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      ref={container}
      className="relative w-full min-h-screen flex flex-col items-center px-6 py-20 text-white"
    >
      {/* Heading */}
      <h1 className="text-[12vw] md:text-[7vw] font-bold tracking-tight flex gap-4 justify-center">
        <div className="head-1">CONTACT</div>
        <div className="head-2 text-yellow-500">US</div>
      </h1>

      {/* SUBTEXT */}
      <p className="text-neutral-300 text-center mt-4 text-sm md:text-lg max-w-xl">
        Have questions or ready to plan your next adventure? We're here to help you anytime.
      </p>

      {/* FORM */}
      <div className="formWrap w-full max-w-3xl mt-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl">
        
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-center">

          {/* PHONE */}
          <a href="tel:+919618165352" className="flex md:flex-col items-center gap-2 group">
            <Phone className="text-yellow-400 group-hover:text-yellow-300" size={28} />
            <p className="text-sm text-neutral-300 group-hover:text-white">
              +91 9618165352
            </p>
          </a>

          {/* EMAIL */}
          <a href="mailto:tourrabbit003@gmail.com" className="flex md:flex-col items-center gap-2 group">
            <Mail className="text-yellow-400 group-hover:text-yellow-300" size={28} />
            <p className="text-sm text-neutral-300 group-hover:text-white">
              tourrabbit003@gmail.com
            </p>
          </a>

          {/* LOCATION */}
          <div className="flex md:flex-col items-center gap-2">
            <MapPin className="text-yellow-400" size={28} />
            <p className="text-sm text-neutral-300">Hyderabad, Telangana</p>
          </div>

        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white"
          />

          <input
            type="number"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white md:col-span-2"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white md:col-span-2"
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
