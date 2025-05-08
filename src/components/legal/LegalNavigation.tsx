import Link from "next/link";
import { Icon } from "@iconify/react";

interface LegalNavigationProps {
  currentPage: "terms" | "privacy" | "disclaimer";
}

export default function LegalNavigation({ currentPage }: LegalNavigationProps) {
  const pages = [
    { id: "terms", title: "Terms of Service", icon: "mdi:file-document-outline" },
    { id: "privacy", title: "Privacy Policy", icon: "mdi:shield-lock-outline" },
    { id: "disclaimer", title: "Disclaimer", icon: "mdi:alert-circle-outline" },
  ];

  const currentIndex = pages.findIndex((page) => page.id === currentPage);
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  // Use the current page's icon for the divider
  const dividerIcon = pages[currentIndex].icon;

  return (
    <>
      {/* Breadcrumb */}
      <div className="flex items-center gap-3 mb-8">
        <Link 
          href="/legal" 
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <Icon icon="mdi:home-outline" className="w-4 h-4" />
          <span>Legal</span>
        </Link>
        <Icon icon="mdi:chevron-right" className="w-4 h-4 text-white/40" />
        <div className="flex items-center gap-2 text-white">
          <Icon icon={pages[currentIndex].icon} className="w-4 h-4 text-[#e20074]" />
          <span>{pages[currentIndex].title}</span>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-2 pt-2">
        {prevPage ? (
          <Link
            href={`/legal/${prevPage.id}`}
            className="group flex items-center gap-3 text-white hover:text-[#e20074] transition-colors"
          >
            <Icon
              icon="mdi:chevron-left"
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            />
            <div className="space-y-1">
              <div className="text-sm text-white/60">Previous</div>
              <div className="font-medium">{prevPage.title}</div>
            </div>
          </Link>
        ) : (
          <div></div>
        )}

        {nextPage ? (
          <Link
            href={`/legal/${nextPage.id}`}
            className="group flex items-center gap-3 text-white hover:text-[#e20074] transition-colors"
          >
            <div className="text-right space-y-1">
              <div className="text-sm text-white/60">Next</div>
              <div className="font-medium">{nextPage.title}</div>
            </div>
            <Icon
              icon="mdi:chevron-right"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        ) : (
          <div></div>
        )}
      </div>

      {/* Custom Divider */}
      <div className="relative flex items-center justify-center my-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#e20074] to-transparent" />
        <span className="absolute bg-[#121212] px-2">
          <Icon icon={dividerIcon} className="w-6 h-6 text-[#e20074]" />
        </span>
      </div>
    </>
  );
} 