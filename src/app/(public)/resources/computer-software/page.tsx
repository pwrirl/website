import ResourcesNav from "@/components/resources/ResourcesNav";

export default function ComputerSoftwarePage() {
  return (
    <div className="min-h-screen bg-[#18181b] py-16">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row gap-12">
        <aside className="md:w-1/4 mb-8 md:mb-0">
          <ResourcesNav />
        </aside>
        <section className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Computer Software</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]" />
          </h1>
          <p className="text-gray-400 max-w-2xl mb-8">
            Our top picks for computer streaming software. Software recommendations and affiliate links coming soon!
          </p>
        </section>
      </div>
    </div>
  );
} 