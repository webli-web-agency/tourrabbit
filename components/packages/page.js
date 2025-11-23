"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PackageCard from "../../components/PackageCard";

gsap.registerPlugin(Draggable, ScrollTrigger);

const Packages = () => {
  const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION;

  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  const packages = [
    { img: "/packages/meghalaya.webp", title: "Meghalaya", days: "4N / 5D" },
    { img: "/packages/goa.webp", title: "Goa", days: "3N / 4D" },
    { img: "/packages/coorg.webp", title: "Coorg - Chikmagalur", days: "2N / 3D" },
    { img: "/packages/pondicherry.webp", title: "Pondicherry", days: "2N / 3D" },
    { img: "/packages/wayanad.webp", title: "Wayanad", days: "2N / 3D" },
    { img: "/packages/lonavala.webp", title: "Lonavala", days: "1N / 2D" },
    { img: "/packages/araku.webp", title: "Araku", days: "2N / 3D" },
    { img: "/packages/lambasingi.webp", title: "Lambasingi", days: "2N / 3D" },
    { img: "/packages/ooty-isha.webp", title: "Ooty & Isha", days: "2N / 3D" },
    { img: "/packages/ooty-coonoor.webp", title: "Ooty & Coonoor", days: "2N / 3D" },
    { img: "/packages/gokarna-dandeli.webp", title: "Gokarna & Dandeli", days: "2N / 3D" },
  ];

  useLayoutEffect(() => {
    const slider = sliderRef.current;
    const cards = gsap.utils.toArray(".scroll-card");

    const cardWidth = 320;
    const totalWidth = cards.length * cardWidth;

    gsap.set(slider, { width: totalWidth });

    // Infinite loop animation
    const anim = gsap.to(cards, {
      xPercent: -100,
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0),
      },
    });

    animationRef.current = anim;

    // Pause on hover
    const container = containerRef.current;
    container.addEventListener("mouseenter", () => anim.pause());
    container.addEventListener("mouseleave", () => anim.play());

    // Draggable
    Draggable.create(slider, {
      type: "x",
      inertia: true,
      onPress() {
        anim.pause();
      },
      onDrag() {
        gsap.set(slider, { x: this.x });
      },
      onRelease() {
        anim.play();
      },
    });

    // Scroll entrance fade
    gsap.from(container, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section
      id="packages"
      className="w-full py-24 text-white px-6 overflow-hidden"
      ref={containerRef}
    >
      <h1 className="text-[12vw] md:text-[7vw] font-bold text-center mb-12 leading-none">
        <span className="text-white">OUR</span>{" "}
        <span className="text-yellow-500">PACKAGES</span>
      </h1>

      <div className="w-full overflow-hidden cursor-grab">
        <div ref={sliderRef} className="flex gap-8 w-fit">
          {[...packages, ...packages].map((pkg, i) => (
            <div key={i} className="scroll-card">
              <PackageCard
                img={pkg.img}
                title={pkg.title}
                days={pkg.days}
                link={`https://wa.me/919618165352?text=Hi%20I%20want%20to%20book%20${pkg.title}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
