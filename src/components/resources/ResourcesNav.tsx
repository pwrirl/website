"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const navItems = [
  { label: "Resources Home", href: "/resources", icon: "mdi:home" },
  { label: "Backpack Hardware", href: "/resources/backpack-hardware", icon: "mdi:bag-personal" },
  { label: "Phone Hardware", href: "/resources/phone-hardware", icon: "mdi:cellphone" },
  { label: "Mobile Apps", href: "/resources/mobile-apps", icon: "mdi:apps" },
  { label: "Computer Software", href: "/resources/computer-software", icon: "mdi:laptop" },
];

export default function ResourcesNav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-3">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-colors text-left text-white hover:bg-[#e20074]/10 hover:text-[#e20074] focus:outline-none focus-visible:ring-2 focus-visible:ring-transparent ${pathname === item.href ? "bg-[#e20074]/20 text-[#e20074]" : "text-white"}`}
        >
          <Icon icon={item.icon} className="text-2xl" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
} 