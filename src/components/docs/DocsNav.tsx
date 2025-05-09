"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

export default function DocsNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const isActiveGroup = (path: string) => {
    return pathname.startsWith(path);
  };

  return (
    <nav className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Documentation</h3>
        <ul className="space-y-2 mb-8">
          <li>
            <Link
              href="/docs"
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/docs")
                  ? "bg-[#e20074] text-white"
                  : "text-gray-400 hover:bg-[#23232b] hover:text-white"
              }`}
            >
              Docs Home
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Computer Software</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/docs/computer-software"
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/docs/computer-software")
                  ? "bg-[#e20074] text-white"
                  : "text-gray-400 hover:bg-[#23232b] hover:text-white"
              }`}
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              href="/docs/computer-software/obs-studio"
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/docs/computer-software/obs-studio")
                  ? "bg-[#e20074] text-white"
                  : "text-gray-400 hover:bg-[#23232b] hover:text-white"
              }`}
            >
              OBS Studio
            </Link>
          </li>
          <li>
            <Link
              href="/docs/computer-software/meld-studio"
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/docs/computer-software/meld-studio")
                  ? "bg-[#e20074] text-white"
                  : "text-gray-400 hover:bg-[#23232b] hover:text-white"
              }`}
            >
              Meld Studio
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Mobile Apps</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/docs/mobile-apps"
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/docs/mobile-apps")
                  ? "bg-[#e20074] text-white"
                  : "text-gray-400 hover:bg-[#23232b] hover:text-white"
              }`}
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              href="/docs/mobile-apps/ios"
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/docs/mobile-apps/ios")
                  ? "bg-[#e20074] text-white"
                  : "text-gray-400 hover:bg-[#23232b] hover:text-white"
              }`}
            >
              iOS Apps
            </Link>
          </li>
          <li>
            <Link
              href="/docs/mobile-apps/android"
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/docs/mobile-apps/android")
                  ? "bg-[#e20074] text-white"
                  : "text-gray-400 hover:bg-[#23232b] hover:text-white"
              }`}
            >
              Android Apps
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
        <ul className="space-y-2">
          <li>
            <a
              href="https://discord.pwrirl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-400 hover:bg-[#23232b] hover:text-white transition-colors"
            >
              <Icon icon="mdi:discord" className="text-xl" />
              <span>Discord Community</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/pwrirl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-400 hover:bg-[#23232b] hover:text-white transition-colors"
            >
              <Icon icon="mdi:github" className="text-xl" />
              <span>GitHub Repository</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
} 