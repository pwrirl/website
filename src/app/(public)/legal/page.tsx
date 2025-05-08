import Link from "next/link";
import { Icon } from "@iconify/react";

export default function LegalPage() {
  const legalDocs = [
    {
      title: "Terms of Service",
      description: "Our terms and conditions for using PowerIRL's services.",
      icon: "mdi:file-document-outline",
      href: "/legal/terms",
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information.",
      icon: "mdi:shield-lock-outline",
      href: "/legal/privacy",
    },
    {
      title: "Disclaimer",
      description: "Important information about the use of our services.",
      icon: "mdi:alert-circle-outline",
      href: "/legal/disclaimer",
    },
  ];

  return (
    <div className="min-h-screen bg-[#18181b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Legal Information</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]"></span>
          </h1>
          <p className="text-center text-white max-w-3xl mx-auto text-lg">
            Important information about using PowerIRL's services. Please review
            these documents carefully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {legalDocs.map((doc) => (
            <Link
              key={doc.title}
              href={doc.href}
              className="group flex flex-col items-center justify-center bg-black rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 text-center focus:outline-none focus:ring-2 focus:ring-[#e20074]"
            >
              <div className="flex items-center justify-center mb-6">
                <span className="flex items-center justify-center w-20 h-20 rounded-full bg-[#e20074]/20">
                  <Icon icon={doc.icon} className="w-10 h-10 text-[#e20074]" />
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">
                {doc.title}
              </h2>
              <p className="text-white opacity-80 mb-0">
                {doc.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-black rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Need Help?
          </h2>
          <p className="text-white mb-6">
            If you have any questions about our legal documents or need
            clarification on any points, please join our Discord community.
          </p>
          <a
            href="https://discord.gg/powerirl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#e20074] hover:text-[#ff00a0] font-medium transition-colors"
          >
            <Icon icon="mdi:discord" className="w-5 h-5" />
            Join Discord
          </a>
        </div>
      </div>
    </div>
  );
} 