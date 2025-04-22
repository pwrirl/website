<script>
	export let videoSrc = '/videos/hero_video.mp4';
	export let posterImage = '/images/hero_video_fallback.jpg';
	import Icon from '@iconify/svelte';
	import { features } from '$lib/data/features';
	import { onMount } from 'svelte';
	let y;

	function scrollToSection(sectionId) {
		const section = document.getElementById(sectionId);
		if (section) {
			const headerOffset = 100;
			const elementPosition = section.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	$: showBackToTop = y > 500;
</script>

<svelte:window bind:scrollY={y} />

<!-- Back to Top Button -->
{#if showBackToTop}
	<button
		on:click={scrollToTop}
		class="fixed right-8 bottom-8 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#e20074] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#c70067] hover:shadow-xl"
		style="opacity: {Math.min((y - 500) / 250, 1)}; transform: scale({Math.min(
			(y - 500) / 250,
			1
		)})"
	>
		<Icon icon="mdi:chevron-up" width="28" height="28" />
	</button>
{/if}

<div
	class="relative flex h-[75vh] w-full items-center justify-center overflow-hidden sm:h-[50vh] md:h-[75vh]"
>
	<video
		autoplay
		loop
		muted
		playsinline
		poster={posterImage}
		class="absolute top-0 left-0 z-[1] h-full w-full transform object-cover"
		style="transform: scale(1.1) translateY({y * 0.2}px)"
		on:error={() => console.log('Video failed to load, showing poster image')}
	>
		<source src={videoSrc} type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<div
		class="absolute top-0 left-0 z-[2] h-full w-full bg-gradient-to-b from-[#e20074]/30 via-[#222]/80 to-[#222]/90"
	></div>
	<div class="dot-pattern animate-dots absolute top-0 left-0 z-[2] h-full w-full"></div>
	<div
		class="relative z-[3] max-w-[90%] p-8 text-center text-white"
		style="transform: translateY({y * -0.1}px)"
	>
		<h1 class="mb-4 text-3xl font-bold drop-shadow-lg sm:text-4xl md:text-5xl">
			Stream Anywhere with <span class="font-bold text-[#e20074]">PowerIRL</span>
		</h1>
		<p class="mb-8 text-xl drop-shadow sm:text-2xl">
			The only platform that combines cloud-based OBS with true mobile freedom. Whether you're
			streaming from your desktop or on the go, PowerIRL keeps you live with zero drops, full
			customization, and enterprise-grade reliability.
		</p>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<button
				on:click={() => scrollToSection('pricing')}
				class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#e20074] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#c70067] sm:w-auto sm:px-6 sm:py-3 sm:text-base"
			>
				<Icon icon="mdi:rocket-launch" width="20" height="20" />
				<span>Get Started</span>
			</button>
			<a
				href="https://discord.gg/KtfrPhdEvx"
				target="_blank"
				rel="noopener noreferrer"
				class="flex w-full items-center justify-center gap-2 rounded-md border-2 border-white px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-6 sm:py-3 sm:text-base"
			>
				<Icon icon="ic:baseline-discord" width="20" height="20" />
				<span>Join our Discord</span>
			</a>
		</div>
	</div>
</div>

<section
	id="features"
	class="bg-[#e20074] py-12 text-center text-2xl font-bold text-white md:text-4xl"
>
	<h2>Features</h2>
</section>

<section class="relative overflow-hidden bg-[#222] py-20 text-white">
	<!-- Background pattern -->
	<div class="absolute inset-0">
		<!-- Square grid pattern -->
		<div
			class="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(0deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.02]"
		></div>
	</div>

	<div class="relative container mx-auto px-5">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<div
					class="group relative flex flex-col items-center rounded-lg bg-[#121212]/80 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#121212] hover:shadow-lg hover:shadow-[#e20074]/20"
				>
					<!-- Card glow effect -->
					<div
						class="absolute inset-0 rounded-lg bg-[#e20074]/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
					></div>
					<div
						class="mb-4 rounded-full bg-[#e20074]/10 p-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#e20074]/20"
					>
						<Icon icon={feature.icon} width="32" height="32" color="#e20074" />
					</div>
					<h3 class="mb-2 text-xl font-bold">{feature.title}</h3>
					<p class="text-sm text-gray-300">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section
	id="pricing"
	class="bg-[#e20074] py-12 text-center text-2xl font-bold text-white md:text-4xl"
>
	<h2>Choose Your Plan</h2>
</section>

