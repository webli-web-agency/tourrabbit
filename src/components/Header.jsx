import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import { Plane, Heart } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    gsap.from('.nav-wrapper', {
      opacity: 0,
      y: -25,
      duration: 0.6,
      ease: 'power3.out'
    })
  }, [])

  const toggleMenu = () => {
    const tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'power2.out' } })

    if (!isOpen) {
      tl.to('.line-1', { rotate: 45, y: 6 })
      tl.to('.line-2', { rotate: -45, y: -6 }, '<')
      tl.to('.overlay', { y: '-100%' }, '<')
      tl.fromTo('.nav-link', { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.06 })
    } else {
      tl.to('.nav-link', { opacity: 0, y: 10, stagger: -0.06 })
      tl.to('.overlay', { y: '0%' }, '<')
      tl.to('.line-1', { rotate: 0, y: 0 }, '-=0.1')
      tl.to('.line-2', { rotate: 0, y: 0 }, '<')
    }

    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* NAV WRAPPER */}
      <header className="nav-wrapper sticky top-0
 left-0 w-full z-[999] bg-black/90 backdrop-blur-lg border-b border-white/10 px-8 py-6 flex items-center justify-between relative overflow-hidden">

        {/* Glow Background (same as footer) */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] bg-yellow-400 blur-[180px] rounded-full opacity-25"></div>
        </div>

        {/* LEFT SECTION */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/10">
            <img src="/logo.jpeg" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-white/80 uppercase text-xs tracking-[0.25em]">
              <Plane className="w-4 h-4 text-white/70" />
              Tour Rabbit
            </div>
            <span className="text-white/60 text-[11px]">Hop into unforgettable journeys 🐇</span>
          </div>
        </div>

        {/* HAMBURGER */}
        <button onClick={toggleMenu} className="relative z-10 h-8 w-8 flex flex-col justify-center gap-2 cursor-pointer">
          <span className="line-1 block w-8 h-[2px] bg-white rounded-full" />
          <span className="line-2 block w-8 h-[2px] bg-white rounded-full" />
        </button>
      </header>

      {/* FULL SCREEN MENU */}
      <div className="
        overlay fixed top-[100%] left-0 w-screen h-screen 
        bg-gradient-to-b from-[#f8e27a] via-[#f4c539] to-black
        z-[98] flex flex-col justify-center items-center gap-10
        text-black text-3xl font-bold tracking-wide uppercase
      ">
        <a href="#home" className="nav-link hover:text-white transition">Home</a>
        <a href="#services" className="nav-link hover:text-white transition">Services</a>
        <a href="#about" className="nav-link hover:text-white transition">About</a>
        <a href="#testimonial" className="nav-link hover:text-white transition">Testimonial</a>
        <a href="#gallery" className="nav-link hover:text-white transition">Gallery</a>
        <a href="#contact" className="nav-link hover:text-white transition">Contact</a>

        {/* SAME COPYRIGHT TEXT AS FOOTER */}
        <div className="absolute bottom-8 text-center text-sm text-white font-light">
          © 2025 Tour Rabbit — Made with 
          <span className="inline-flex items-center text-yellow-600">
            <Heart className="w-4 h-4 mx-1" fill="#f4c539" color="#f4c539" />
          </span>
          by 
          <a href="https://webli.vercel.app" target="_blank"
             className="ml-1 underline underline-offset-4 hover:text-black transition">
            Webli Studio
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
