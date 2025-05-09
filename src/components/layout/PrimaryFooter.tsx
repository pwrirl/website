"use client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useEffect, useState } from "react";

interface PrimaryFooterProps {
  variant?: 'public' | 'internal';
}

export default function PrimaryFooter({ variant = 'public' }: PrimaryFooterProps) {
  const isInternal = variant === 'internal';
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className={`relative ${isInternal ? 'bg-white text-gray-900' : 'bg-[#101010] text-white'} pt-12 pb-6 px-4`}>
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 items-start">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start text-left">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/pwrirl_logo.svg"
                alt="PowerIRL Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className={`text-sm ${isInternal ? 'text-gray-600' : 'text-gray-400'}`}>
              Making professional streaming accessible to everyone.
            </p>
          </div>
          {/* About */}
          <div className="flex flex-col items-center md:items-start text-left">
            <h3 className={`text-lg font-semibold mb-4 ${isInternal ? 'text-gray-900' : 'text-[#e20074]'}`}>About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>About</Link>
              </li>
              <li>
                <Link href="/partners" className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>Partners</Link>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div className="flex flex-col items-center md:items-start text-left">
            <h3 className={`text-lg font-semibold mb-4 ${isInternal ? 'text-gray-900' : 'text-[#e20074]'}`}>Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hardware" className={`text-sm font-semibold transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>Hardware</Link>
                <ul className="ml-4 mt-1 space-y-1">
                  <li><Link href="/hardware/backpack-hardware" className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>Backpack Hardware</Link></li>
                  <li><Link href="/hardware/phone-hardware" className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>Mobile Hardware</Link></li>
                </ul>
              </li>
              <li className="mt-2">
                <Link href="/docs" className={`text-sm font-semibold transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>Docs</Link>
                <ul className="ml-4 mt-1 space-y-1">
                  <li><Link href="/docs/computer-software" className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>Computer Software</Link></li>
                  <li><Link href="/docs/mobile-apps" className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>Mobile Apps</Link></li>
                  <li><Link href="/docs/support" className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>Support</Link></li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div className="flex flex-col items-center md:items-start text-left">
            <h3 className={`text-lg font-semibold mb-4 ${isInternal ? 'text-gray-900' : 'text-[#e20074]'}`}>Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal" className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>Legal Homepage</Link>
              </li>
              <li>
                <Link href="/legal/terms" className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>Terms of Service</Link>
              </li>
              <li>
                <Link href="/legal/privacy" className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>Privacy Policy</Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="flex justify-center mt-8 mb-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://twitch.tv/powerirl" target="_blank" rel="noopener noreferrer" aria-label="Twitch">
              <div className="w-10 h-10 rounded-full bg-[#e20074] flex items-center justify-center transition-colors duration-200 hover:bg-white group">
                <Icon icon="mdi:twitch" className="text-white text-2xl group-hover:text-[#e20074] transition-colors duration-200" />
              </div>
            </a>
            <a href="https://kick.com/powerirl" target="_blank" rel="noopener noreferrer" aria-label="Kick">
              <div className="w-10 h-10 rounded-full bg-[#e20074] flex items-center justify-center transition-colors duration-200 hover:bg-white group">
                <Icon icon="simple-icons:kick" className="text-white text-2xl group-hover:text-[#e20074] transition-colors duration-200" />
              </div>
            </a>
            <a href="https://youtube.com/@powerirl" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <div className="w-10 h-10 rounded-full bg-[#e20074] flex items-center justify-center transition-colors duration-200 hover:bg-white group">
                <Icon icon="mdi:youtube" className="text-white text-2xl group-hover:text-[#e20074] transition-colors duration-200" />
              </div>
            </a>
            <a href="https://twitter.com/powerirl" target="_blank" rel="noopener noreferrer" aria-label="X">
              <div className="w-10 h-10 rounded-full bg-[#e20074] flex items-center justify-center transition-colors duration-200 hover:bg-white group">
                <Icon icon="simple-icons:x" className="text-white text-2xl group-hover:text-[#e20074] transition-colors duration-200" />
              </div>
            </a>
            <a href="https://github.com/powerirl" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <div className="w-10 h-10 rounded-full bg-[#e20074] flex items-center justify-center transition-colors duration-200 hover:bg-white group">
                <Icon icon="mdi:github" className="text-white text-2xl group-hover:text-[#e20074] transition-colors duration-200" />
              </div>
            </a>
            <a href="https://discord.pwrirl.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <div className="w-10 h-10 rounded-full bg-[#e20074] flex items-center justify-center transition-colors duration-200 hover:bg-white group">
                <Icon icon="mdi:discord" className="text-white text-2xl group-hover:text-[#e20074] transition-colors duration-200" />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-8 pt-8 border-t ${isInternal ? 'border-gray-200' : 'border-gray-800'} mb-20 md:mb-0`}>
          <div className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-4 md:gap-0">
            <p className={`text-sm text-center md:text-left ${isInternal ? 'text-gray-500' : 'text-gray-400'}`}>
              © {year ?? ""} PowerIRL, an SEO Nexus, LLC Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
}