<section class="relative overflow-hidden bg-[#222] py-20 text-white">
	<!-- Background pattern -->
	<div class="absolute inset-0">
		<!-- Diagonal lines pattern -->
		<div
			class="absolute inset-0 bg-[linear-gradient(45deg,#e20074_1px,transparent_1px),linear-gradient(-45deg,#e20074_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.03]"
		></div>
		<!-- Gradient overlay -->
		<div
			class="absolute inset-0 bg-gradient-to-b from-transparent via-[#e20074]/5 to-transparent"
		></div>
	</div>

	<!-- Decorative shapes behind cards -->
	<div class="absolute inset-0">
		<!-- Large circle -->
		<div class="absolute top-1/4 -left-40 h-80 w-80 rounded-full bg-[#e20074]/5 blur-3xl"></div>
		<!-- Triangle -->
		<div class="absolute -right-20 bottom-1/4 h-40 w-40 rotate-45 bg-[#e20074]/5 blur-3xl"></div>
		<!-- Square -->
		<div class="absolute top-1/2 left-1/4 h-40 w-40 bg-[#e20074]/5 blur-3xl"></div>
	</div>

	<div class="relative container mx-auto px-5">
		<div class="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
			<!-- Basic Plan -->
			<div
				class="group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#121212] hover:shadow-lg hover:shadow-[#e20074]/20 sm:p-8"
			>
				<div
					class="absolute inset-0 rounded-lg bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></div>
				<div class="flex-grow">
					<h3 class="mb-4 text-xl font-bold sm:text-2xl">PowerOBS Basic</h3>
					<div class="mb-6">
						<span class="text-3xl font-bold sm:text-4xl">$59.99</span>
						<span class="text-gray-400">/month</span>
					</div>
					<ul class="mb-8 space-y-3 text-sm sm:space-y-4 sm:text-base">
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Free Setup</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>White Glove Service</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>24/7 Support via Discord</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>1080p/60FPS Streaming</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Basic Stream Overlays</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Mobile Streaming</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Cloud OBS Access</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Basic Analytics</span>
						</li>
					</ul>
				</div>
				<div class="relative">
					<button
						class="w-full cursor-pointer rounded-md bg-[#e20074] px-4 py-2 font-medium text-white transition-colors hover:bg-[#c70067] sm:px-6 sm:py-3"
					>
						Order Now
					</button>
				</div>
			</div>

			<!-- Premium Plan -->
			<div
				class="group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#121212] hover:shadow-lg hover:shadow-[#e20074]/20 sm:p-8"
			>
				<div
					class="absolute inset-0 rounded-lg bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></div>
				<div class="flex-grow">
					<h3 class="mb-4 text-xl font-bold sm:text-2xl">PowerOBS Premium</h3>
					<div class="mb-6">
						<span class="text-3xl font-bold sm:text-4xl">$119.99</span>
						<span class="text-gray-400">/month</span>
					</div>
					<ul class="mb-8 space-y-3 text-sm sm:space-y-4 sm:text-base">
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Everything in Basic</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Remote Desktop Control</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Custom Overlays & Alerts</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>1080p/60FPS Streaming</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Cloud Recording</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Advanced Stream Settings</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Scene Collections</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Priority Support</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Stream Analytics</span>
						</li>
					</ul>
				</div>
				<div class="relative">
					<button
						class="w-full cursor-pointer rounded-md bg-[#e20074] px-4 py-2 font-medium text-white transition-colors hover:bg-[#c70067] sm:px-6 sm:py-3"
					>
						Order Now
					</button>
				</div>
			</div>

			<!-- Advanced Plan -->
			<div
				class="group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#121212] hover:shadow-lg hover:shadow-[#e20074]/20 sm:p-8 md:col-span-2 lg:col-span-1"
			>
				<div
					class="absolute -top-1 -right-1 -bottom-1 -left-1 rounded-lg bg-gradient-to-r from-[#e20074] to-[#ff00a0] opacity-20 blur"
				></div>
				<!-- Ribbon -->
				<div class="absolute top-0 -right-2">
					<div class="relative">
						<div class="absolute -right-2 h-full w-2 bg-[#8a0046]"></div>
						<div class="relative bg-[#e20074] px-4 py-2 text-sm font-bold text-white shadow-lg">
							Best Value
						</div>
						<div class="absolute -right-2 -bottom-2 h-2 w-2 bg-[#8a0046]"></div>
					</div>
				</div>
				<div
					class="absolute inset-0 rounded-lg bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></div>
				<div class="flex-grow">
					<h3 class="mb-4 text-xl font-bold sm:text-2xl">PowerOBS Advanced</h3>
					<div class="mb-6">
						<span class="text-3xl font-bold sm:text-4xl">$169.99</span>
						<span class="text-gray-400">/month</span>
					</div>
					<ul class="mb-8 space-y-3 text-sm sm:space-y-4 sm:text-base">
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Everything in Basic</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Priority Support</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Delivered in 24 Hours</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Remote Desktop Access</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Unmetered Bandwidth</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Custom Stream Overlays</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Multi-Platform Streaming</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Advanced Analytics</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Stream Scheduling</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Custom Alerts & Notifications</span>
						</li>
					</ul>
				</div>
				<div class="relative">
					<button
						class="w-full cursor-pointer rounded-md bg-[#e20074] px-4 py-2 font-medium text-white transition-colors hover:bg-[#c70067] sm:px-6 sm:py-3"
					>
						Order Now
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<section
	id="endpoints"
	class="bg-[#e20074] py-12 text-center text-2xl font-bold text-white md:text-4xl"
