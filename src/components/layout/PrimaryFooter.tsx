import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import ScrollToTopButton from "@/components/ScrollToTopButton";

interface PrimaryFooterProps {
  variant?: 'public' | 'internal';
}

export default function PrimaryFooter({ variant = 'public' }: PrimaryFooterProps) {
  const isInternal = variant === 'internal';
  
  return (
    <footer className={`relative ${isInternal ? 'bg-white text-gray-900' : 'bg-[#101010] text-white'} pt-12 pb-6 px-4`}>
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
            <p className={`text-sm ${isInternal ? 'text-gray-600' : 'text-gray-400'}`}>
              Making professional streaming accessible to everyone.
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className={`text-lg font-semibold mb-4 ${isInternal ? 'text-gray-900' : 'text-[#e20074]'}`}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/hardware"
                  className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}
                >
                  Hardware
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}
                >
                  Docs
                </Link>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className={`text-lg font-semibold mb-4 ${isInternal ? 'text-gray-900' : 'text-[#e20074]'}`}>Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legal"
                  className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}
                >
                  Legal Homepage
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/disclaimer"
                  className={`text-sm transition-colors ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className={`text-lg font-semibold mb-4 ${isInternal ? 'text-gray-900' : 'text-[#e20074]'}`}>Contact</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://twitch.tv/powerirl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitch"
                className={`transition-colors text-2xl ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#e20074]'}`}
              >
                <Icon icon="mdi:twitch" />
              </a>
              <a
                href="https://kick.com/powerirl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kick"
                className={`transition-colors text-2xl ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#e20074]'}`}
              >
                <Icon icon="simple-icons:kick" />
              </a>
              <a
                href="https://youtube.com/@powerirl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={`transition-colors text-2xl ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#e20074]'}`}
              >
                <Icon icon="mdi:youtube" />
              </a>
              <a
                href="https://twitter.com/powerirl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className={`transition-colors text-2xl ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#e20074]'}`}
              >
                <Icon icon="simple-icons:x" />
              </a>
              <a
                href="https://github.com/powerirl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`transition-colors text-2xl ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#e20074]'}`}
              >
                <Icon icon="mdi:github" />
              </a>
              <a
                href="https://discord.pwrirl.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className={`transition-colors text-2xl ${isInternal ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#e20074]'}`}
              >
                <Icon icon="mdi:discord" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-8 pt-8 border-t ${isInternal ? 'border-gray-200' : 'border-gray-800'} mb-20 md:mb-0`}>
          <div className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-4 md:gap-0">
            <p className={`text-sm text-center md:text-left ${isInternal ? 'text-gray-500' : 'text-gray-400'}`}>
              © {new Date().getFullYear()} PowerIRL, an SEO Nexus, LLC Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
} 