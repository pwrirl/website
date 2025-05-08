"use client";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-[#e20074] to-[#ff00a0] hover:from-[#d1006a] hover:to-[#e6009c] text-white flex items-center justify-center z-50 shadow-lg transition-colors"
      aria-label="Scroll to top"
    >
      <Icon icon="mdi:chevron-up" width={28} height={28} />
    </button>
  ) : null;
} 