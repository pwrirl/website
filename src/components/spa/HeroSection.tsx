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
      section.scrollIntoView({ behavior: "smooth" });
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
            onClick={() => scrollToSection("features")}
            className="flex cursor-pointer items-center gap-1 rounded-lg px-2 py-2 font-medium transition-all hover:bg-[#e20074]/10 hover:text-[#e20074] outline-none"
            aria-label="Scroll to features section"
          >
            <Icon
              icon="mdi:star"
              width="18"
              height="18"
              className="text-[#e20074]"
              aria-hidden="true"
            />
            <span>Features</span>
          </button>
          <button
            onClick={() => scrollToSection("cloud-obs")}
            className="flex cursor-pointer items-center gap-1 rounded-lg px-2 py-2 font-medium transition-all hover:bg-[#e20074]/10 hover:text-[#e20074] outline-none"
            aria-label="Scroll to cloud OBS section"
          >
            <Icon
              icon="mdi:desktop-tower-monitor"
              width="18"
              height="18"
              className="text-[#e20074]"
              aria-hidden="true"
            />
            <span>Cloud OBS</span>
          </button>
          <button
            onClick={() => scrollToSection("endpoints")}
            className="flex cursor-pointer items-center gap-1 rounded-lg px-2 py-2 font-medium transition-all hover:bg-[#e20074]/10 hover:text-[#e20074] outline-none"
            aria-label="Scroll to endpoints section"
          >
            <Icon
              icon="mdi:connection"
              width="18"
              height="18"
              className="text-[#e20074]"
              aria-hidden="true"
            />
            <span>Endpoints</span>
          </button>
          <button
            onClick={() => scrollToSection("multi-stream")}
            className="flex cursor-pointer items-center gap-1 rounded-lg px-2 py-2 font-medium transition-all hover:bg-[#e20074]/10 hover:text-[#e20074] outline-none"
            aria-label="Scroll to multi-stream section"
          >
            <Icon
              icon="mdi:broadcast"
              width="18"
              height="18"
              className="text-[#e20074]"
              aria-hidden="true"
            />
            <span>Multi-Stream</span>
          </button>
        </div>
      </div>
    </div>
  );
} 