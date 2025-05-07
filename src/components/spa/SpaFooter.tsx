"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function SpaFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex flex-col items-center bg-[#222222] px-6 py-8 text-white text-center">
      <div className="mb-4">
        <Image
          src="/images/pwrirl_logo.svg"
          alt="PowerIRL Logo"
          width={150}
          height={50}
          priority
          className="h-auto w-auto"
        />
      </div>
      
      <p className="max-w-[500px] mx-auto mb-8 text-sm text-white leading-relaxed">
        The future of cloud-based streaming. Professional-grade tools for content creators.
      </p>
      
      <div className="flex gap-6 mb-8">
        <a href="https://discord.gg/powerirl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E20074]">
          <Icon icon="mdi:discord" width="24" height="24" />
        </a>
        <a href="https://kick.com/powerirl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E20074]">
          <Icon icon="simple-icons:kick" width="24" height="24" />
        </a>
        <a href="https://twitch.tv/powerirl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E20074]">
          <Icon icon="mdi:twitch" width="24" height="24" />
        </a>
        <a href="https://twitter.com/powerirl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E20074]">
          <Icon icon="mdi:twitter" width="24" height="24" />
        </a>
        <a href="https://github.com/powerirl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E20074]">
          <Icon icon="mdi:github" width="24" height="24" />
        </a>
      </div>
      
      <div className="w-4/5 max-w-[600px] h-px bg-gray-700 mb-6"></div>
      
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <Link href="/legal" className="text-xs text-white hover:text-[#E20074]">Legal</Link>
        <Link href="/terms" className="text-xs text-white hover:text-[#E20074]">Terms of Service</Link>
        <Link href="/disclaimer" className="text-xs text-white hover:text-[#E20074]">Disclaimer</Link>
        <Link href="/privacy" className="text-xs text-white hover:text-[#E20074]">Privacy Policy</Link>
      </div>
      
      <div className="text-xs text-white mb-6">
        © {new Date().getFullYear()} PowerIRL, an SEO Nexus, LLC Company. All rights reserved.
      </div>
      
      <div 
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-gradient-to-r from-[#e20074] to-[#ff00a0] hover:from-[#d1006a] hover:to-[#e6009c] text-white flex items-center justify-center cursor-pointer z-10 transition-colors"
        onClick={scrollToTop}
      >
        <Icon icon="mdi:chevron-up" width="24" height="24" />
      </div>
    </footer>
  );
}
