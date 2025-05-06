"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import FeaturesSection from "@/components/spa/FeaturesSection";
import ObsSection from "@/components/spa/ObsSection";
import StreamingSection from "@/components/spa/StreamingSection";
import EndpointsSection from "@/components/spa/EndpointsSection";
import HeroSection from "@/components/spa/HeroSection";

export default function Home() {
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
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* OBS Section */}
      <ObsSection />

      {/* Endpoints Section */}
      <EndpointsSection />

      {/* Streaming Section */}
      <StreamingSection />
    </main>
  );
}
