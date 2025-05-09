import DocsNav from "@/components/docs/DocsNav";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ComputerSoftwarePage() {
  return (
    <div className="min-h-screen bg-[#18181b] py-16">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row gap-12">
        <aside className="md:w-1/4 mb-8 md:mb-0">
          <DocsNav />
        </aside>
        <section className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Computer Software</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]" />
          </h1>
          <p className="text-gray-400 max-w-2xl mb-12 text-lg">
            Choose from our recommended streaming software solutions. Each option is designed to help you create professional-quality IRL streams with ease.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* OBS Studio Card */}
            <Link href="/docs/computer-software/obs-studio" className="group">
              <div className="bg-[#23232b] rounded-xl p-6 h-full transition-all duration-300 hover:bg-[#2a2a34]">
                <div className="flex items-center gap-4 mb-4">
                  <Icon icon="mdi:video" className="text-[#e20074] text-3xl" />
                  <h2 className="text-xl font-semibold text-white">OBS Studio</h2>
                </div>
                <p className="text-gray-400 mb-4">
                  Free and open-source software for video recording and live streaming. Perfect for beginners and professionals alike.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <Icon icon="mdi:check-circle" className="text-[#e20074]" />
                    <span>Free and open-source</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Icon icon="mdi:check-circle" className="text-[#e20074]" />
                    <span>Extensive plugin support</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Icon icon="mdi:check-circle" className="text-[#e20074]" />
                    <span>Cross-platform compatibility</span>
                  </li>
                </ul>
                <div className="flex items-center text-[#e20074] group-hover:translate-x-2 transition-transform">
                  <span className="font-medium">Learn More</span>
                  <Icon icon="mdi:arrow-right" className="ml-2" />
                </div>
              </div>
            </Link>

            {/* Meld Studio Card */}
            <Link href="/docs/computer-software/meld-studio" className="group">
              <div className="bg-[#23232b] rounded-xl p-6 h-full transition-all duration-300 hover:bg-[#2a2a34]">
                <div className="flex items-center gap-4 mb-4">
                  <Icon icon="mdi:video-plus" className="text-[#e20074] text-3xl" />
                  <h2 className="text-xl font-semibold text-white">Meld Studio</h2>
                </div>
                <p className="text-gray-400 mb-4">
                  Modern streaming software built for performance and ease of use. Optimized for Apple Silicon and modern hardware.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <Icon icon="mdi:check-circle" className="text-[#e20074]" />
                    <span>Native Apple Silicon support</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Icon icon="mdi:check-circle" className="text-[#e20074]" />
                    <span>Intuitive interface</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Icon icon="mdi:check-circle" className="text-[#e20074]" />
                    <span>Built-in streaming features</span>
                  </li>
                </ul>
                <div className="flex items-center text-[#e20074] group-hover:translate-x-2 transition-transform">
                  <span className="font-medium">Learn More</span>
                  <Icon icon="mdi:arrow-right" className="ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 