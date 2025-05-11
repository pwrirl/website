"use client";
import DocsNav from "@/components/docs/DocsNav";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function NoALBSPage() {
  const [copied, setCopied] = useState(false);
  const kickConfig = `{
  "user": {
    "id": null,
    "name": "username",
    "passwordHash": null
  },
  "switcher": {
    "bitrateSwitcherEnabled": true,
    "onlySwitchWhenStreaming": false,
    "instantlySwitchOnRecover": true,
    "autoSwitchNotification": true,
    "retryAttempts": 5,
    "triggers": {
      "low": 450,
      "rtt": 1500,
      "offline": 400
    },
    "switchingScenes": {
      "normal": "LIVE",
      "low": "LOW",
      "offline": "BRB"
    },
    "streamServers": [
      {
        "streamServer": {
          "type": "SrtLiveServer",
          "statsUrl": "http://username.pwrirl.com:8181/stats",
          "publisher": "publish/live/feed1"
        },
        "name": "SLS",
        "priority": 0,
        "overrideScenes": null,
        "dependsOn": {
          "name": "nginx",
          "backupScenes": {
            "normal": "LIVE",
            "low": "LOW",
            "offline": "offline"
          }
        },
        "enabled": false
      },
      {
        "streamServer": {
          "type": "SrtLiveServer",
          "statsUrl": "http://username.pwrirl.com:8181/stats",
          "publisher": "live/stream/feed1"
        },
        "name": "PowerIRL",
        "priority": 0,
        "overrideScenes": null,
        "dependsOn": null,
        "enabled": true
      },
      {
        "streamServer": {
          "type": "Nginx",
          "statsUrl": "http://username.pwrirl.com:8080/stat",
          "application": "live",
          "key": "feed1"
        },
        "name": "nginx",
        "priority": 1,
        "overrideScenes": {
          "normal": "RTMP-LIVE",
          "low": "RTMP-LOW",
          "offline": "BRB"
        },
        "dependsOn": null,
        "enabled": true
      }
    ]
  },
  "software": {
    "type": "Obs",
    "host": "localhost",
    "password": "password",
    "port": 4455,
    "collections": {
      "twitch": {
        "profile": "twitch",
        "collection": "twitch_scenes"
      },
      "kick": {
        "profile": "kick",
        "collection": "kick_scenes"
      }
    }
  },
  "chat": {
    "platform": {
      "Kick": {
        "channelId": 1252565,
        "chatroomId": 1245548
      }
    },
    "username": "username",
    "admins": [
      "username", "modusername"
    ],
    "language": "EN",
    "prefix": "!",
    "enablePublicCommands": true,
    "enableModCommands": true,
    "enableAutoStopStreamOnHostOrRaid": true,
    "announceRaidOnAutoStop": true,
    "commands": {
      "Fix": {
        "permission": "Mod",
        "userPermissions": [
          "username"
        ],
        "alias": [
          "f"
        ]
      },
      "Switch": {
        "permission": "Mod",
        "userPermissions": null,
        "alias": [
          "ss"
        ]
      },
      "Bitrate": {
        "permission": null,
        "userPermissions": null,
        "alias": [
          "b"
        ]
      }
    }
  },
  "optionalScenes": {
    "starting": "PRESHOW",
    "ending": "ENDING",
    "privacy": "PRIVACY",
    "refresh": "REFRESH"
  },
  "optionalOptions": {
    "twitchTranscodingCheck": false,
    "twitchTranscodingRetries": 5,
    "twitchTranscodingDelaySeconds": 15,
    "offlineTimeout": null,
    "recordWhileStreaming": false,
    "switchToStartingSceneOnStreamStart": false,
    "switchFromStartingSceneToLiveScene": false
  }
}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(kickConfig);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#18181b] py-16">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row gap-12">
        <aside className="md:w-1/4 mb-8 md:mb-0">
          <DocsNav />
        </aside>
        <section className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">NOALBS Setup Guide</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]" />
          </h1>
          <p className="text-gray-400 max-w-2xl mb-12 text-lg">
            NOALBS (NGINX-OBS Automatic Low Bitrate Switching) is a tool that automatically switches scenes in OBS based on your stream's bitrate, helping you handle network drops and maintain a professional stream. This guide covers setup, configuration, and best practices for using NOALBS with your IRL streaming setup.
          </p>

          {/* Table of Contents */}
          <div className="bg-[#23232b] rounded-xl p-6 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <Icon icon="mdi:chevron-right" className="text-[#e20074]" />
                <a href="#features" className="hover:text-[#e20074] transition-colors">Features</a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Icon icon="mdi:chevron-right" className="text-[#e20074]" />
                <a href="#requirements" className="hover:text-[#e20074] transition-colors">System Requirements</a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Icon icon="mdi:chevron-right" className="text-[#e20074]" />
                <a href="#installation" className="hover:text-[#e20074] transition-colors">Installation</a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Icon icon="mdi:chevron-right" className="text-[#e20074]" />
                <a href="#configuration" className="hover:text-[#e20074] transition-colors">Configuration</a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Icon icon="mdi:chevron-right" className="text-[#e20074]" />
                <a href="#usage" className="hover:text-[#e20074] transition-colors">Usage & Best Practices</a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div id="features" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
            <div className="bg-[#23232b] rounded-xl p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Automatically switches OBS scenes based on stream bitrate</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Supports NGINX, MediaMTX, Belabox, RIST, Xiu, IrlHosting, and OBS sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Cross-platform: Windows, Mac, and Linux</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Customizable scene switching logic and backup scenes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Open source and actively maintained</span>
                </li>
              </ul>
            </div>
          </div>

          {/* System Requirements */}
          <div id="requirements" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">System Requirements</h2>
            <div className="bg-[#23232b] rounded-xl p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Windows, Mac, or Linux computer</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">OBS Studio v26 or newer</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Node.js (for running NOALBS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">NGINX-RTMP, MediaMTX, or other supported streaming server (for stats)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Installation */}
          <div id="installation" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Installation</h2>
            <div className="bg-[#23232b] rounded-xl p-6">
              <ol className="space-y-4 list-decimal list-inside">
                <li>
                  <span className="text-gray-300">Download or clone the NOALBS repository from <a href="https://github.com/NOALBS/nginx-obs-automatic-low-bitrate-switching" target="_blank" rel="noopener noreferrer" className="text-[#e20074] underline">GitHub</a>.</span>
                </li>
                <li>
                  <span className="text-gray-300">Install <b>Node.js</b> (if not already installed) from <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="text-[#e20074] underline">nodejs.org</a>.</span>
                </li>
                <li>
                  <span className="text-gray-300">Open a terminal in the NOALBS directory and run <code>npm install</code> to install dependencies.</span>
                </li>
                <li>
                  <span className="text-gray-300">Copy <code>config.json.example</code> to <code>config.json</code> and edit it to match your setup (see configuration below).</span>
                </li>
                <li>
                  <span className="text-gray-300">Start NOALBS with <code>npm start</code> or <code>node index.js</code>.</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Configuration */}
          <div id="configuration" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Configuration</h2>
            <div className="bg-[#23232b] rounded-xl p-6 space-y-10">
              {/* Kick Configuration */}
              <div>
                <h3 className="text-xl font-semibold text-[#e20074] mb-4">Kick Configuration</h3>
                <p className="text-gray-300 mb-4">
                  Below is a sample configuration for Kick. <b>Replace <code>username</code> with your Kick username and <code>password</code> with your OBS WebSocket password</b>. You can copy and paste this JSON into your <code>config.json</code> file.
                </p>
                <div className="relative">
                  <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 z-10 p-2 rounded-full bg-[#23232b] hover:bg-[#e20074] transition-colors"
                    title="Copy configuration"
                    aria-label="Copy configuration"
                  >
                    <Icon icon={copied ? "mdi:check" : "mdi:content-copy"} className={`text-xl ${copied ? "text-[#e20074]" : "text-gray-300"}`} />
                  </button>
                  <pre className="bg-[#18181b] text-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4">
                    {kickConfig}
                  </pre>
                </div>
              </div>
              {/* Twitch Configuration */}
              <div>
                <h3 className="text-xl font-semibold text-[#e20074] mb-4">Twitch Configuration</h3>
                <p className="text-gray-300 mb-4">
                  Below is a sample configuration for Twitch. <b>Replace <code>username</code> with your Twitch username and <code>password</code> with your OBS WebSocket password</b>. You can copy and paste this JSON into your <code>config.json</code> file.
                </p>
                <div className="relative">
                  <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 z-10 p-2 rounded-full bg-[#23232b] hover:bg-[#e20074] transition-colors"
                    title="Copy configuration"
                    aria-label="Copy configuration"
                  >
                    <Icon icon={copied ? "mdi:check" : "mdi:content-copy"} className={`text-xl ${copied ? "text-[#e20074]" : "text-gray-300"}`} />
                  </button>
                  <pre className="bg-[#18181b] text-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4">
                    {`{
  "user": {
    "id": null,
    "name": "username",
    "passwordHash": null
  },
  "switcher": {
    "bitrateSwitcherEnabled": true,
    "onlySwitchWhenStreaming": false,
    "instantlySwitchOnRecover": true,
    "autoSwitchNotification": true,
    "retryAttempts": 5,
    "triggers": {
      "low": 450,
      "rtt": 1500,
      "offline": 400
    },
    "switchingScenes": {
      "normal": "LIVE",
      "low": "LOW",
      "offline": "BRB"
    },
    "streamServers": [
      {
        "streamServer": {
          "type": "SrtLiveServer",
          "statsUrl": "http://username.pwrirl.com:8181/stats",
          "publisher": "live/stream/feed1"
        },
        "name": "PowerIRL",
        "priority": 0,
        "overrideScenes": null,
        "dependsOn": null,
        "enabled": true
      },
      {
        "streamServer": {
          "type": "Nginx",
          "statsUrl": "http://username.pwrirl.com:8080/stat",
          "application": "live",
          "key": "feed1"
        },
        "name": "PowerIRL",
        "priority": 1,
        "overrideScenes": {
          "normal": "RTMP-LIVE",
          "low": "RTMP-LOW",
          "offline": "BRB"
        },
        "dependsOn": null,
        "enabled": true
      }
    ]
  },
  "software": {
    "type": "Obs",
    "host": "localhost",
    "password": "password",
    "port": 4456,
    "collections": {
      "twitch": {
        "profile": "twitch",
        "collection": "twitch_scenes"
      },
      "kick": {
        "profile": "kick",
        "collection": "kick_scenes"
      }
    }
  },
  "chat": {
    "platform": "Twitch",
    "username": "username",
    "admins": ["username", "modusername"],
    "language": "EN",
    "prefix": "!",
    "enablePublicCommands": true,
    "enableModCommands": true,
    "enableAutoStopStreamOnHostOrRaid": true,
    "announceRaidOnAutoStop": true,
    "commands": {
      "Fix": {
        "permission": "Mod",
        "userPermissions": ["username"],
        "alias": ["f"]
      },
      "Switch": {
        "permission": "Mod",
        "userPermissions": null,
        "alias": ["ss"]
      },
      "Bitrate": {
        "permission": null,
        "userPermissions": null,
        "alias": ["b"]
      }
    }
  },
  "optionalScenes": {
    "starting": "STARTING",
    "ending": "ENDING",
    "privacy": "PRIVACY",
    "refresh": "REFRESH"
  },
  "optionalOptions": {
    "twitchTranscodingCheck": false,
    "twitchTranscodingRetries": 5,
    "twitchTranscodingDelaySeconds": 15,
    "offlineTimeout": null,
    "recordWhileStreaming": false,
    "switchToStartingSceneOnStreamStart": false,
    "switchFromStartingSceneToLiveScene": false
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Commands */}
          <div id="commands" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Commands</h2>
            <div className="bg-[#23232b] rounded-xl p-6 space-y-6">
              <p className="text-gray-300 mb-4">
                NOALBS supports chat commands for moderators and users to control certain actions. You can configure which users or mods have access to each command in your <code>config.json</code>.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="p-2 rounded border border-[#e20074]/20 shadow-sm hover:bg-[#e20074]/10 transition-colors"><b>!fix</b> or <b>!f</b>: Runs the fix command. Only users listed in <code>userPermissions</code> (e.g., <code>username</code>) or mods can use this command.</li>
                <li className="p-2 rounded border border-[#e20074]/20 shadow-sm hover:bg-[#e20074]/10 transition-colors"><b>!switch</b> or <b>!ss</b>: Switches scenes. Only mods can use this command.</li>
                <li className="p-2 rounded border border-[#e20074]/20 shadow-sm hover:bg-[#e20074]/10 transition-colors"><b>!bitrate</b> or <b>!b</b>: Shows the current bitrate. Anyone can use this command.</li>
                <li className="p-2 rounded border border-[#e20074]/20 shadow-sm hover:bg-[#e20074]/10 transition-colors"><b>!start</b>: Starts your stream.</li>
                <li className="p-2 rounded border border-[#e20074]/20 shadow-sm hover:bg-[#e20074]/10 transition-colors"><b>!stop</b>: Stops your stream.</li>
              </ul>
              <p className="text-gray-400 mt-4">
                <b>Note:</b> <code>userPermissions</code> must be set to the creator's username (or any usernames you want to allow). Any mod listed will be able to make changes with the specified commands. If <code>userPermissions</code> is <code>null</code>, only mods (or everyone, if <code>permission</code> is <code>null</code>) can use the command.
              </p>
              <p className="text-gray-400 mt-2">
                <b>Note:</b> Kick's API does not allow for a response in chat, so while the command works, users won't see a response in chat.
              </p>
            </div>
          </div>

          {/* Usage & Best Practices */}
          <div id="usage" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Usage & Best Practices</h2>
            <div className="bg-[#23232b] rounded-xl p-6 space-y-4">
              <ul className="space-y-2 text-gray-300">
                <li>• Start NOALBS before you begin streaming in OBS.</li>
                <li>• Make sure your OBS scenes (LIVE, LOW, BRB, etc.) are set up and named exactly as in your config.</li>
                <li>• Test scene switching by simulating a network drop or lowering your stream bitrate.</li>
                <li>• Use the <b>dependsOn</b> field in config for multi-server setups or backup scenes.</li>
                <li>• Ensure you are using the correct configuration for your platform (Kick or Twitch) as shown in the configuration sections above.</li>
                <li>• For help, visit the <a href="https://discord.gg/yourdiscordserver" target="_blank" rel="noopener noreferrer" className="text-[#e20074] underline">PowerIRL Discord</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 