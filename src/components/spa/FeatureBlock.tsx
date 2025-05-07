"use client";

import { Icon } from "@iconify/react";

interface FeatureBlockProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureBlock({ icon, title, description }: FeatureBlockProps) {
  return (
    <div className="flex flex-col items-center px-10 py-8 bg-[#0A0A0A] rounded-lg">
      <div className="mb-6 p-4 bg-[#E20074]/10 rounded-full">
        <Icon icon={icon} className="text-[#E20074]" width="56" height="56" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white text-center">{title}</h3>
      <p className="text-gray-300 text-center text-base leading-relaxed">{description}</p>
    </div>
  );
}
