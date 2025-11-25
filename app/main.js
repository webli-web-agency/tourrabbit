"use client";
import React,{useEffect} from 'react'
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import HomeMain from "../components/home/index.js";
import AboutMain from "../components/about/index.js";
import ContactMain from "../components/contact/index.js";
import TestimonialsMain from "../components/testimonials/index.js";
import PackagesMain from "../components/packages/index.js";
import ServicesMain from "../components/services/index.js";
import Lenis from "lenis"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);



const Main = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,          // smoothness
      wheelMultiplier: 1.1,
      touchMultiplier: 1.2,
      infinite: false,
    });

    // ✅ Sync Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
      <main className="relative w-screen overflow-x-hidden overflow-y-visible">
        <Header />
        <HomeMain />
        <PackagesMain />
        <ServicesMain />
        <TestimonialsMain />
        <AboutMain />
        <ContactMain />
        <Footer />
      </main>
  );
};

export default Main;
