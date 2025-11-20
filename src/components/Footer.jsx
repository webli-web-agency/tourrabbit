import React from 'react'
import { Instagram, Facebook, Twitter, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-8 md:px-16 py-16 border-t border-white/10 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-yellow-400 blur-[200px] rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between gap-14">
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-4 max-w-sm">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Tour Rabbit</h1>
          <p className="text-sm text-white/70 leading-relaxed">
            Hop into unforgettable journeys! We craft unique and memorable travel experiences
            with the perfect blend of design, storytelling, and adventure.
          </p>
        </div>

        {/* MIDDLE LINKS */}
        <div className="flex flex-col md:flex-row gap-16 text-white/80 text-sm">
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-medium mb-1 tracking-wide">Navigation</h3>
            <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            <a href="#services" className="hover:text-yellow-400 transition">Services</a>
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#testimonial" className="hover:text-yellow-400 transition">Testimonial</a>
            <a href="#gallery" className="hover:text-yellow-400 transition">Gallery</a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white font-medium mb-1 tracking-wide">Support</h3>
            <a href="#faq" className="hover:text-yellow-400 transition">FAQ</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
            <a href="#policy" className="hover:text-yellow-400 transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-yellow-400 transition">Terms & Conditions</a>
          </div>
        </div>

        {/* RIGHT – SOCIAL ICONS */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-medium tracking-wide mb-1">Follow Us</h3>
          <div className="flex items-center gap-5 text-white/70">
            <Instagram className="w-5 h-5 hover:text-yellow-400 transition cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-yellow-400 transition cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-yellow-400 transition cursor-pointer" />
            <Mail className="w-5 h-5 hover:text-yellow-400 transition cursor-pointer" />
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="relative z-10 mt-14 pt-6 border-t border-white/10 text-center text-sm text-white/60">
        © 2025 Tour Rabbit — Made with <span className="inline-flex items-center text-yellow-400"><Heart className="w-4 h-4 mx-1" fill="currentColor" /></span> by 
        <a href="https://webli.vercel.app" target="_blank" className="ml-1 underline underline-offset-4 hover:text-white transition">Webli Studio</a>
      </div>
    </footer>
  )
}

export default Footer