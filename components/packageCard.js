"use client";

import React from "react";
import Image from "next/image";

const PackageCard = ({ img, title, days, link }) => {
  const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION;
  return (
    <div
      className="
        min-w-[260px] md:min-w-[300px]
        rounded-3xl overflow-hidden
        bg-white/5 backdrop-blur-lg
        border border-yellow-400/20
        shadow-[0_0_18px_rgba(255,200,0,0.15)]
        transition-all duration-300
      "
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        contain: "paint",
      }}
    >
      <div className="w-full h-48 md:h-56 overflow-hidden">
      {
        isProduction?(
          <Image
          src={img}
          alt={title}
          className="w-full h-full object-cover opacity-90"
          width={400}
          height={300}
          loading="lazy"
          decoding="async"
        />
        ):(
          <img 
          src={img)
          alt={title}
          className="w-full h-full object-cover opacity-90"
          loading="lazy"
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
          className="
            mt-4 inline-block bg-yellow-500 hover:bg-yellow-400
            text-black font-semibold px-5 py-2 rounded-full
            transition-all text-sm
          "
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default PackageCard;
