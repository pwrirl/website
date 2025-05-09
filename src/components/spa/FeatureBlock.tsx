"use client";

import { Icon } from "@iconify/react";

interface FeatureBlockProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureBlock({ icon, title, description }: FeatureBlockProps) {
  return (
    <div className="flex flex-col items-center bg-[#23232b] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e20074]">
      <div className="mb-6">
        <Icon icon={icon} className="text-[#E20074]" width="56" height="56" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white text-center group-hover:text-[#e20074] transition-colors">{title}</h3>
      <p className="text-white text-center text-base leading-relaxed">{description}</p>
    </div>
  );
}
