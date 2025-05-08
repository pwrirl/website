import PrimaryHeader from "@/components/layout/PrimaryHeader";
import PrimaryFooter from "@/components/layout/PrimaryFooter";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#18181b] text-white">
      <PrimaryHeader />
      <main className="flex-1 flex flex-col">{children}</main>
      <PrimaryFooter />
    </div>
  );
} 