import DocsNav from "@/components/docs/DocsNav";
import { Icon } from "@iconify/react";

export default function MoblinPage() {
  return (
    <div className="min-h-screen bg-[#18181b] py-16">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row gap-12">
        <aside className="md:w-1/4 mb-8 md:mb-0">
          <DocsNav />
        </aside>
        <section className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Moblin Setup Guide</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]" />
          </h1>
          <p className="text-gray-400 max-w-2xl mb-12 text-lg">
            A comprehensive guide to setting up Moblin for IRL streaming on iOS. Learn how to configure your stream settings, optimize performance, and start broadcasting with professional quality.
          </p>

          {/* Table of Contents */}
          <div className="bg-[#23232b] rounded-xl p-6 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <Icon icon="mdi:chevron-right" className="text-[#e20074]" />
                <a href="#requirements" className="hover:text-[#e20074] transition-colors">System Requirements</a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Icon icon="mdi:chevron-right" className="text-[#e20074]" />
                <a href="#installation" className="hover:text-[#e20074] transition-colors">Installation</a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Icon icon="mdi:chevron-right" className="text-[#e20074]" />
                <a href="#configuration" className="hover:text-[#e20074] transition-colors">Stream Configuration</a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Icon icon="mdi:chevron-right" className="text-[#e20074]" />
                <a href="#optimization" className="hover:text-[#e20074] transition-colors">Performance Optimization</a>
              </li>
            </ul>
          </div>

          {/* System Requirements */}
          <div id="requirements" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">System Requirements</h2>
            <div className="bg-[#23232b] rounded-xl p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">iOS 14.0 or later</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">iPhone 8 or newer recommended</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Stable internet connection (5G/LTE/WiFi)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Minimum 2GB free storage space</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Installation */}
          <div id="installation" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Installation</h2>
            <div className="bg-[#23232b] rounded-xl p-6">
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-[#e20074] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
                  <div>
                    <p className="text-gray-300">Open the App Store on your iOS device</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#e20074] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
                  <div>
                    <p className="text-gray-300">Search for "Moblin"</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#e20074] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
                  <div>
                    <p className="text-gray-300">Download and install the app</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#e20074] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">4</span>
                  <div>
                    <p className="text-gray-300">Launch Moblin and grant necessary permissions when prompted</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Stream Configuration */}
          <div id="configuration" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Stream Configuration</h2>
            <div className="bg-[#23232b] rounded-xl p-6">
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-[#e20074] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
                  <div>
                    <p className="text-gray-300">Open Moblin and tap the settings icon</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#e20074] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
                  <div>
                    <p className="text-gray-300">Select "Stream Settings"</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#e20074] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
                  <div>
                    <p className="text-gray-300">Enter your PowerIRL stream key and server URL</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#e20074] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">4</span>
                  <div>
                    <p className="text-gray-300">Configure video quality settings (recommended: 1080p, 30fps)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#e20074] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">5</span>
                  <div>
                    <p className="text-gray-300">Set audio quality to "High"</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Performance Optimization */}
          <div id="optimization" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Performance Optimization</h2>
            <div className="bg-[#23232b] rounded-xl p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:lightbulb" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Battery Optimization</p>
                    <p className="text-gray-400">Enable "Low Power Mode" during streaming to extend battery life</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:lightbulb" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Network Settings</p>
                    <p className="text-gray-400">Use 5G or WiFi for optimal streaming quality</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:lightbulb" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Storage Management</p>
                    <p className="text-gray-400">Regularly clear cache and temporary files</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:lightbulb" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Background Apps</p>
                    <p className="text-gray-400">Close unnecessary background applications before streaming</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 