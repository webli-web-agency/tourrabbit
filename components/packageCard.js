// PackageCard.jsx
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const PackageCard = ({ img, title, days, link }) => {

  const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION;


  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const tlRef = useRef(null);

  useLayoutEffect(() => {
    const card = cardRef.current;
    const image = imgRef.current;

    // base GPU hint & initial state
    gsap.set(card, {
      transformOrigin: "50% 50%",
      force3D: true,
      // ensures the card is on its own layer
      // also add a tiny translateZ to trigger compositing
      z: 0.01,
    });

    // image initial hidden (fade-in on load)
    gsap.set(image, { opacity: 0, willChange: "opacity, transform" });

    // create hover timeline
    tlRef.current = gsap.timeline({ paused: true })
      .to(card, {
        scale: 1.02,
        y: -6, // small lift — transform only
        ease: "power3.out",
        duration: 0.28,
        force3D: true,
      }, 0)
      .to(card, {
        boxShadow: "0px 18px 40px rgba(0,0,0,0.35)",
        duration: 0.28,
        ease: "power3.out",
      }, 0);
    
    // cleanup on unmount
    return () => {
      tlRef.current && tlRef.current.kill();
    };
  }, []);

  // image onLoad fade-in to avoid flicker
  const handleImgLoad = () => {
    gsap.to(imgRef.current, { opacity: 1, duration: 0.45, ease: "power2.out", force3D: true });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => tlRef.current.play()}
      onMouseLeave={() => tlRef.current.reverse()}
      className="min-w-[260px] md:min-w-[300px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg transition-transform duration-300"
      style={{
        // GPU & painting hints
        transform: "translateZ(0)",
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
        contain: "paint", // reduce repaint scope
      }}
    >
      <div className="w-full h-48 md:h-56 overflow-hidden">
        {
          isProduction ? (
            <Image
            ref={imgRef}
            src={img}
            alt={title}
            className="w-full h-full object-cover opacity-90"
            loading="lazy"
            decoding="async"
            onLoad={handleImgLoad}
            width={400}
            height={300}
            style={{
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
              willChange: "opacity",
              // keep GPU-friendly - animate opacity only
            }}
            />
          ):(
            <img
          ref={imgRef}
          src={img}
          // consider providing webp in srcSet in production
          // srcSet={`${webpSrc} 1x, ${img} 2x`}
          className="w-full h-full object-cover opacity-90"
          alt={title}
          loading="lazy"
          decoding="async"
          onLoad={handleImgLoad}
          style={{
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            willChange: "opacity",
            // keep GPU-friendly - animate opacity only
          }}
        />
          )
        }
      </div>

      <div className="p-5">
        <h3 className="text-white font-semibold text-xl">{title}</h3>
        <p className="text-neutral-300 text-sm mt-1">{days}</p>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full transition-all text-sm"
          style={{ willChange: "transform" }}
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default PackageCard;
