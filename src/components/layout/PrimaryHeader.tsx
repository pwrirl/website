"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function PrimaryHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-[#101010] ${
          isScrolled ? "py-4" : "py-6"
        } text-lg text-white shadow-md shadow-black/10 transition-all duration-300`}
      >
        <div className="container mx-auto px-5 max-w-7xl">
          <nav className="flex items-center lg:items-center">
            {/* Centered on mobile/tablet, left-aligned on desktop */}
            <div className="flex flex-1 justify-center lg:justify-start">
              <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-6">
                {/* Logo */}
                <div className="flex items-center">
                  <Link href="/">
                    <Image
                      src="/images/pwrirl_logo.svg"
                      alt="PowerIRL Logo"
                      width={120}
                      height={40}
                      className={`${
                        isScrolled ? "h-8" : "h-10"
                      } w-auto transition-all duration-300`}
                    />
                  </Link>
                </div>
                {/* Desktop Menu (hidden on medium screens and below) */}
                <ul className="hidden space-x-3 xl:space-x-4 lg:flex text-sm xl:text-base">
                  <li>
                    <Link
                      href="/about"
                      className="flex cursor-pointer items-center gap-1 rounded-lg px-2 py-2 font-medium transition-all hover:bg-[#e20074]/10 hover:text-[#e20074] outline-none"
                    >
                      <Icon
                        icon="mdi:information"
                        width="18"
                        height="18"
                        className="text-[#e20074]"
                        aria-hidden="true"
                      />
                      <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/partners"
                      className="flex cursor-pointer items-center gap-1 rounded-lg px-2 py-2 font-medium transition-all hover:bg-[#e20074]/10 hover:text-[#e20074] outline-none"
                    >
                      <Icon
                        icon="mdi:handshake"
                        width="18"
                        height="18"
                        className="text-[#e20074]"
                        aria-hidden="true"
                      />
                      <span>Partners</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hardware"
                      className="flex cursor-pointer items-center gap-1 rounded-lg px-2 py-2 font-medium transition-all hover:bg-[#e20074]/10 hover:text-[#e20074] outline-none"
                    >
                      <Icon
                        icon="mdi:book-open-page-variant"
                        width="18"
                        height="18"
                        className="text-[#e20074]"
                        aria-hidden="true"
                      />
                      <span>Hardware</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs"
                      className="flex cursor-pointer items-center gap-1 rounded-lg px-2 py-2 font-medium transition-all hover:bg-[#e20074]/10 hover:text-[#e20074] outline-none"
                    >
                      <Icon
                        icon="mdi:book-open-variant"
                        width="18"
                        height="18"
                        className="text-[#e20074]"
                        aria-hidden="true"
                      />
                      <span>Docs</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal"
                      className="flex cursor-pointer items-center gap-1 rounded-lg px-2 py-2 font-medium transition-all hover:bg-[#e20074]/10 hover:text-[#e20074] outline-none"
                    >
                      <Icon
                        icon="mdi:file-document"
                        width="18"
                        height="18"
                        className="text-[#e20074]"
                        aria-hidden="true"
                      />
                      <span>Legal</span>
                    </Link>
                  </li>
                </ul>
                {/* Hamburger Menu Icon (visible on medium and below, below logo) */}
                <div className="mt-2 flex justify-center lg:hidden">
                  <button
                    className="cursor-pointer hover:opacity-80 outline-none rounded-md"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                    aria-expanded={isMobileMenuOpen}
                  >
                    <Icon
                      icon="game-icons:hamburger-menu"
                      width="32"
                      height="32"
                      color="#fff"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Avatar on the far right */}
            <div className="flex items-center hidden lg:block">
              <a
                href="https://billing.stripe.com/p/login/cN25mb4HCbBR02k4gg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to user dashboard"
                className="transition-opacity hover:opacity-80 rounded-full outline-none"
              >
                <Icon
                  icon="carbon:user-avatar-filled"
                  width="38"
                  height="38"
                  color="#e20074"
                />
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu (visible when toggled on medium and below) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex cursor-pointer items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
          onClick={(e) => e.target === e.currentTarget && toggleMobileMenu()}
          onKeyDown={(e) => e.key === "Escape" && toggleMobileMenu()}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          tabIndex={0}
        >
          <div className="relative mx-4 w-full max-w-md cursor-pointer overflow-hidden rounded-xl bg-gradient-to-b from-[#1a1a1a] to-[#121212] shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff_1px,transparent_1px),linear-gradient(-45deg,#ffffff_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.02]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e20074]/5 to-transparent"></div>
            </div>

            {/* Menu content */}
            <div className="relative pt-12">
              {/* Close button */}
              <button
                className="absolute top-3 right-2 cursor-pointer rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white outline-none"
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
              >
                <Icon icon="mdi:close" width="24" height="24" aria-hidden="true" />
              </button>

              {/* Menu items */}
              <div className="p-6">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="group flex w-full cursor-pointer items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10 outline-none"
                    >
                      <Icon
                        icon="mdi:information"
                        width="24"
                        height="24"
                        className="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
                        aria-hidden="true"
                      />
                      <span className="font-medium text-white">About</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/partners"
                      className="group flex w-full cursor-pointer items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10 outline-none"
                    >
                      <Icon
                        icon="mdi:handshake"
                        width="24"
                        height="24"
                        className="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
                        aria-hidden="true"
                      />
                      <span className="font-medium text-white">Partners</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hardware"
                      className="group flex w-full cursor-pointer items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10 outline-none"
                    >
                      <Icon
                        icon="mdi:book-open-page-variant"
                        width="24"
                        height="24"
                        className="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
                        aria-hidden="true"
                      />
                      <span className="font-medium text-white">Hardware</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs"
                      className="group flex w-full cursor-pointer items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10 outline-none"
                    >
                      <Icon
                        icon="mdi:book-open-variant"
                        width="24"
                        height="24"
                        className="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
                        aria-hidden="true"
                      />
                      <span className="font-medium text-white">Docs</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal"
                      className="group flex w-full cursor-pointer items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10 outline-none"
                    >
                      <Icon
                        icon="mdi:file-document"
                        width="24"
                        height="24"
                        className="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
                        aria-hidden="true"
                      />
                      <span className="font-medium text-white">Legal</span>
                    </Link>
                  </li>
                </ul>

                {/* Quick actions */}
                <div className="mt-8 space-y-4">
                  <a
                    href="https://billing.stripe.com/p/login/cN25mb4HCbBR02k4gg"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#e20074] to-[#ff00a0] hover:from-[#d1006a] hover:to-[#e6009c] px-4 py-3 font-medium text-white transition-colors outline-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="mdi:account" width="20" height="20" />
                    <span>Go to Dashboard</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 