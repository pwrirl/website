import HardwareNav from "@/components/resources/ResourcesNav";
import { Icon } from "@iconify/react";
import Link from "next/link";

const infoBlocks = [
  {
    label: "Backpack Hardware",
    icon: "mdi:bag-personal",
    description: "Recommended backpacks, battery packs, and portable gear for IRL streaming on the go.",
    href: "/hardware/backpack-hardware"
  },
  {
    label: "Phone Hardware",
    icon: "mdi:cellphone",
    description: "Best phones, mounts, and accessories for mobile streaming setups.",
    href: "/hardware/phone-hardware"
  }
];

export default function HardwarePage() {
  return (
    <div className="min-h-screen bg-[#18181b] py-16">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/4 mb-8 lg:mb-0">
          <HardwareNav />
        </aside>
        <section className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Streaming Hardware</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]" />
          </h1>
          <p className="text-gray-400 max-w-2xl mb-8">
            Explore our recommended hardware for professional streaming. Select a category from the navigation to get started. (Affiliate links coming soon!)
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {infoBlocks.map((block) => (
              <Link
                key={block.label}
                href={block.href}
                className="group bg-[#23232b] rounded-2xl p-6 flex items-start gap-4 shadow-lg hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e20074]"
              >
                <Icon icon={block.icon} className="text-4xl text-[#e20074] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#e20074] transition-colors">{block.label}</h2>
                  <p className="text-gray-400">{block.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 