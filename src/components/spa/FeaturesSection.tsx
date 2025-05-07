"use client";

import FeatureBlock from "./FeatureBlock";

export default function FeaturesSection() {
  const features = [
    {
      icon: "mdi:cellphone",
      title: "True Mobile Freedom",
      description:
        "We offer native support for both Android & iPhone. Stream from anywhere with mobile apps to your home PC or our cloud infrastructure.",
    },
    {
      icon: "mdi:shield-check",
      title: "Zero Drop Guarantee",
      description:
        "Cloud OBS technology ensures your stream never drops, even with unstable connections. Automatic failover and backup systems keep you live 24/7.",
    },
    {
      icon: "mdi:cube-outline",
      title: "Enterprise-Grade Customization",
      description:
        "Full OBS control with custom overlays, alerts, and transitions. Unlike basic streaming services, we give you complete creative freedom with professional-grade tools.",
    },
    {
      icon: "mdi:star",
      title: "Partner Priority Support",
      description:
        "Our Partner Program offers special discounts. Get dedicated support, early access to features, sponsorships, and custom solutions tailored to your streaming needs.",
    },
    {
      icon: "mdi:hand-heart",
      title: "White Glove Service",
      description:
        "Every customer gets our premium treatment. From setup to ongoing support, our team handles everything with the care and attention your stream deserves.",
    },
    {
      icon: "mdi:laptop",
      title: "Universal Remote Control",
      description:
        "Control your stream from any device, yet also get complete control over your broadcast, even when you're away from your main setup.",
    },
  ];

  return (
    <section id="features" className="pt-24 pb-12 px-4 bg-[#121212]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">
              Professional Streaming Services
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]"></span>
          </h2>
          <p className="text-center text-white max-w-3xl mx-auto text-lg">
            PowerIRL provides everything you need for high-quality live
            streaming with no technical hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto">
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
