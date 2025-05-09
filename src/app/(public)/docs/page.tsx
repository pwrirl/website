import DocsNav from "@/components/docs/DocsNav";
import { Icon } from "@iconify/react";
import Link from "next/link";

const docsSections = [
  {
    label: "Computer Software",
    icon: "mdi:desktop-mac",
    description: "Guides for OBS Studio, Meld Studio, and other desktop streaming tools.",
    href: "/docs/computer-software"
  },
  {
    label: "Mobile Apps",
    icon: "mdi:cellphone",
    description: "Setup and recommendations for iOS and Android streaming apps.",
    href: "/docs/mobile-apps"
  }
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#18181b] py-16">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/4 mb-8 lg:mb-0">
          <DocsNav />
        </aside>
        <section className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Documentation</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]" />
          </h1>
          <p className="text-gray-400 max-w-2xl mb-12">
            Comprehensive guides and tutorials for IRL streaming software. Select a tool from below to get started.
          </p>

          {/* Software Tools */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Documentation Sections</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {docsSections.map((section) => (
                <Link
                  key={section.label}
                  href={section.href}
                  className="group bg-[#23232b] rounded-2xl p-6 flex items-start gap-4 shadow-lg hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e20074]"
                >
                  <Icon icon={section.icon} className="text-4xl text-[#e20074] flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e20074] transition-colors">{section.label}</h3>
                    <p className="text-gray-400">{section.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 