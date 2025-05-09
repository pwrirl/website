import Link from "next/link";
import { Icon } from "@iconify/react";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <section className="prose prose-invert max-w-none">
        {children}
      </section>
    </main>
  );
} 