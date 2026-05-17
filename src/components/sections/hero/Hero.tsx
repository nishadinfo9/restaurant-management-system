"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Entrance Animation
    const tl = gsap.timeline();

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
    )
      .fromTo(
        textRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7",
      )
      .fromTo(
        imageRef.current,
        {
          scale: 1.2,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1",
      );

    // Scroll Animation
    gsap.to(imageRef.current, {
      y: 120,
      scale: 1.1,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-black text-white"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0">
        <Image
          width={800}
          height={600}
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1600&auto=format&fit=crop"
          alt="Restaurant"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/10 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-orange-300 text-sm mb-6">
            Taste The Experience
          </p>

          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95]"
          >
            Every flavor
            <span className="block text-white/60">tells a story.</span>
          </h1>

          <p
            ref={textRef}
            className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl"
          >
            Crafted with passion, served with elegance. Experience modern dining
            with cinematic atmosphere and unforgettable taste.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <button className="px-8 py-4 rounded-full bg-orange-400 text-black font-medium hover:bg-orange-300 transition-all duration-300">
              Reserve Table
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300">
              View Menu
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
