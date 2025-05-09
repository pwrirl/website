import DocsNav from "@/components/docs/DocsNav";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function IOSAppsPage() {
  return (
    <div className="min-h-screen bg-[#18181b] py-16">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row gap-12">
        <aside className="md:w-1/4 mb-8 md:mb-0">
          <DocsNav />
        </aside>
        <section className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">iOS Streaming Apps</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]" />
          </h1>
          <p className="text-gray-400 max-w-2xl mb-12 text-lg">
            Discover the best streaming apps for iOS devices. Each app offers unique features and capabilities to enhance your IRL streaming experience.
          </p>

          <div className="grid grid-cols-1 gap-8">
            {/* Moblin Card */}
            <div className="bg-[#23232b] rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon="mdi:video" className="text-[#e20074] text-3xl" />
                <div>
                  <h2 className="text-xl font-semibold text-white">Moblin</h2>
                  <span className="bg-[#e20074] text-white text-xs px-2 py-0.5 rounded-full">Recommended</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                A powerful and user-friendly streaming app designed specifically for IRL streaming. Perfect for both beginners and experienced streamers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Built-in chat to interact with viewers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">SRTLA, SRT, RTMP and RTMPS support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Up to 4K, 60 FPS, H.265/HEVC</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Video stabilization</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:cellphone" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">iOS 16.4 or later</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:wifi" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Stable internet connection (5+ Mbps)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:battery-charging" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Power bank recommended for long streams</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href="https://apps.apple.com/us/app/moblin/id6466745933"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#e20074] text-white rounded-lg hover:bg-[#e20074]/90 transition-colors"
                >
                  <Icon icon="mdi:apple" className="text-xl" />
                  <span>Download on App Store</span>
                </a>
                <Link
                  href="/docs/mobile-apps/ios/moblin"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#23232b] text-white rounded-lg hover:bg-[#2a2a34] transition-colors"
                >
                  <Icon icon="mdi:book-open-page-variant" className="text-xl" />
                  <span>View Setup Guide</span>
                </Link>
              </div>
            </div>

            {/* Larix Broadcaster Card */}
            <div className="bg-[#23232b] rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon="mdi:video-plus" className="text-[#e20074] text-3xl" />
                <h2 className="text-xl font-semibold text-white">Larix Broadcaster</h2>
              </div>
              <p className="text-gray-400 mb-4">
                Professional-grade streaming app with advanced features and low-latency streaming capabilities. Ideal for broadcasters who need precise control over their stream.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Professional streaming settings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Multiple camera support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Advanced audio controls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Support for RTMP, SRT, and SRTLA</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:cellphone" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">iOS 12.0 or later</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:wifi" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Stable internet connection (5+ Mbps)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:battery-charging" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Power bank recommended for long streams</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href="https://apps.apple.com/us/app/larix-broadcaster/id1042474385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#e20074] text-white rounded-lg hover:bg-[#e20074]/90 transition-colors"
                >
                  <Icon icon="mdi:apple" className="text-xl" />
                  <span>Download on App Store</span>
                </a>
                <Link
                  href="/docs/mobile-apps/ios/larix-broadcaster"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#23232b] text-white rounded-lg hover:bg-[#2a2a34] transition-colors"
                >
                  <Icon icon="mdi:book-open-page-variant" className="text-xl" />
                  <span>View Setup Guide</span>
                </Link>
              </div>
            </div>

            {/* PRISM Card */}
            <div className="bg-[#23232b] rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon="mdi:video-outline" className="text-[#e20074] text-3xl" />
                <h2 className="text-xl font-semibold text-white">PRISM Live Studio</h2>
              </div>
              <p className="text-gray-400 mb-4">
                A feature-rich streaming app with creative tools and effects. Perfect for streamers who want to add unique visual elements to their broadcasts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Creative filters and effects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Multi-camera support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Built-in chat and alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Custom overlays and graphics</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:cellphone" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">iOS 16.0 or later</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:wifi" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Stable internet connection (5+ Mbps)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:battery-charging" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Power bank recommended for long streams</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href="https://apps.apple.com/us/app/prism-live-streaming-app/id1319056339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#e20074] text-white rounded-lg hover:bg-[#e20074]/90 transition-colors"
                >
                  <Icon icon="mdi:apple" className="text-xl" />
                  <span>Download on App Store</span>
                </a>
                <Link
                  href="/docs/mobile-apps/ios/prism-live-studio"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#23232b] text-white rounded-lg hover:bg-[#2a2a34] transition-colors"
                >
                  <Icon icon="mdi:book-open-page-variant" className="text-xl" />
                  <span>View Setup Guide</span>
                </Link>
              </div>
            </div>

            {/* Streamlabs Mobile Card */}
            <div className="bg-[#23232b] rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon="mdi:video" className="text-[#e20074] text-3xl" />
                <h2 className="text-xl font-semibold text-white">Streamlabs Mobile</h2>
              </div>
              <p className="text-gray-400 mb-4">
                A comprehensive streaming app with built-in alerts, overlays, and chat integration. Perfect for streamers who want a complete streaming solution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Built-in alerts and overlays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Chat integration and moderation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Custom themes and graphics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Stream analytics and insights</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:cellphone" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">iOS 12.0 or later</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:wifi" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Stable internet connection (5+ Mbps)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:battery-charging" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Power bank recommended for long streams</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href="https://apps.apple.com/us/app/streamlabs-live-streaming-app/id1294578643"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#e20074] text-white rounded-lg hover:bg-[#e20074]/90 transition-colors"
                >
                  <Icon icon="mdi:apple" className="text-xl" />
                  <span>Download on App Store</span>
                </a>
                <Link
                  href="/docs/mobile-apps/ios/streamlabs-mobile"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#23232b] text-white rounded-lg hover:bg-[#2a2a34] transition-colors"
                >
                  <Icon icon="mdi:book-open-page-variant" className="text-xl" />
                  <span>View Setup Guide</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 