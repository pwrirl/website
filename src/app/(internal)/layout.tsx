import { ReactNode } from "react";
import PrimaryFooter from "@/components/layout/PrimaryFooter";

export default function InternalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Internal header will go here */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-gray-900">PowerIRL Internal</span>
            </div>
            {/* Add navigation items here */}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <PrimaryFooter variant="internal" />
    </div>
  );
} 