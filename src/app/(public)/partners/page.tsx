import { Icon } from "@iconify/react";
import Image from "next/image";

const partners = [
  {
    name: "Saltygummibear",
    image: "/images/partners/saltygummibear.jpg",
    social: {
      kick: "https://kick.com/saltygummibear",
      twitch: "https://www.twitch.tv/saltygummibear",
      x: "https://x.com/saltigummybear",
      instagram: "https://www.instagram.com/saltygummibear/",
      tiktok: "https://www.tiktok.com/@saltygummibear",
      youtube: "https://www.youtube.com/channel/UCebe8GHGVnUNoI6WalwLyDQ",
      discord: "https://discord.gg/nsHkZcm63c",
      website: "https://linktr.ee/saltygummibear"
    }
  },
  {
    name: "Shortypie",
    image: "/images/partners/shortypie.jpg",
    social: {
      kick: "https://kick.com/shortypie",
      twitch: "https://www.twitch.tv/smolbites",
      x: "https://twitter.com/SHORTYPlE",
      instagram: "https://www.instagram.com/shortyple/",
      youtube: "https://youtube.com/@shortyple",
      tiktok: "https://vm.tiktok.com/J8fBLJv/",
      discord: "https://discord.gg/shorty",
      website: "https://linktr.ee/SHORTYPlE"
    }
  },
  {
    name: "ErectDictator",
    image: "/images/partners/erectdictator.jpg",
    social: {
      kick: "https://kick.com/erectdictator",
      twitch: "https://www.twitch.tv/erectdictator",
      x: "https://twitter.com/ErectDictator",
      instagram: "https://instagram.com/its_edmeg",
      youtube: "https://youtube.com/channel/UCQ3lX93cWmkRBlPSz7D2U8w",
      tiktok: "https://tiktok.com/@ed_meg",
      discord: "https://discord.gg/FYywNMvMUp",
      website: "https://linktr.ee/erectdictator"
    }
  },
  {
    name: "StrangelyLex",
    image: "/images/partners/strangelylex.jpg",
    social: {
      kick: "https://kick.com/strangelylex",
      twitch: "https://www.twitch.tv/strangelylex",
      x: "https://x.com/StrangelyLex",
      instagram: "https://www.tiktok.com/@bruhlexuh",
      youtube: "https://www.youtube.com/@strangelylex",
      tiktok: "https://www.tiktok.com/@bruhlexuh",
      discord: "https://discord.com/invite/w7X7A4zvpf",
      website: "https://lnk.bio/StrangelyLex"
    }
  }
];

const socialIcons = {
  kick: "simple-icons:kick",
  twitch: "mdi:twitch",
  x: "simple-icons:x",
  instagram: "mdi:instagram",
  tiktok: "mdi:tiktok",
  youtube: "mdi:youtube",
  discord: "mdi:discord",
  website: "mdi:web"
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#18181b] py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Our Sponsored Partners</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]"></span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Meet the creators we proudly sponsor and support!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-[#0A0A0A] rounded-2xl p-8 shadow-xl flex flex-col items-center">
              <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-[#e20074]">
                <Image
                  src={partner.image}
                  alt={partner.name + " profile"}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="text-xl font-bold text-white mb-4 text-center">{partner.name}</h2>
              <div className="flex flex-wrap justify-center gap-3 mb-2">
                {Object.entries(partner.social).map(([key, url]) =>
                  url ? (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#e20074] transition-colors text-2xl"
                      aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
                    >
                      <Icon icon={socialIcons[key as keyof typeof socialIcons]} />
                    </a>
                  ) : null
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 