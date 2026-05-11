"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CinematicHero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Background image animation
    tl.fromTo(
      imageRef.current,
      {
        scale: 1.3,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
      },
    );

    // Main title animation
    tl.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
      },
      "-=1.3",
    );

    // Subtitle animation
    tl.fromTo(
      subRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      "-=0.8",
    );

    // Floating background effect
    gsap.to(imageRef.current, {
      y: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="hero"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[6px] text-gray-300">
          Modern Restaurant Experience
        </p>

        <h1
          ref={titleRef}
          className="max-w-5xl text-6xl font-black uppercase leading-none text-white md:text-8xl"
        >
          Taste The Future
        </h1>

        <p ref={subRef} className="mt-6 max-w-xl text-lg text-gray-300">
          A cinematic digital experience crafted with modern storytelling and
          immersive design.
        </p>

        <button className="mt-10 rounded-full border border-white px-8 py-4 text-white transition hover:bg-white hover:text-black">
          Explore Menu
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-xs uppercase tracking-[4px]">Scroll</span>

          <div className="h-10 w-[1px] bg-white"></div>
        </div>
      </div>
    </section>
  );
}
