import DocsNav from "@/components/docs/DocsNav";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen bg-[#18181b] py-16">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row gap-12">
        <aside className="md:w-1/4 mb-8 md:mb-0">
          <DocsNav />
        </aside>
        <section className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Mobile Apps</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]" />
          </h1>
          <p className="text-gray-400 max-w-2xl mb-12 text-lg">
            Choose from our recommended mobile streaming apps for iOS and Android. Each app is designed to help you create professional-quality IRL streams directly from your smartphone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* iOS Card */}
            <Link href="/docs/mobile-apps/ios" className="group">
              <div className="bg-[#23232b] rounded-xl p-6 h-full transition-all duration-300 hover:bg-[#2a2a34]">
                <div className="flex items-center gap-4 mb-4">
                  <Icon icon="mdi:apple" className="text-[#e20074] text-3xl" />
                  <h2 className="text-xl font-semibold text-white">iOS Apps</h2>
                </div>
                <p className="text-gray-400 mb-4">
                  Professional streaming apps for iPhone and iPad. Optimized for iOS devices with advanced features and intuitive interfaces.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <Icon icon="mdi:check-circle" className="text-[#e20074]" />
                    <span>High-quality video streaming</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Icon icon="mdi:check-circle" className="text-[#e20074]" />
                    <span>Advanced camera controls</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Icon icon="mdi:check-circle" className="text-[#e20074]" />
                    <span>Built-in filters and effects</span>
                  </li>
                </ul>
                <div className="flex items-center text-[#e20074] group-hover:translate-x-2 transition-transform">
                  <span className="font-medium">View iOS Apps</span>
                  <Icon icon="mdi:arrow-right" className="ml-2" />
                </div>
              </div>
            </Link>

            {/* Android Card */}
            <Link href="/docs/mobile-apps/android" className="group">
              <div className="bg-[#23232b] rounded-xl p-6 h-full transition-all duration-300 hover:bg-[#2a2a34]">
                <div className="flex items-center gap-4 mb-4">
                  <Icon icon="mdi:android" className="text-[#e20074] text-3xl" />
                  <h2 className="text-xl font-semibold text-white">Android Apps</h2>
                </div>
                <p className="text-gray-400 mb-4">
                  Feature-rich streaming apps for Android devices. Take advantage of Android's flexibility and customization options.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <Icon icon="mdi:check-circle" className="text-[#e20074]" />
                    <span>Customizable streaming settings</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Icon icon="mdi:check-circle" className="text-[#e20074]" />
                    <span>Multi-camera support</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Icon icon="mdi:check-circle" className="text-[#e20074]" />
                    <span>Advanced audio controls</span>
                  </li>
                </ul>
                <div className="flex items-center text-[#e20074] group-hover:translate-x-2 transition-transform">
                  <span className="font-medium">View Android Apps</span>
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