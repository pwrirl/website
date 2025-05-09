import DocsNav from "@/components/docs/DocsNav";
import { Icon } from "@iconify/react";

export default function NoALBSPage() {
  return (
    <div className="min-h-screen bg-[#18181b] py-16">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row gap-12">
        <aside className="md:w-1/4 mb-8 md:mb-0">
          <DocsNav />
        </aside>
        <section className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">NOALBS Setup Guide</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]" />
          </h1>
          <p className="text-gray-400 max-w-2xl mb-12 text-lg">
            NOALBS (NGINX-OBS Automatic Low Bitrate Switching) is a tool that automatically switches scenes in OBS based on your stream's bitrate, helping you handle network drops and maintain a professional stream. This guide covers setup, configuration, and best practices for using NOALBS with your IRL streaming setup.
          </p>

          {/* Table of Contents */}
          <div className="bg-[#23232b] rounded-xl p-6 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <Icon icon="mdi:chevron-right" className="text-[#e20074]" />
                <a href="#features" className="hover:text-[#e20074] transition-colors">Features</a>
              </li>
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
                <a href="#configuration" className="hover:text-[#e20074] transition-colors">Configuration</a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Icon icon="mdi:chevron-right" className="text-[#e20074]" />
                <a href="#usage" className="hover:text-[#e20074] transition-colors">Usage & Best Practices</a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div id="features" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
            <div className="bg-[#23232b] rounded-xl p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Automatically switches OBS scenes based on stream bitrate</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Supports NGINX, MediaMTX, Belabox, RIST, Xiu, IrlHosting, and OBS sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Cross-platform: Windows, Mac, and Linux</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Customizable scene switching logic and backup scenes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Open source and actively maintained</span>
                </li>
              </ul>
            </div>
          </div>

          {/* System Requirements */}
          <div id="requirements" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">System Requirements</h2>
            <div className="bg-[#23232b] rounded-xl p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Windows, Mac, or Linux computer</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">OBS Studio v26 or newer</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Node.js (for running NOALBS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">NGINX-RTMP, MediaMTX, or other supported streaming server (for stats)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Installation */}
          <div id="installation" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Installation</h2>
            <div className="bg-[#23232b] rounded-xl p-6">
              <ol className="space-y-4 list-decimal list-inside">
                <li>
                  <span className="text-gray-300">Download or clone the NOALBS repository from <a href="https://github.com/NOALBS/nginx-obs-automatic-low-bitrate-switching" target="_blank" rel="noopener noreferrer" className="text-[#e20074] underline">GitHub</a>.</span>
                </li>
                <li>
                  <span className="text-gray-300">Install <b>Node.js</b> (if not already installed) from <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="text-[#e20074] underline">nodejs.org</a>.</span>
                </li>
                <li>
                  <span className="text-gray-300">Open a terminal in the NOALBS directory and run <code>npm install</code> to install dependencies.</span>
                </li>
                <li>
                  <span className="text-gray-300">Copy <code>config.json.example</code> to <code>config.json</code> and edit it to match your setup (see configuration below).</span>
                </li>
                <li>
                  <span className="text-gray-300">Start NOALBS with <code>npm start</code> or <code>node index.js</code>.</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Configuration */}
          <div id="configuration" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Configuration</h2>
            <div className="bg-[#23232b] rounded-xl p-6 space-y-6">
              <p className="text-gray-300 mb-4">Edit <code>config.json</code> to define your stream server, scenes, and switching logic. Below is a basic example for NGINX-RTMP:</p>
              <pre className="bg-[#18181b] text-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4">
{`
{
  "streamServer": {
    "type": "Nginx",
    "statsUrl": "http://localhost/stat"
  },
  "obs": {
    "address": "localhost:4455",
    "password": "your_obs_password"
  },
  "scenes": {
    "normal": "LIVE",
    "low": "LOW",
    "offline": "BRB"
  }
}
`}
              </pre>
              <ul className="space-y-2 text-gray-300">
                <li>• <b>streamServer</b>: Configure for your streaming server (NGINX, MediaMTX, Belabox, etc.).</li>
                <li>• <b>obs</b>: Set your OBS WebSocket address and password.</li>
                <li>• <b>scenes</b>: Map bitrate states to OBS scenes (e.g., LIVE, LOW, BRB).</li>
              </ul>
              <p className="text-gray-400 mt-4">For advanced configuration, see the <a href="https://github.com/NOALBS/nginx-obs-automatic-low-bitrate-switching#readme" target="_blank" rel="noopener noreferrer" className="text-[#e20074] underline">NOALBS documentation</a>.</p>
            </div>
          </div>

          {/* Usage & Best Practices */}
          <div id="usage" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Usage & Best Practices</h2>
            <div className="bg-[#23232b] rounded-xl p-6 space-y-4">
              <ul className="space-y-2 text-gray-300">
                <li>• Start NOALBS before you begin streaming in OBS.</li>
                <li>• Make sure your OBS scenes (LIVE, LOW, BRB, etc.) are set up and named exactly as in your config.</li>
                <li>• Test scene switching by simulating a network drop or lowering your stream bitrate.</li>
                <li>• Use the <b>dependsOn</b> field in config for multi-server setups or backup scenes.</li>
                <li>• For help, visit the <a href="https://github.com/NOALBS/nginx-obs-automatic-low-bitrate-switching" target="_blank" rel="noopener noreferrer" className="text-[#e20074] underline">NOALBS GitHub</a> or join their Discord.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 