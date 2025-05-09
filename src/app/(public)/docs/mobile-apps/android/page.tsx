import DocsNav from "@/components/docs/DocsNav";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function AndroidAppsPage() {
  return (
    <div className="min-h-screen bg-[#18181b] py-16">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row gap-12">
        <aside className="md:w-1/4 mb-8 md:mb-0">
          <DocsNav />
        </aside>
        <section className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Android Streaming Apps</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]" />
          </h1>
          <p className="text-gray-400 max-w-2xl mb-12 text-lg">
            Explore the best streaming apps for Android devices. Each app offers unique features and capabilities to enhance your IRL streaming experience.
          </p>

          <div className="grid grid-cols-1 gap-8">
            {/* IRL Pro Card */}
            <div className="bg-[#23232b] rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon="mdi:video" className="text-[#e20074] text-3xl" />
                <div>
                  <h2 className="text-xl font-semibold text-white">IRL Pro</h2>
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
                      <span className="text-gray-300">Intuitive interface with easy setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Advanced camera controls and filters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Built-in chat overlay and alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Support for SRT/SRTLA protocols</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:cellphone" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Android 5.0 or later</span>
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
                  href="https://play.google.com/store/apps/details?id=app.irlpro.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#e20074] text-white rounded-lg hover:bg-[#e20074]/90 transition-colors"
                >
                  <Icon icon="mdi:google-play" className="text-xl" />
                  <span>Download on Google Play</span>
                </a>
                <Link
                  href="/docs/mobile-apps/android/irl-pro"
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
                      <span className="text-gray-300">Android 5.0 or later</span>
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
                  href="https://play.google.com/store/apps/details?id=com.wmspanel.larix_broadcaster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#e20074] text-white rounded-lg hover:bg-[#e20074]/90 transition-colors"
                >
                  <Icon icon="mdi:google-play" className="text-xl" />
                  <span>Download on Google Play</span>
                </a>
                <Link
                  href="/docs/mobile-apps/android/larix-broadcaster"
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
                      <span className="text-gray-300">Android 5.0 or later</span>
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
                  href="https://play.google.com/store/apps/details?id=com.prism.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#e20074] text-white rounded-lg hover:bg-[#e20074]/90 transition-colors"
                >
                  <Icon icon="mdi:google-play" className="text-xl" />
                  <span>Download on Google Play</span>
                </a>
                <Link
                  href="/docs/mobile-apps/android/prism-live-studio"
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
                      <span className="text-gray-300">Android 6.0 or later</span>
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
                  href="https://play.google.com/store/apps/details?id=com.streamlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#e20074] text-white rounded-lg hover:bg-[#e20074]/90 transition-colors"
                >
                  <Icon icon="mdi:google-play" className="text-xl" />
                  <span>Download on Google Play</span>
                </a>
                <Link
                  href="/docs/mobile-apps/android/streamlabs-mobile"
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