import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function PrimaryFooter() {
  return (
    <footer className="relative bg-black text-white pt-12 pb-6 px-4">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:items-start">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
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
            <p className="text-gray-400 text-sm">
              Making professional streaming accessible to everyone.
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legal"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Legal Homepage
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/disclaimer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://twitch.tv/powerirl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitch"
                className="text-white hover:text-[#e20074] transition-colors text-2xl"
              >
                <Icon icon="mdi:twitch" />
              </a>
              <a
                href="https://kick.com/powerirl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kick"
                className="text-white hover:text-[#e20074] transition-colors text-2xl"
              >
                <Icon icon="simple-icons:kick" />
              </a>
              <a
                href="https://youtube.com/@powerirl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white hover:text-[#e20074] transition-colors text-2xl"
              >
                <Icon icon="mdi:youtube" />
              </a>
              <a
                href="https://twitter.com/powerirl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-white hover:text-[#e20074] transition-colors text-2xl"
              >
                <Icon icon="simple-icons:x" />
              </a>
              <a
                href="https://github.com/powerirl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white hover:text-[#e20074] transition-colors text-2xl"
              >
                <Icon icon="mdi:github" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 mb-20 md:mb-0">
          <div className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-4 md:gap-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 PowerIRL, an SEO Nexus, LLC Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
} 