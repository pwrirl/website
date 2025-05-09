import { Icon } from "@iconify/react";
import Image from "next/image";

export default function AboutPage() {
  const owners = [
    {
      name: "DanSizn",
      role: "Co-Owner",
      image: "/images/dansizn.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      social: {
        twitch: "https://twitch.tv/dansizn",
        kick: "https://kick.com/dansizn",
        twitter: "https://twitter.com/dansizn",
        youtube: "https://youtube.com/@dansizn",
        instagram: "https://instagram.com/dansizn",
        email: "mailto:dansizn@pwrirl.com"
      }
    },
    {
      name: "Seekaplayer",
      role: "Co-Owner",
      image: "/images/seekaplayer.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      social: {
        twitch: "https://twitch.tv/seekaplayer",
        kick: "https://kick.com/seekaplayer",
        rumble: "https://rumble.com/c/seekaplayer",
        youtube: "https://youtube.com/@seekaplayer",
        twitter: "https://twitter.com/seekaplayer",
        instagram: "https://instagram.com/seekaplayer_",
        email: "mailto:seekaplayer@pwrirl.com"
      }
    }
  ];

  const renderSocialLinks = (social: any) => {
    const links = [
      { key: 'twitch', icon: 'mdi:twitch', href: social.twitch },
      { key: 'kick', icon: 'simple-icons:kick', href: social.kick },
      { key: 'rumble', icon: 'simple-icons:rumble', href: social.rumble },
      { key: 'youtube', icon: 'mdi:youtube', href: social.youtube },
      { key: 'twitter', icon: 'simple-icons:x', href: social.twitter },
      { key: 'instagram', icon: 'mdi:instagram', href: social.instagram },
      { key: 'email', icon: 'mdi:email', href: social.email }
    ];

    return (
      <div className="flex gap-4">
        {links.map(({ key, icon, href }) => 
          href && (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#e20074] transition-colors text-2xl"
              aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
            >
              <Icon icon={icon} />
            </a>
          )
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#18181b] py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">About PowerIRL</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]" />
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Making professional streaming accessible to everyone through innovative solutions and dedicated support.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {owners.map((owner) => (
            <article key={owner.name} className="bg-[#0A0A0A] rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-[#e20074]">
                  <Image
                    src={owner.image}
                    alt={`${owner.name}'s profile picture`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{owner.name}</h2>
                <p className="text-[#e20074] font-medium mb-4">{owner.role}</p>
                <p className="text-gray-400 text-center mb-6">{owner.bio}</p>
                {/* Social Links */}
                {renderSocialLinks(owner.social)}
              </div>
            </article>
          ))}
        </section>

        <section className="bg-[#0A0A0A] rounded-2xl p-8 shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Company Information</h2>
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#e20074] mb-4">PowerIRL</h3>
              <p className="text-gray-400">
                A leading provider of professional streaming solutions and services.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#e20074] mb-4">Corporate Details</h3>
              <address className="text-gray-400 not-italic">
                <span className="font-bold text-white">SDS Nexus, LLC</span><br />
                30 N Gould St Ste R<br />
                <span>Sheridan, WY, 82801&nbsp;USA</span>
              </address>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 