"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle video autoplay
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Offset for sticky header
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      id="main-content"
      className="relative flex h-[85vh] w-full items-center justify-center overflow-hidden bg-[#1A0024] sm:h-[60vh] md:h-[75vh]"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_video_fallback.jpg"
        aria-label="PowerIRL streaming platform demonstration video"
        title="PowerIRL streaming platform demonstration"
        className="absolute top-0 left-0 z-[1] h-full w-full object-cover"
        style={{
          transform: `scale(1.1) translateY(${scrollY * 0.2}px)`,
        }}
        onError={() =>
          console.log("Video failed to load, showing poster image")
        }
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Background gradient overlay */}
      <div className="absolute top-0 left-0 z-[2] h-full w-full bg-gradient-to-b from-[#e20074]/30 via-[#222]/80 to-[#121212]"></div>

      {/* Dot pattern */}
      <div className="dot-pattern z-[3]"></div>

      <div
        className="relative z-[3] max-w-[90%] p-8 pb-16 text-center text-white sm:pb-20 md:pb-8"
        style={{
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
      >
        <h1 className="mb-4 text-3xl font-bold drop-shadow-lg sm:text-4xl md:text-5xl">
          Stream Anywhere with{" "}
          <span className="font-bold text-[#e20074]">PowerIRL</span>
        </h1>
        <p className="mb-8 text-xl drop-shadow sm:text-2xl">
          PowerIRL combines cloud-based OBS with true mobile freedom. Whether
          you're streaming from your desktop or on the go, PowerIRL keeps you
          live with stream drop protection, full customization, and
          enterprise-grade reliability.
        </p>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-4">
          <button
            onClick={() => scrollToSection("cloud-obs")}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#e20074] to-[#ff00a0] hover:from-[#d1006a] hover:to-[#e6009c] text-white px-6 py-3 text-base font-medium transition-colors sm:w-auto sm:px-6 sm:py-3 sm:text-base"
          >
            <Icon icon="mdi:rocket-launch" width={20} height={20} />
            <span>Get Started</span>
          </button>
          <a
            href="https://discord.gg/KtfrPhdEvx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-white px-6 py-3 text-center text-base font-medium text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-6 sm:py-3 sm:text-base"
          >
            <Icon icon="ic:baseline-discord" width={20} height={20} />
            <span>Join our Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
} 