>
	<h2>Endpoints</h2>
</section>

<section class="relative overflow-hidden bg-[#222] py-20 text-white">
	<!-- Background pattern -->
	<div class="absolute inset-0">
		<!-- Diagonal lines pattern -->
		<div
			class="absolute inset-0 bg-[linear-gradient(45deg,#e20074_1px,transparent_1px),linear-gradient(-45deg,#e20074_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.03]"
		></div>
		<!-- Gradient overlay -->
		<div
			class="absolute inset-0 bg-gradient-to-b from-transparent via-[#e20074]/5 to-transparent"
		></div>
	</div>

	<div class="relative container mx-auto px-5">
		<div class="grid gap-8 md:grid-cols-2">
			<!-- SRT/SRTLA Endpoint -->
			<div
				class="group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#121212] hover:shadow-lg hover:shadow-[#e20074]/20 sm:p-8"
			>
				<div
					class="absolute inset-0 rounded-lg bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></div>
				<div class="flex-grow">
					<div class="mb-4 flex items-center justify-center">
						<div
							class="rounded-full bg-[#e20074]/10 p-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#e20074]/20"
						>
							<Icon icon="mdi:cellphone-wireless" width="32" height="32" color="#e20074" />
						</div>
					</div>
					<h3 class="mb-4 text-center text-xl font-bold sm:text-2xl">SRT/SRTLA</h3>
					<div class="mb-6">
						<span class="text-3xl font-bold sm:text-4xl">$9.99</span>
						<span class="text-gray-400">/month</span>
					</div>
					<ul class="mb-8 space-y-3 text-sm sm:space-y-4 sm:text-base">
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Secure Reliable Transport for mobile streaming</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Optimized for Android & iOS devices</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Low latency streaming with error correction</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>AES encryption for secure transmission</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Jitter compensation for unstable networks</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Bandwidth optimization for mobile data</span>
						</li>
					</ul>
				</div>
				<div class="relative">
					<button
						class="w-full cursor-pointer rounded-md bg-[#e20074] px-4 py-2 font-medium text-white transition-colors hover:bg-[#c70067] sm:px-6 sm:py-3"
					>
						Order Now
					</button>
				</div>
			</div>

			<!-- RTMP Endpoint -->
			<div
				class="group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#121212] hover:shadow-lg hover:shadow-[#e20074]/20 sm:p-8"
			>
				<div
					class="absolute inset-0 rounded-lg bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></div>
				<div class="flex-grow">
					<div class="mb-4 flex items-center justify-center">
						<div
							class="rounded-full bg-[#e20074]/10 p-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#e20074]/20"
						>
							<Icon icon="mdi:desktop-classic" width="32" height="32" color="#e20074" />
						</div>
					</div>
					<h3 class="mb-4 text-center text-xl font-bold sm:text-2xl">RTMP</h3>
					<div class="mb-6">
						<span class="text-3xl font-bold sm:text-4xl">$9.99</span>
						<span class="text-gray-400">/month</span>
					</div>
					<ul class="mb-8 space-y-3 text-sm sm:space-y-4 sm:text-base">
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Industry-standard streaming protocol</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Compatible with all major streaming platforms</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>High-quality video delivery</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Stable and reliable streaming</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Perfect for desktop streaming</span>
						</li>
						<li class="flex items-center">
							<Icon icon="mdi:check" class="mr-2 text-white" width="24" height="24" />
							<span>Wide range of encoder support</span>
						</li>
					</ul>
				</div>
				<div class="relative">
					<button
						class="w-full cursor-pointer rounded-md bg-[#e20074] px-4 py-2 font-medium text-white transition-colors hover:bg-[#c70067] sm:px-6 sm:py-3"
					>
						Order Now
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes moveBackground {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 16px 16px;
		}
	}

	.animate-dots {
		animation: moveBackground 8s linear infinite;
	}

	/* Add a second layer of dots for more depth */
	.dot-pattern {
		background-image: radial-gradient(
			circle at center,
			rgba(255, 255, 255, 0.1) 1px,
			transparent 1px
		);
		background-size: 16px 16px;
	}

	.dot-pattern::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: radial-gradient(
			circle at center,
			rgba(255, 255, 255, 0.05) 1px,
			transparent 1px
		);
		background-size: 24px 24px;
		animation: moveBackground 12s linear infinite reverse;
		pointer-events: none;
	}
</style>
