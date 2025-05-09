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
  tiktok: "simple-icons:tiktok",
  youtube: "mdi:youtube",
  discord: "mdi:discord",
  website: "mdi:web"
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#18181b] py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Our Sponsored Partners</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]" />
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Meet the creators we proudly sponsor and support!
          </p>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {partners.map((partner) => (
            <article key={partner.name} className="bg-[#23232b] rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e20074]">
              <div className="relative w-56 h-56 mb-6 rounded-full overflow-hidden border-4 border-[#e20074]">
                <Image
                  src={partner.image}
                  alt={partner.name + " profile"}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="text-xl font-bold text-white mb-4 mt-2 text-center group-hover:text-[#e20074] transition-colors">{partner.name}</h2>
              <div className="flex flex-wrap justify-center gap-3 mt-4 mb-6">
                {Object.entries(partner.social).map(([key, url]) =>
                  url ? (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#e20074] flex items-center justify-center transition-colors duration-200 hover:bg-white group">
                        <Icon icon={socialIcons[key as keyof typeof socialIcons]} className="text-white text-2xl group-hover:text-[#e20074] transition-colors duration-200" />
                      </div>
                    </a>
                  ) : null
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
} 