import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import { Plane } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Navbar intro animation on mount
    const ctx = gsap.context(() => {
      gsap.from('.nav-bar', {
        y: -40,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      })

      gsap.from('.nav-logo', {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
        ease: 'power2.out',
      })

      gsap.from('.nav-intro', {
        x: 20,
        opacity: 0,
        duration: 0.4,
        delay: 0.25,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [])

  const toggleMenu = () => {
    const tl = gsap.timeline({
      defaults: { duration: 0.3, ease: 'power2.out' },
    })

    if (!isOpen) {
      // Open
      tl.to('.line-1', { rotate: 45, y: 6 })
      tl.to('.line-2', { rotate: -45, y: -6 }, '<')
      tl.to('.overlay', { y: '-100%' }, '<') // slide overlay up
      tl.fromTo(
        '.nav-link',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.35, ease: 'power3.out' },
        '-=0.1'
      )
    } else {
      // Close
      tl.to('.nav-link', {
        y: 10,
        opacity: 0,
        stagger: -0.08,
        duration: 0.2,
      })
      tl.to('.overlay', { y: '0%' }, '<')
      tl.to('.line-1', { rotate: 0, y: 0 }, '-=0.1')
      tl.to('.line-2', { rotate: 0, y: 0 }, '<')
    }

    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* NAVBAR */}
      <header className="nav-bar fixed top-0 left-0 w-full z-[999] bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="w-full px-6 md:px-10 py-4 flex items-center justify-between">
          {/* LEFT: LOGO + INTRO */}
          <div className="flex items-center gap-4">
            {/* LOGO */}
            <div className="nav-logo relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-white/10">
              <img src="/logo.jpeg" className="object-cover w-full h-full" />
            </div>

            {/* INTRO TEXT */}
            <div className="nav-intro hidden sm:flex flex-col gap-[2px] text-white">
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 opacity-80" />
                <span className="text-[11px] tracking-[0.25em] uppercase opacity-80">
                  Tour Rabbit
                </span>
              </div>
              <span className="text-xs opacity-70">
                Hop into unforgettable journeys 🐇
              </span>
            </div>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={toggleMenu}
            className="relative h-8 w-8 cursor-pointer z-[100] flex flex-col justify-center gap-2"
          >
            <span className="line-1 block w-8 h-[2px] bg-white origin-center rounded-full" />
            <span className="line-2 block w-8 h-[2px] bg-white origin-center rounded-full" />
          </button>
        </div>

        
      </header>

      {/* OVERLAY MENU (FULLSCREEN) */}
      <div
        className="
          overlay fixed top-[100%] left-0 
          w-screen h-screen 
          bg-gradient-to-b from-[#020617] via-[#f4c539] to-black
          z-[98] 
          flex flex-col justify-center items-center 
          gap-8
          text-white text-3xl md:text-4xl font-semibold tracking-[0.25em] uppercase
        "
      >
        <a
          href="#home"
          className="nav-link relative hover:opacity-80 transition-all duration-200"
        >
          Home
        </a>
        <a
          href="#services"
          className="nav-link relative hover:opacity-80 transition-all duration-200"
        >
          Services
        </a>
        <a
          href="#about"
          className="nav-link relative hover:opacity-80 transition-all duration-200"
        >
          About
        </a>
        <a
          href="#testimonial"
          className="nav-link relative hover:opacity-80 transition-all duration-200"
        >
          Testimonial
        </a>
        <a
          href="#gallery"
          className="nav-link relative hover:opacity-80 transition-all duration-200"
        >
          Gallery
        </a>
        {/* COPYRIGHT INSIDE NAVBAR BOTTOM */}
        <div className="w-full absolute bottom-[2vh] text-center text-[11px] text-white/55 pb-3 px-4">
          © 2025 Tour Rabbit · Made with <span className="mx-[2px]">❤️</span> by{' '}
          <a
            href="https://webli.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-white"
          >
            Webli Studio
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
