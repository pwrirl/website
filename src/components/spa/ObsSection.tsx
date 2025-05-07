"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  features: PlanFeature[];
}

export default function ObsSection() {
  const [isDedicated, setIsDedicated] = useState(false);
  const [isPowerStreamingPro, setIsPowerStreamingPro] = useState(false);

  // VPS Plans
  const vpsPlans: PricingPlan[] = [
    {
      name: "PowerOBS Basic",
      description: "Virtual Private Server",
      price: "$59.99",
      features: [
        { text: "Free Setup", included: true },
        { text: "White Glove Service", included: true },
        { text: "24/7 Support via Discord", included: true },
        { text: "Powered by Nvidia GPU", included: true },
        { text: "1080P/60FPS Streaming", included: true },
        { text: "1 Endpoint (SRT/SRTLA or RTMP)", included: true },
        { text: "Basic Overlays/Alerts", included: true },
        {
          text: "1 Streaming Destination (Multi-Streaming Add-On)",
          included: true,
        },
        { text: "Optimized for Mobile Streaming", included: true },
        { text: "Dedicated Edition Available", included: true },
      ],
    },
    {
      name: "PowerOBS Advanced",
      description: "Semi-Bare Metal",
      price: "$99.99",
      popular: true,
      features: [
        { text: "Free Setup", included: true },
        { text: "White Glove Service", included: true },
        { text: "24/7 Support via Discord", included: true },
        { text: "Powered by Nvidia GPU", included: true },
        { text: "1080P/60FPS Streaming", included: true },
        { text: "1 Endpoint (SRT/SRTLA and RTMP)", included: true },
        { text: "5 Streaming Destinations (Via Plugin*)", included: true },
        { text: "Custom Overlays & Alerts", included: true },
        { text: "Remote Desktop Access", included: true },
        { text: "Advanced Stream Settings", included: true },
      ],
    },
    {
      name: "PowerOBS Premium",
      description: "Semi-Bare Metal",
      price: "$129.99",
      features: [
        { text: "Free Setup", included: true },
        { text: "White Glove Service", included: true },
        { text: "24/7 Support via Discord", included: true },
        { text: "Powered by Nvidia GPU", included: true },
        { text: "1080P/60FPS Streaming", included: true },
        { text: "3 Endpoints (SRT/SRTLA and RTMP)", included: true },
        { text: "10 Streaming Destinations (Via Plugin*)", included: true },
        { text: "Custom Overlays & Alerts", included: true },
        { text: "Remote Desktop Access", included: true },
        { text: "Advanced Stream Settings", included: true },
      ],
    },
  ];

  // Dedicated Plans
  const dedicatedPlans: PricingPlan[] = [
    {
      name: "PowerOBS Basic",
      description: "Dedicated Server",
      price: "$99.99",
      features: [
        { text: "Free Setup", included: true },
        { text: "White Glove Service", included: true },
        { text: "24/7 Support via Discord", included: true },
        { text: "Powered by Nvidia GPU", included: true },
        { text: "1080P/60FPS Streaming", included: true },
        { text: "1 Endpoint (SRT/SRTLA or RTMP)", included: true },
        { text: "Basic Overlays/Alerts", included: true },
        { text: "Remote Desktop Access", included: true },
        {
          text: "1 Streaming Destination (Multi-Streaming Add-On)",
          included: true,
        },
        { text: "Optimized for Mobile Streaming", included: true },
      ],
    },
    {
      name: "PowerOBS Advanced",
      description: "Dedicated Server",
      price: "$139.99",
      popular: true,
      features: [
        { text: "Free Setup", included: true },
        { text: "White Glove Service", included: true },
        { text: "24/7 Support via Discord", included: true },
        { text: "Powered by Nvidia GPU", included: true },
        { text: "1080P/60FPS Streaming", included: true },
        { text: "1 Endpoint (SRT/SRTLA and RTMP)", included: true },
        { text: "5 Streaming Destinations (Via Plugin*)", included: true },
        { text: "Custom Overlays & Alerts", included: true },
        { text: "Remote Desktop Access", included: true },
        { text: "Advanced Stream Settings", included: true },
      ],
    },
    {
      name: "PowerOBS Premium",
      description: "Dedicated Server",
      price: "$189.99",
      features: [
        { text: "Free Setup", included: true },
        { text: "White Glove Service", included: true },
        { text: "24/7 Support via Discord", included: true },
        { text: "Powered by Nvidia GPU", included: true },
        { text: "1080P/60FPS Streaming", included: true },
        { text: "3 Endpoints (SRT/SRTLA and RTMP)", included: true },
        { text: "10 Streaming Destinations (Via Plugin*)", included: true },
        { text: "Custom Overlays & Alerts", included: true },
        { text: "Remote Desktop Access", included: true },
        { text: "Advanced Stream Settings", included: true },
      ],
    },
  ];

  // Get current plans based on toggle state
  const currentPlans = isDedicated ? dedicatedPlans : vpsPlans;

  return (
    <section id="cloud-obs" className="pt-8 pb-12 px-4 bg-[#121212] text-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Cloud OBS Plans</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]"></span>
          </h2>
          <p className="text-center text-white max-w-3xl mx-auto text-lg">
            Choose the perfect PowerOBS plan for your streaming needs
          </p>
        </div>

        {/* Toggle switch */}
        <div className="flex items-center justify-center mb-12">
          <span
            className={`text-lg ${
              !isDedicated ? "text-[#E20074] font-bold" : "text-white"
            }`}
          >
            VPS
          </span>
          <div
            className={`relative mx-4 w-14 h-7 rounded-full ${
              isDedicated ? "bg-[#E20074]" : "bg-gray-800"
            } transition-colors duration-300 cursor-pointer`}
            onClick={() => setIsDedicated(!isDedicated)}
          >
            <div
              className="absolute top-1 h-5 w-5 rounded-full bg-white transform transition-transform duration-300"
              style={{
                transform: isDedicated ? "translateX(32px)" : "translateX(4px)",
              }}
            ></div>
          </div>
          <span
            className={`ml-4 text-lg ${
              isDedicated ? "text-[#E20074] font-bold" : "text-white"
            }`}
          >
            Dedicated
          </span>
        </div>

        {/* PowerOBS Advanced (Popular) Plan */}
        <div className="w-full mb-8">
          {currentPlans
            .filter((plan) => plan.popular)
            .map((plan, index) => (
              <div
                key={index}
                className="bg-[#0A0A0A] rounded-lg overflow-hidden relative flex flex-col py-4"
              >
                {plan.popular && (
                  <div className="absolute top-[22px] right-[-58px] z-10 rotate-45">
                    <div className="relative w-[200px]">
                      <div className="bg-gradient-to-r from-[#e20074] to-[#ff00a0] py-2 text-center text-sm font-bold text-white shadow-lg">
                        POPULAR
                      </div>
                    </div>
                  </div>
                )}
                <div className="px-8 py-4 flex flex-col lg:flex-row w-full">
                  <div className="lg:w-2/5 lg:pr-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {plan.name}
                    </h3>
                    <p className="text-base text-white mb-6">
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-white text-base ml-2">
                        /month
                      </span>
                    </div>
                    {/* Button in left column for large screens */}
                    <div className="hidden lg:block mt-auto">
                      <p className="text-sm text-white mb-4">
                        Servers are typically deployed within 24 hours
                      </p>
                      <button className="bg-gradient-to-r from-[#e20074] to-[#ff00a0] hover:from-[#d1006a] hover:to-[#e6009c] text-white py-4 rounded-md text-lg font-bold cursor-pointer w-full">
                        <span className="relative z-10">Order Now</span>
                      </button>
                    </div>
                  </div>
                  <div className="lg:w-3/5 flex flex-col">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-[#E20074] mr-2 mt-0.5 flex-shrink-0">
                            <Icon
                              icon="mdi:check-circle"
                              width="22"
                              height="22"
                            />
                          </span>
                          <span className="text-base">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Button at the very bottom for stacked/column layout (below lg) */}
                  <div className="block lg:hidden mt-4 w-full">
                    <p className="text-sm text-white mb-4 text-center">
                      Servers are typically deployed within 24 hours
                    </p>
                    <button className="bg-gradient-to-r from-[#e20074] to-[#ff00a0] hover:from-[#d1006a] hover:to-[#e6009c] text-white py-4 rounded-md text-lg font-bold cursor-pointer w-full">
                      <span className="relative z-10">Order Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Pricing cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {currentPlans
            .filter((plan) => !plan.popular)
            .map((plan, index) => (
              <div
                key={index}
                className="bg-[#0A0A0A] rounded-lg overflow-hidden relative flex flex-col"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {plan.name}
                    </h3>
                    <p className="text-base text-white mb-4">
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-white text-base ml-2">
                        /month
                      </span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-[#E20074] mr-2 mt-0.5 flex-shrink-0">
                            <Icon
                              icon="mdi:check-circle"
                              width="22"
                              height="22"
                            />
                          </span>
                          <span className="text-base">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <p className="text-sm text-white mb-4">
                      Servers are typically deployed within 24 hours
                    </p>
                    <button className="w-full bg-gradient-to-r from-[#e20074] to-[#ff00a0] hover:from-[#d1006a] hover:to-[#e6009c] text-white py-5 rounded-md transition-colors text-lg font-bold cursor-pointer">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Custom project section */}
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-[#0A0A0A] rounded-lg text-center">
          <div className="text-[#E20074] mb-4">
            <Icon icon="mdi:discord" width="48" height="48" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Custom Project</h3>
          <p className="text-white mb-6 max-w-lg mx-auto">
            Need something more powerful, a custom solution, or help with a
            special event? Contact us and our team will work with you to deliver
            exactly what you need.
          </p>
          <button className="bg-gradient-to-r from-[#e20074] to-[#ff00a0] hover:from-[#d1006a] hover:to-[#e6009c] text-white py-3 px-8 rounded-md transition-colors text-lg font-bold cursor-pointer">
            Connect With Us
          </button>
        </div>
      </div>
    </section>
  );
} 