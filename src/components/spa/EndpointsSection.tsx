"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

export default function EndpointsSection() {
  return (
    <section id="endpoints" className="pt-8 pb-12 px-4 bg-[#121212] text-white">
      <div className="container mx-auto">
        {/* Endpoints & PowerStreaming */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Endpoint Plans</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]"></span>
          </h2>
          <p className="text-center text-white max-w-3xl mx-auto text-lg mb-6">
            Enhance your streaming setup with our specialized services
          </p>
        </div>

        {/* SRT/SRTLA and RTMP blocks side by side */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* SRT/SRTLA Block */}
          <div className="bg-[#23232b] rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e20074]">
            <div className="p-8 flex flex-col flex-grow">
              <div>
                <div className="text-[#E20074] mb-4 flex justify-center">
                  <Icon icon="mdi:connection" width="48" height="48" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                  SRT/SRTLA
                </h3>
                <div className="mb-6 text-center">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-white text-base ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#E20074] mr-2 mt-0.5 flex-shrink-0">
                      <Icon icon="mdi:check-circle" width="22" height="22" />
                    </span>
                    <span className="text-base">
                      High-quality streaming with secure reliable transport
                      (SRT)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E20074] mr-2 mt-0.5 flex-shrink-0">
                      <Icon icon="mdi:check-circle" width="22" height="22" />
                    </span>
                    <span className="text-base">
                      Optimized for mobile and desktop devices (Android, iOS,
                      and more)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E20074] mr-2 mt-0.5 flex-shrink-0">
                      <Icon icon="mdi:check-circle" width="22" height="22" />
                    </span>
                    <span className="text-base">
                      Ultra-low latency (sub-second) with error correction
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E20074] mr-2 mt-0.5 flex-shrink-0">
                      <Icon icon="mdi:check-circle" width="22" height="22" />
                    </span>
                    <span className="text-base">
                      AES-128 encryption for secure streaming
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E20074] mr-2 mt-0.5 flex-shrink-0">
                      <Icon icon="mdi:check-circle" width="22" height="22" />
                    </span>
                    <span className="text-base">
                      Adaptive streaming for unstable networks and mobile data
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <Link href="/register" className="w-full bg-gradient-to-r from-[#e20074] to-[#ff00a0] hover:from-[#d1006a] hover:to-[#e6009c] text-white py-5 rounded-md text-lg font-bold cursor-pointer flex items-center justify-center">
                  Order Now
                </Link>
              </div>
            </div>
          </div>

          {/* RTMP Block */}
          <div className="bg-[#23232b] rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e20074]">
            <div className="p-8 flex flex-col flex-grow">
              <div>
                <div className="text-[#E20074] mb-4 flex justify-center">
                  <Icon icon="mdi:video-wireless" width="48" height="48" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                  RTMP
                </h3>
                <div className="mb-6 text-center">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-white text-base ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#E20074] mr-2 mt-0.5 flex-shrink-0">
                      <Icon icon="mdi:check-circle" width="22" height="22" />
                    </span>
                    <span className="text-base">
                      Industry-standard RTMP for legacy streaming compatibility
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E20074] mr-2 mt-0.5 flex-shrink-0">
                      <Icon icon="mdi:check-circle" width="22" height="22" />
                    </span>
                    <span className="text-base">
                      Supports major platforms like Twitch and Kick
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E20074] mr-2 mt-0.5 flex-shrink-0">
                      <Icon icon="mdi:check-circle" width="22" height="22" />
                    </span>
                    <span className="text-base">
                      High-quality video up to 1080p
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E20074] mr-2 mt-0.5 flex-shrink-0">
                      <Icon icon="mdi:check-circle" width="22" height="22" />
                    </span>
                    <span className="text-base">
                      Ideal for desktop streaming with OBS and other encoders
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E20074] mr-2 mt-0.5 flex-shrink-0">
                      <Icon icon="mdi:check-circle" width="22" height="22" />
                    </span>
                    <span className="text-base">
                      Broad compatibility with a wide range of encoders
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <Link href="/register" className="w-full bg-gradient-to-r from-[#e20074] to-[#ff00a0] hover:from-[#d1006a] hover:to-[#e6009c] text-white py-5 rounded-md text-lg font-bold cursor-pointer flex items-center justify-center">
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}