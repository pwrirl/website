"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export default function StreamingSection() {
  const [isPowerStreamingPro, setIsPowerStreamingPro] = useState(false);

  return (
    <section id="multi-stream" className="pt-4 pb-12 px-4 bg-[#121212] text-white">
      <div className="container mx-auto">
        {/* PowerStreaming Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Multi-Stream Plans</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]"></span>
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg mb-4">
            Stream to multiple platforms simultaneously
          </p>
        </div>

        {/* PowerStreaming Plans */}
        <div className="w-full mb-10">
          <div className="bg-[#0A0A0A] rounded-lg overflow-hidden relative  flex flex-col">
            {/* Toggle inside the card */}
            <div className="flex flex-col items-center justify-center px-4 mb-4 pt-4">
              <div className="flex items-center justify-center mb-2">
                <span
                  className={`text-base whitespace-nowrap ${
                    !isPowerStreamingPro
                      ? "text-[#E20074] font-bold"
                      : "text-white"
                  }`}
                >
                  Basic (5 Destinations)
                </span>
                <div
                  className={`relative mx-3 w-12 h-6 rounded-full ${
                    isPowerStreamingPro ? "bg-[#E20074]" : "bg-gray-800"
                  } transition-colors duration-300 cursor-pointer`}
                  onClick={() => setIsPowerStreamingPro((prevState) => !prevState)}
                >
                  <div
                    className="absolute top-1 h-4 w-4 rounded-full bg-white transform transition-transform duration-300"
                    style={{
                      transform: isPowerStreamingPro
                        ? "translateX(28px)"
                        : "translateX(4px)",
                    }}
                  ></div>
                </div>
                <span
                  className={`text-base whitespace-nowrap ${
                    isPowerStreamingPro ? "text-[#E20074] font-bold" : "text-white"
                  }`}
                >
                  Pro (10 Destinations)
                </span>
              </div>
              <div className="text-center">
                <p className="text-base text-white">
                  Stream to {isPowerStreamingPro ? "10" : "5"} different destinations simultaneously
                </p>
              </div>
            </div>
            
            <div className="px-6 py-12 flex flex-col lg:flex-row w-full">
              <div className="w-full lg:w-2/5 lg:pr-6 mb-6 lg:mb-0 flex flex-col">
                <div className="flex items-center mb-2 justify-center lg:justify-start">
                  <div className="text-[#E20074] mr-3">
                    <Icon icon="mdi:broadcast" width="36" height="36" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    {isPowerStreamingPro
                      ? "PowerStreaming Pro"
                      : "PowerStreaming Basic"}
                  </h3>
                </div>
                <div className="mb-3 text-center lg:text-left">
                  <span className="text-5xl font-bold text-white">
                    {isPowerStreamingPro ? "$9.99" : "$4.99"}
                  </span>
                  <span className="text-white text-base ml-2">/month</span>
                </div>
                <p className="text-base text-white mb-4 text-center mx-auto lg:mx-0 lg:text-left max-w-md">
                  {isPowerStreamingPro
                    ? "Amplify your presence by streaming to up to 10 destinations at once. Ideal for advanced users and brands aiming to maximize audience engagement."
                    : "Stream seamlessly to up to 5 destinations simultaneously. Perfect for creators looking to expand their reach across multiple channels."}
                </p>
                
                {/* Button in left column for desktop, hidden in mobile */}
                <div className="hidden lg:block mt-auto">
                  <button className="bg-gradient-to-r from-[#e20074] to-[#ff00a0] hover:from-[#d1006a] hover:to-[#e6009c] text-white py-4 rounded-md text-lg font-bold cursor-pointer w-full">
                    <span className="relative z-10">Coming Soon</span>
                  </button>
                </div>
              </div>
              
              <div className="lg:w-3/5 flex flex-col">
                <div className="mb-4">
                  <div className="grid grid-cols-3 overflow-hidden rounded-lg mx-auto max-w-md lg:max-w-none">
                    <div className="flex flex-col items-center justify-center py-8 hover:bg-[#151515] transition-colors duration-200">
                      <Icon
                        icon="mdi:twitch"
                        width="48"
                        height="48"
                        className="text-[#6441a5] mb-3"
                      />
                      <span className="text-sm font-medium text-white">Twitch</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-8 border-l border-r border-white/10 hover:bg-[#151515] transition-colors duration-200">
                      <Icon
                        icon="simple-icons:kick"
                        width="48"
                        height="48"
                        className="text-[#53fc18] mb-3"
                      />
                      <span className="text-sm font-medium text-white">Kick</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-8 hover:bg-[#151515] transition-colors duration-200">
                      <Icon
                        icon="mdi:youtube"
                        width="48"
                        height="48"
                        className="text-[#ff0000] mb-3"
                      />
                      <span className="text-sm font-medium text-white">YouTube</span>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center py-8 border-t border-white/10 hover:bg-[#151515] transition-colors duration-200">
                      <Icon
                        icon="simple-icons:rumble"
                        width="48"
                        height="48"
                        className="text-[#85c742] mb-3"
                      />
                      <span className="text-sm font-medium text-white">Rumble</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-8 border-t border-l border-r border-white/10 hover:bg-[#151515] transition-colors duration-200">
                      <Icon
                        icon="ic:baseline-tiktok"
                        width="48"
                        height="48"
                        className="text-white mb-3"
                      />
                      <span className="text-sm font-medium text-white">TikTok</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-8 border-t border-white/10 hover:bg-[#151515] transition-colors duration-200">
                      <Icon
                        icon="simple-icons:x"
                        width="48"
                        height="48"
                        className="text-white mb-3"
                      />
                      <span className="text-sm font-medium text-white">X</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Button at bottom for mobile, hidden in desktop */}
            <div className="px-6 pt-2 pb-8 mt-auto lg:hidden">
              <button className="bg-gradient-to-r from-[#e20074] to-[#ff00a0] hover:from-[#d1006a] hover:to-[#e6009c] text-white py-4 rounded-md text-lg font-bold cursor-pointer w-full">
                <span className="relative z-10">Coming Soon</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}