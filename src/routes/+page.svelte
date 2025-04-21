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
		class="fixed right-8 bottom-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#e20074] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#c70067] hover:shadow-xl"
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
	/>
	<div
		class="dot-pattern animate-dots absolute top-0 left-0 z-[2] h-full w-full"
		style="background-image: radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px); 
		background-size: 16px 16px;"
	/>
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
		<div class="flex justify-center gap-4">
			<a
				href="/learn-more"
				class="rounded-md bg-[#e20074] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#c70067] sm:px-6 sm:py-3 sm:text-base"
				>Start Streaming</a
			>
			<a
				href="/sign-up"
				class="rounded-md border-2 border-white px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:px-6 sm:py-3 sm:text-base"
				>Book a Demo</a
			>
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
				class="group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#121212] hover:shadow-lg hover:shadow-[#e20074]/20 sm:p-8 md:order-1 md:col-span-1 lg:order-1 lg:col-span-1"
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
						class="w-full rounded-md bg-[#e20074] px-4 py-2 font-medium text-white transition-colors hover:bg-[#c70067] sm:px-6 sm:py-3"
					>
						Order Now
					</button>
				</div>
			</div>

			<!-- Pro Plan -->
			<div
				class="group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#121212] hover:shadow-lg hover:shadow-[#e20074]/20 sm:p-8 md:order-2 md:col-span-1 lg:order-3 lg:col-span-1"
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
						class="w-full rounded-md bg-[#e20074] px-4 py-2 font-medium text-white transition-colors hover:bg-[#c70067] sm:px-6 sm:py-3"
					>
						Order Now
					</button>
				</div>
			</div>

			<!-- Enterprise Plan (Advanced) -->
			<div
				class="group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#121212] hover:shadow-lg hover:shadow-[#e20074]/20 sm:p-8 md:order-3 md:col-span-2 lg:order-2 lg:col-span-1"
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
						class="w-full rounded-md bg-[#e20074] px-4 py-2 font-medium text-white transition-colors hover:bg-[#c70067] sm:px-6 sm:py-3"
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

	@keyframes gradient-x {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.animate-gradient-x {
		background-size: 200% 200%;
		animation: gradient-x 15s ease infinite;
	}

	.animate-dots {
		animation: moveBackground 8s linear infinite;
	}

	/* Add a second layer of dots for more depth */
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

	/* Custom radial gradient utility */
	.bg-gradient-radial {
		background-image: radial-gradient(
			circle at center,
			var(--tw-gradient-from) 0%,
			var(--tw-gradient-via) 65%,
			var(--tw-gradient-to) 100%
		);
	}
</style>
