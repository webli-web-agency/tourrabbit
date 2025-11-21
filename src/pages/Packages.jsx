// Packages.jsx
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PackageCard from "../components/PackageCard.jsx";

gsap.registerPlugin(ScrollTrigger);

const Packages = () => {
  const container = useRef(null);
  const slider = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".package-card");

      // ----- HEADING ANIMATION (same as About.jsx) -----
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

      // ----- Awwwards Horizontal Scroll Effect -----
      gsap.to(slider.current, {
        x: () =>
          -(slider.current.scrollWidth - document.documentElement.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top 3%",
          end: () =>
            "+=" + (slider.current.scrollWidth - window.innerWidth),
          scrub: 1.2, // buttery smooth effect
          pin: true,
          anticipatePin: 1,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

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

  return (
    <section ref={container} className="w-full py-24 text-white px-6" id="packages">
      
      {/* HEADING */}
      <h1 className="text-[12vw] md:text-[7vw] font-bold tracking-tight flex gap-4 justify-center leading-none mb-12">
        <div className="head-1">OUR</div>
        <div className="head-2 text-yellow-500">PACKAGES</div>
      </h1>

      {/* HORIZONTAL SLIDER */}
      <div ref={slider} className="flex gap-8 w-fit">
        {packages.map((pkg, i) => (
          <div key={i} className="package-card">
            <PackageCard
              img={pkg.img}
              title={pkg.title}
              days={pkg.days}
              link={`https://wa.me/919618165352?text=Hi%20I%20want%20to%20book%20${pkg.title}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
