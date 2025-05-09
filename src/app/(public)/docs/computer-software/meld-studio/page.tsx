import DocsNav from "@/components/docs/DocsNav";
import { Icon } from "@iconify/react";

export default function MeldStudioPage() {
  return (
    <div className="min-h-screen bg-[#18181b] py-16">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row gap-12">
        <aside className="md:w-1/4 mb-8 md:mb-0">
          <DocsNav />
        </aside>
        <section className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Meld Studio Tutorial for IRL Streaming</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]" />
          </h1>
          <p className="text-gray-400 max-w-2xl mb-12 text-lg">
            A comprehensive guide to setting up Meld Studio for IRL streaming. Learn about hardware requirements, software configuration, and best practices for professional IRL broadcasts.
          </p>

          {/* Table of Contents */}
          <div className="bg-[#23232b] rounded-xl p-6 mb-12">
            <h2 className="text-xl font-semibold text-white mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#introduction" className="text-[#e20074] hover:text-[#e20074]/80">Introduction</a></li>
              <li><a href="#hardware" className="text-[#e20074] hover:text-[#e20074]/80">Hardware Requirements</a></li>
              <li><a href="#installation" className="text-[#e20074] hover:text-[#e20074]/80">Installing Meld Studio</a></li>
              <li><a href="#phone-setup" className="text-[#e20074] hover:text-[#e20074]/80">Phone Setup (SRT/SRTLA)</a></li>
              <li><a href="#pc-setup" className="text-[#e20074] hover:text-[#e20074]/80">PC Setup (RTMP)</a></li>
              <li><a href="#scenes" className="text-[#e20074] hover:text-[#e20074]/80">Setting Up Scenes and Sources</a></li>
              <li><a href="#audio" className="text-[#e20074] hover:text-[#e20074]/80">Configuring Audio</a></li>
              <li><a href="#settings" className="text-[#e20074] hover:text-[#e20074]/80">Streaming Settings</a></li>
              <li><a href="#best-practices" className="text-[#e20074] hover:text-[#e20074]/80">Best Practices</a></li>
            </ul>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <section id="introduction" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Meld Studio is a modern streaming software built for performance and ease of use. It's optimized for Apple Silicon and modern hardware, making it an excellent choice for IRL (In Real Life) streaming. This tutorial guides you through setting up Meld Studio for IRL streaming, covering hardware, software configuration, and best practices.
              </p>
            </section>

            <section id="hardware" className="scroll-mt-24 mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">Hardware Requirements</h2>
              <p className="text-gray-300 mb-4">Meld Studio is optimized for modern hardware, especially Apple Silicon. Here are the recommended specifications:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#23232b] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Minimum Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:camera" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Any smartphone or webcam with basic camera quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:laptop" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">macOS 11.0+ with Apple Silicon or Intel Mac</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:wifi" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Stable internet connection (3+ Mbps upload)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#23232b] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Recommended Setup</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:camera" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">High-quality smartphone camera or 1080p webcam</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:laptop" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Apple Silicon Mac (M1/M2/M3) with 8GB+ RAM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:wifi" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Fast internet (5+ Mbps upload) for HD streaming</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="installation" className="scroll-mt-24 mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">Installing Meld Studio</h2>
              <div className="bg-[#23232b] rounded-xl p-6">
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#e20074] text-white text-sm font-semibold flex-shrink-0">1</span>
                    <div>
                      <p className="text-gray-300">Download Meld Studio from <a href="https://meldstudio.com" className="text-[#e20074] hover:text-[#e20074]/80" target="_blank" rel="noopener noreferrer">meldstudio.com</a></p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#e20074] text-white text-sm font-semibold flex-shrink-0">2</span>
                    <div>
                      <p className="text-gray-300">Run the installer and follow the prompts to install</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#e20074] text-white text-sm font-semibold flex-shrink-0">3</span>
                    <div>
                      <p className="text-gray-300">Launch Meld Studio and complete the initial setup wizard</p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            <section id="phone-setup" className="scroll-mt-24 mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">Phone Setup (SRT/SRTLA)</h2>
              <p className="text-gray-300 mb-4">SRT (Secure Reliable Transport) and SRTLA (SRT with Latency Adaptation) are recommended for IRL streaming due to their low latency and reliability over unstable networks.</p>
              
              <div className="bg-[#23232b] rounded-xl p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Phone Requirements</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:cellphone" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">iOS 14+ or Android 8+ device with good camera</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:wifi" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Stable 4G/5G connection or WiFi (5+ Mbps upload)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:battery-charging" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Power bank for extended streaming</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Recommended Apps</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-medium mb-2">iOS Apps</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Icon icon="mdi:cellphone" className="text-[#e20074] mt-1 flex-shrink-0" />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-gray-300 font-medium">Moblin</span>
                                <span className="bg-[#e20074] text-white text-xs px-2 py-0.5 rounded-full">Recommended</span>
                              </div>
                              <p className="text-gray-400 text-sm">Simple RTMP streaming with basic editing tools and filters. Great for beginners.</p>
                              <a href="https://apps.apple.com/us/app/moblin/id6466745933" target="_blank" rel="noopener noreferrer" className="text-[#e20074] hover:text-[#e20074]/80 text-sm">Download on App Store</a>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon icon="mdi:cellphone" className="text-[#e20074] mt-1 flex-shrink-0" />
                            <div>
                              <span className="text-gray-300 font-medium">Larix Broadcaster</span>
                              <p className="text-gray-400 text-sm">Professional-grade SRT/SRTLA streaming with low latency. Supports RTMP, multiple cameras, and advanced settings.</p>
                              <a href="https://apps.apple.com/us/app/larix-broadcaster/id1042474385" target="_blank" rel="noopener noreferrer" className="text-[#e20074] hover:text-[#e20074]/80 text-sm">Download on App Store</a>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon icon="mdi:cellphone" className="text-[#e20074] mt-1 flex-shrink-0" />
                            <div>
                              <span className="text-gray-300 font-medium">PRISM Live Studio</span>
                              <p className="text-gray-400 text-sm">Full-featured RTMP streaming app with filters, effects, and multi-camera support. Great for creative streams.</p>
                              <a href="https://apps.apple.com/us/app/prism-live-streaming-app/id1319056339" target="_blank" rel="noopener noreferrer" className="text-[#e20074] hover:text-[#e20074]/80 text-sm">Download on App Store</a>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon icon="mdi:cellphone" className="text-[#e20074] mt-1 flex-shrink-0" />
                            <div>
                              <span className="text-gray-300 font-medium">Streamlabs Mobile</span>
                              <p className="text-gray-400 text-sm">A comprehensive streaming app with built-in alerts, overlays, and chat integration.</p>
                              <a href="https://apps.apple.com/us/app/streamlabs-live-streaming-app/id1294578643" target="_blank" rel="noopener noreferrer" className="text-[#e20074] hover:text-[#e20074]/80 text-sm">Download on App Store</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Android Apps</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Icon icon="mdi:cellphone" className="text-[#e20074] mt-1 flex-shrink-0" />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-gray-300 font-medium">IRL Pro</span>
                                <span className="bg-[#e20074] text-white text-xs px-2 py-0.5 rounded-full">Recommended</span>
                              </div>
                              <p className="text-gray-400 text-sm">Basic RTMP streaming app with essential camera controls. Perfect for beginners.</p>
                              <a href="https://play.google.com/store/apps/details?id=app.irlpro.android" target="_blank" rel="noopener noreferrer" className="text-[#e20074] hover:text-[#e20074]/80 text-sm">Download on Google Play</a>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon icon="mdi:cellphone" className="text-[#e20074] mt-1 flex-shrink-0" />
                            <div>
                              <span className="text-gray-300 font-medium">Larix Broadcaster</span>
                              <p className="text-gray-400 text-sm">Professional-grade SRT/SRTLA streaming with low latency. Supports RTMP, multiple cameras, and advanced settings.</p>
                              <a href="https://play.google.com/store/apps/details?id=com.wmspanel.larix_broadcaster" target="_blank" rel="noopener noreferrer" className="text-[#e20074] hover:text-[#e20074]/80 text-sm">Download on Google Play</a>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon icon="mdi:cellphone" className="text-[#e20074] mt-1 flex-shrink-0" />
                            <div>
                              <span className="text-gray-300 font-medium">PRISM Live Studio</span>
                              <p className="text-gray-400 text-sm">Full-featured RTMP streaming app with filters, effects, and multi-camera support. Great for creative streams.</p>
                              <a href="https://play.google.com/store/apps/details?id=com.prism.live" target="_blank" rel="noopener noreferrer" className="text-[#e20074] hover:text-[#e20074]/80 text-sm">Download on Google Play</a>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon icon="mdi:cellphone" className="text-[#e20074] mt-1 flex-shrink-0" />
                            <div>
                              <span className="text-gray-300 font-medium">Streamlabs Mobile</span>
                              <p className="text-gray-400 text-sm">A comprehensive streaming app with built-in alerts, overlays, and chat integration.</p>
                              <a href="https://play.google.com/store/apps/details?id=com.streamlabs&hl=en_US" target="_blank" rel="noopener noreferrer" className="text-[#e20074] hover:text-[#e20074]/80 text-sm">Download on Google Play</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">SRT/SRTLA Configuration</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:cog" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Stream URL: srt://your-server-ip:1935?streamid=stream_key</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:tune" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Enable SRTLA for better network adaptation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:video" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Set video bitrate to 2500-4000 Kbps</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="pc-setup" className="scroll-mt-24 mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">PC Setup (RTMP)</h2>
              <p className="text-gray-300 mb-4">RTMP is a traditional streaming protocol that works well for stable network connections.</p>
              
              <div className="bg-[#23232b] rounded-xl p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">RTMP Configuration</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:cog" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Stream URL: rtmp://your-server-ip:1935/live</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:key" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Stream Key: Your unique stream key</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Importing RTMP Streams</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:plus-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Add "Media Source" in Meld Studio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:link" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Enter the RTMP URL and stream key</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:settings" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Configure buffering settings for stability</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="scenes" className="scroll-mt-24 mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">Setting Up Scenes and Sources</h2>
              <p className="text-gray-300 mb-4">Scenes organize your streaming layout, and sources define what appears in each scene.</p>
              <div className="bg-[#23232b] rounded-xl p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Create a Scene</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:plus-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">In the "Scenes" panel, click "+" to add a new scene (e.g., "IRL Stream")</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Add Video Source</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:video" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">In the "Sources" panel, click "+" and select "Video Capture Device"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:camera" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Choose your camera (e.g., webcam or phone via capture card)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:settings" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Adjust resolution and frame rate (e.g., 1280x720 at 30 FPS)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Add Overlay Sources</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:image" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Add "Image" for logos or overlays</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:format-text" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Add "Text" for on-screen information like donation links</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="audio" className="scroll-mt-24 mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">Configuring Audio</h2>
              <p className="text-gray-300 mb-4">Clear audio is critical for IRL streaming.</p>
              <div className="bg-[#23232b] rounded-xl p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Add Audio Source</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:microphone" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">In "Sources", add "Audio Input Capture" and select your microphone</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Adjust Audio Levels</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:volume-high" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">In the "Audio Mixer", monitor levels (keep peaks below -6 dB)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon icon="mdi:tune" className="text-[#e20074] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Apply filters: Right-click the audio source, select "Filters", and add "Noise Suppression" and "Gain"</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="settings" className="scroll-mt-24 mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">Streaming Settings</h2>
              <div className="bg-[#23232b] rounded-xl p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Recommended Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-white font-medium mb-2">Output Settings</h4>
                        <ul className="space-y-1 text-gray-300">
                          <li>• Output Mode: Advanced</li>
                          <li>• Encoder: Apple VideoToolbox (for Apple Silicon) or x264</li>
                          <li>• Bitrate: 3500-6000 Kbps</li>
                          <li>• Keyframe Interval: 2</li>
                          <li>• CPU Usage: Veryfast</li>
                          <li>• Profile: High</li>
                          <li>• Tune: (none)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Video Settings</h4>
                        <ul className="space-y-1 text-gray-300">
                          <li>• Base Resolution: 1280x720</li>
                          <li>• Output Resolution: 1280x720</li>
                          <li>• Downscale Filter: Lanczos</li>
                          <li>• FPS: 30</li>
                        </ul>
                        <p className="text-gray-400 text-sm mt-2">
                          Note: While 1920x1080 at 60FPS is possible with stable internet and powerful hardware, 720p at 30FPS is recommended for IRL streaming due to better stability, lower bandwidth requirements, and improved battery life.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="best-practices" className="scroll-mt-24 mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">Best Practices</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#23232b] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Technical Setup</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:check-circle" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Run a test stream to check video and audio quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:battery-charging" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Ensure your device and power bank are charged</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:lightbulb" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Stream in well-lit areas or use portable LED lights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:shield" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Keep Meld Studio updated and whitelist it in your antivirus software</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#23232b] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Streaming Tips</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:chat" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Use a phone to monitor chat and interact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:shield" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Avoid sharing sensitive locations or personal details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="mdi:map-marker" className="text-[#e20074] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Research local streaming laws and regulations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="mt-12 p-6 bg-[#23232b] rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4">Need More Help?</h2>
              <p className="text-gray-300 mb-4">
                If you encounter any issues while streaming, join our <a href="https://discord.pwrirl.com" className="text-[#e20074] hover:text-[#e20074]/80" target="_blank" rel="noopener noreferrer">Discord server</a> and open a support ticket. Our community and support team are ready to help you resolve any streaming-related problems.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 