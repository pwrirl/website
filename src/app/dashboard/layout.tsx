"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Skeleton from "@/components/Skeleton";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // User state
  const [user, setUser] = useState<{ first_name?: string; last_name?: string; email?: string; avatar?: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/session/user")
      .then(res => res.json())
      .then(data => {
        if (data.user) setUser(data.user);
        setLoading(false);
      });
  }, []);

  // Dropdown state (client component)
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#18181b] to-[#23232b] text-white">
      {/* Sidebar (hidden on mobile) */}
      <aside className="w-64 bg-[#18181b]/80 backdrop-blur-md flex-col py-8 px-6 shadow-2xl rounded-r-3xl border-r border-[#29293a]/60 hidden md:flex">
        <div className="mb-8 flex flex-col items-center gap-3">
          {loading ? (
            <Skeleton variant="card" width={120} height={40} className="mb-2 w-32 h-10" />
          ) : (
            <Image src="/images/pwrirl_logo.svg" alt="PowerIRL Logo" width={120} height={40} className="mb-2 w-32 h-auto" />
          )}
          <div className="w-full h-px bg-gradient-to-r from-[#e20074]/40 via-white/10 to-[#e20074]/40 mb-2" />
        </div>
        <nav className="flex-1 space-y-2">
          {loading ? (
            <>
              <Skeleton variant="card" height={48} className="mb-2" />
              <Skeleton variant="card" height={48} className="mb-2" />
              <Skeleton variant="card" height={48} className="mb-2" />
              <Skeleton variant="card" height={48} className="mb-2" />
            </>
          ) : (
            <>
              <Link href="/dashboard" className="block px-4 py-3 rounded-xl font-semibold text-white/90 hover:bg-[#e20074]/15 hover:text-[#e20074] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e20074]">
                <Icon icon="mdi:view-dashboard" width="20" height="20" className="inline mr-2 text-[#e20074] align-text-bottom" />
                Overview
              </Link>
              <Link href="/dashboard/stream" className="block px-4 py-3 rounded-xl font-semibold text-white/90 hover:bg-[#e20074]/15 hover:text-[#e20074] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e20074]">
                <Icon icon="mdi:video" width="20" height="20" className="inline mr-2 text-[#e20074] align-text-bottom" />
                Stream
              </Link>
              <Link href="/dashboard/services" className="block px-4 py-3 rounded-xl font-semibold text-white/90 hover:bg-[#e20074]/15 hover:text-[#e20074] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e20074]">
                <Icon icon="mdi:cog" width="20" height="20" className="inline mr-2 text-[#e20074] align-text-bottom" />
                Services
              </Link>
              <Link href="/dashboard/billing" className="block px-4 py-3 rounded-xl font-semibold text-white/90 hover:bg-[#e20074]/15 hover:text-[#e20074] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e20074]">
                <Icon icon="mdi:credit-card-outline" width="20" height="20" className="inline mr-2 text-[#e20074] align-text-bottom" />
                Billing
              </Link>
            </>
          )}
        </nav>
      </aside>
      {/* Mobile Hamburger (visible on mobile only) */}
      <button
        className="fixed top-6 left-4 z-50 md:hidden bg-[#23232b] p-3 rounded-full shadow-lg border border-[#353535]"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <Icon icon="mdi:menu" width="28" height="28" />
      </button>
      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex">
          <div className="w-64 bg-[#23232b] h-full flex flex-col p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <Image src="/images/pwrirl_logo.svg" alt="PowerIRL Logo" width={120} height={40} />
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <Icon icon="mdi:close" width="28" height="28" />
              </button>
            </div>
            <nav className="flex-1 space-y-2">
              <Link href="/dashboard" className="block px-4 py-3 rounded-xl font-semibold text-white/90 hover:bg-[#e20074]/15 hover:text-[#e20074] transition-all" onClick={() => setMobileMenuOpen(false)}>
                <Icon icon="mdi:view-dashboard" width="20" height="20" className="inline mr-2 text-[#e20074] align-text-bottom" />
                Overview
              </Link>
              <Link href="/dashboard/stream" className="block px-4 py-3 rounded-xl font-semibold text-white/90 hover:bg-[#e20074]/15 hover:text-[#e20074] transition-all" onClick={() => setMobileMenuOpen(false)}>
                <Icon icon="mdi:video" width="20" height="20" className="inline mr-2 text-[#e20074] align-text-bottom" />
                Stream
              </Link>
              <Link href="/dashboard/services" className="block px-4 py-3 rounded-xl font-semibold text-white/90 hover:bg-[#e20074]/15 hover:text-[#e20074] transition-all" onClick={() => setMobileMenuOpen(false)}>
                <Icon icon="mdi:cog" width="20" height="20" className="inline mr-2 text-[#e20074] align-text-bottom" />
                Services
              </Link>
              <Link href="/dashboard/billing" className="block px-4 py-3 rounded-xl font-semibold text-white/90 hover:bg-[#e20074]/15 hover:text-[#e20074] transition-all" onClick={() => setMobileMenuOpen(false)}>
                <Icon icon="mdi:credit-card-outline" width="20" height="20" className="inline mr-2 text-[#e20074] align-text-bottom" />
                Billing
              </Link>
              <Link href="/dashboard/account" className="block px-4 py-3 rounded-xl font-semibold text-white/90 hover:bg-[#e20074]/15 hover:text-[#e20074] transition-all" onClick={() => setMobileMenuOpen(false)}>
                <Icon icon="carbon:user-avatar-filled" width="20" height="20" className="inline mr-2 text-[#e20074] align-text-bottom" />
                Account
              </Link>
            </nav>
            <button
              className="mt-8 w-full px-4 py-3 rounded-xl font-semibold text-white/90 bg-[#e20074] hover:bg-[#ff00a0] transition-all"
              onClick={async () => {
                setMobileMenuOpen(false);
                await fetch("/api/logout", { method: "POST" });
                router.push("/login");
              }}
            >
              Logout
            </button>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar (hidden on mobile) */}
        <header className="hidden md:flex items-center justify-end h-20 px-10 bg-[#23232b]/90 shadow-lg border-b border-[#29293a]/60 relative z-10">
          <div className="relative">
            <button
              className="flex items-center gap-3 focus:outline-none group"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#e20074] bg-[#e20074] flex items-center justify-center text-xl font-bold shadow-md overflow-hidden">
                {loading ? (
                  <Skeleton variant="circle" width={48} height={48} />
                ) : user?.avatar ? (
                  <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <Icon icon="carbon:user-avatar-filled" width="32" height="32" className="text-white" />
                )}
              </div>
              <span className="font-semibold text-white/90 hidden md:block text-lg">
                {loading ? <Skeleton width={80} height={20} /> : (user?.first_name || "User")}
              </span>
              <Icon icon="mdi:chevron-down" width="22" height="22" className="text-white/60 group-hover:text-white transition-colors" />
            </button>
            {dropdownOpen && !loading && (
              <div className="absolute right-0 mt-3 w-52 bg-[#23232b] border border-[#353535] rounded-xl shadow-2xl z-50 overflow-hidden">
                <Link
                  href="/dashboard/account"
                  className="block px-5 py-4 text-base text-white/90 hover:bg-[#e20074]/10 transition-colors"
                  onClick={() => setDropdownOpen(false)}
                >
                  View Account
                </Link>
                <button
                  className="w-full text-left px-5 py-4 text-base text-white/90 hover:bg-[#e20074]/10 transition-colors"
                  onClick={async () => {
                    setDropdownOpen(false);
                    await fetch("/api/logout", { method: "POST" });
                    router.push("/login");
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>
        <main className="flex-1 p-10 bg-gradient-to-br from-[#18181b]/90 to-[#23232b]/80 rounded-tl-3xl">
          {loading ? (
            <>
              <Skeleton variant="card" height={220} className="mb-8" />
              <Skeleton variant="card" height={220} className="mb-8" />
              <Skeleton variant="card" height={220} className="mb-8" />
            </>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
} 