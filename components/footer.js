import React from 'react'
import { Instagram, Mail, Heart } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-8 md:px-16 py-12 border-t border-white/10 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] bg-yellow-400 blur-[160px] rounded-full opacity-20"></div>
      </div>

      {/* MAIN FOOTER ROW */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between gap-10 md:gap-20">

        {/* LEFT SECTION */}
        <div className="flex flex-col gap-3 max-w-sm">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Tour <span className="text-yellow-500">Rabbit</span></h1>
          <p className="text-sm text-white/70 leading-relaxed">
            Hop into unforgettable journeys! We craft unique travel experiences with the perfect
            blend of design, storytelling, and adventure.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-2 text-white/80 text-sm">
          <h3 className="text-white font-medium mb-2 tracking-wide">Navigation</h3>

          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#services" className="hover:text-yellow-400 transition">Services</a>
          <a href="#packages" className="hover:text-yellow-400 transition">Packages</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#testimonial" className="hover:text-yellow-400 transition">Testimonial</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        {/* CONNECT */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-medium tracking-wide mb-1">Connect With Us</h3>

          <div className="flex items-center gap-4 text-white/70">

            {/* Instagram */}
            <a 
              href="https://instagram.com/tour__rabbit/" 
              target="_blank" 
              className="hover:text-yellow-400 transition cursor-pointer"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* WhatsApp with Prefilled Message */}
            <a 
              href="https://wa.me/919618165352?text=Hi%20Tour%20Rabbit%2C%20I%20want%20to%20plan%20a%20trip.%20Please%20help%20me%20with%20the%20details."
              target="_blank" 
              className="hover:text-yellow-400 transition cursor-pointer"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>

            {/* Gmail with Prefilled Subject + Body */}
            <a 
              href="mailto:tourrabbit003@gmail.com?subject=Trip%20Inquiry%20-%20Tour%20Rabbit&body=Hi%20Tour%20Rabbit%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20travel%20packages.%20Please%20share%20the%20details.%0A%0AThank%20you!"
              className="hover:text-yellow-400 transition cursor-pointer"
            >
              <Mail className="w-5 h-5" />
            </a>

          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="relative z-10 mt-10 pt-4 border-t border-white/10 text-center text-xs md:text-sm text-white/60">
        © 2025 Tour Rabbit — Made with 
        <span className="inline-flex items-center text-yellow-400">
          <Heart className="w-4 h-4 mx-1" fill="currentColor" />
        </span> 
        by 
        <a
          href="https://webli.vercel.app"
          target="_blank"
          className="ml-1 underline underline-offset-4 hover:text-white transition"
        >
          Webli Studio
        </a>
      </div>
    </footer>
  )
}

export default Footer
