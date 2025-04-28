<script>
	export let videoSrc = '/videos/hero_video.mp4';
	export let posterImage = '/images/hero_video_fallback.jpg';
	import Icon from '@iconify/svelte';
	import { features } from '$lib/data/features';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	let y;
	let featureBoxes = [];
	let basicPlan;
	let advancedPlan;
	let premiumPlan;
	let srtPlan;
	let rtmpPlan;
	let powerStreamingBasic;
	let powerStreamingPro;
	let isDedicated = false;

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

	function handleScroll() {
		featureBoxes.forEach((box, index) => {
			const rect = box.getBoundingClientRect();
			const isVisible = rect.top < window.innerHeight * 0.8;
			if (isVisible) {
				box.style.opacity = '1';
				box.style.transform = 'translateY(0)';
			}
		});

		// Check PowerOBS plans visibility
		if (basicPlan) {
			const basicRect = basicPlan.getBoundingClientRect();
			const isBasicVisible = basicRect.top < window.innerHeight * 0.8;
			if (isBasicVisible) {
				basicPlan.style.opacity = '1';
				basicPlan.style.transform = 'translateX(0)';
			}
		}

		if (advancedPlan) {
			const advancedRect = advancedPlan.getBoundingClientRect();
			const isAdvancedVisible = advancedRect.top < window.innerHeight * 0.8;
			if (isAdvancedVisible) {
				advancedPlan.style.opacity = '1';
				advancedPlan.style.transform = 'translateX(0)';
			}
		}

		if (premiumPlan) {
			const premiumRect = premiumPlan.getBoundingClientRect();
			const isPremiumVisible = premiumRect.top < window.innerHeight * 0.8;
			if (isPremiumVisible) {
				premiumPlan.style.opacity = '1';
				premiumPlan.style.transform = 'translateY(0)';
			}
		}

		// Check Endpoints visibility
		if (srtPlan) {
			const srtRect = srtPlan.getBoundingClientRect();
			const isSrtVisible = srtRect.top < window.innerHeight * 0.8;
			if (isSrtVisible) {
				srtPlan.style.opacity = '1';
				srtPlan.style.transform = 'translateX(0)';
			}
		}

		if (rtmpPlan) {
			const rtmpRect = rtmpPlan.getBoundingClientRect();
			const isRtmpVisible = rtmpRect.top < window.innerHeight * 0.8;
			if (isRtmpVisible) {
				rtmpPlan.style.opacity = '1';
				rtmpPlan.style.transform = 'translateX(0)';
			}
		}

		// Check PowerStreaming plans visibility
		if (powerStreamingBasic) {
			const basicRect = powerStreamingBasic.getBoundingClientRect();
			const isBasicVisible = basicRect.top < window.innerHeight * 0.8;
			if (isBasicVisible) {
				powerStreamingBasic.style.opacity = '1';
				powerStreamingBasic.style.transform = 'translateY(0)';
			}
		}

		if (powerStreamingPro) {
			const proRect = powerStreamingPro.getBoundingClientRect();
			const isProVisible = proRect.top < window.innerHeight * 0.8;
			if (isProVisible) {
				powerStreamingPro.style.opacity = '1';
				powerStreamingPro.style.transform = 'translateY(0)';
			}
		}
	}

	$: showBackToTop = y > 500;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		// Initial check for visible elements
		handleScroll();
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
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
	id="main-content"
	class="relative flex h-[75vh] w-full items-center justify-center overflow-hidden sm:h-[50vh] md:h-[75vh]"
>
	<video
		autoplay
		loop
		muted
		playsinline
		poster={posterImage}
		aria-label="PowerIRL streaming platform demonstration video"
		title="PowerIRL streaming platform demonstration"
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
			PowerIRL combines cloud-based OBS with true mobile freedom. Whether you're streaming from your
			desktop or on the go, PowerIRL keeps you live with stream drop protection, full customization,
			and enterprise-grade reliability.
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
	class="bg-[#e20074] py-16 text-center text-2xl font-bold text-white md:text-4xl"
>
	<h2>Features</h2>
</section>

<section class="relative overflow-hidden bg-[#222] py-20 text-white">
	<!-- Background pattern -->
	<div class="pointer-events-none absolute inset-0">
		<!-- Square grid pattern -->
		<div
			class="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(0deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.02]"
		></div>
	</div>

	<div class="relative container mx-auto px-5">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<div
					bind:this={featureBoxes[featureBoxes.length]}
					class="group relative flex min-h-[320px] flex-col items-center rounded-lg bg-[#121212]/80 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-10"
					style="opacity: 0; transform: translateY(20px);"
				>
					<div
						class="mb-6 rounded-full bg-[#e20074]/10 p-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#e20074]/20"
					>
						<Icon icon={feature.icon} width="40" height="40" color="#e20074" />
					</div>
					<h3 class="mb-4 text-2xl font-bold">{feature.title}</h3>
					<p class="text-base leading-relaxed text-gray-300">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section
	id="pricing"
	class="bg-[#e20074] py-16 text-center text-2xl font-bold text-white md:text-4xl"
>
	<h2>PowerOBS Plans</h2>
</section>

<section class="relative overflow-hidden bg-[#222] py-20 text-white">
	<!-- Background pattern -->
	<div class="pointer-events-none absolute inset-0">
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
	<div class="pointer-events-none absolute inset-0">
		<!-- Large circle -->
		<div class="absolute top-1/4 -left-40 h-80 w-80 rounded-full bg-[#e20074]/5 blur-3xl"></div>
		<!-- Triangle -->
		<div class="absolute -right-20 bottom-1/4 h-40 w-40 rotate-45 bg-[#e20074]/5 blur-3xl"></div>
		<!-- Square -->
		<div class="absolute top-1/2 left-1/4 h-40 w-40 bg-[#e20074]/5 blur-3xl"></div>
	</div>

	<div class="relative container mx-auto px-5">
		<!-- Toggle Switch -->
		<div class="mb-12 flex items-center justify-center gap-4" in:fly={{ y: -50, duration: 500 }}>
			<span
				class="cursor-pointer text-lg font-semibold transition-colors duration-300"
				style="color: {isDedicated ? '#a1a1aa' : '#fff'}"
				on:click={() => {
					if (isDedicated) isDedicated = false;
				}}
			>
				VPS
			</span>
			<button
				on:click={() => (isDedicated = !isDedicated)}
				class="relative flex h-7 w-14 items-center rounded-full border-2 border-[#222] bg-[#222] px-1 transition-colors duration-300 focus:outline-none"
				aria-label="Toggle VPS/Dedicated"
			>
				<div
					class="absolute top-0 left-0 h-full w-full rounded-full transition-colors duration-300"
					style="background: {isDedicated
						? 'linear-gradient(90deg,#e20074 0%,#ff00a0 100%)'
						: '#121212'};"
				></div>
				<div
					class="relative z-10 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300"
					style="transform: translateX({isDedicated ? '26px' : '0'});"
				></div>
			</button>
			<span
				class="cursor-pointer text-lg font-semibold transition-colors duration-300"
				style="color: {isDedicated ? '#fff' : '#a1a1aa'}"
				on:click={() => {
					if (!isDedicated) isDedicated = true;
				}}
			>
				Dedicated
			</span>
		</div>

		<div class="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
			<!-- Basic Plan -->
			<div
				bind:this={basicPlan}
				class="group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-8"
				style="opacity: 0; transform: translateX(-50px);"
			>
				<div class="pointer-events-auto flex-grow">
					<h3 class="mb-2 text-xl font-bold sm:text-2xl">PowerOBS Basic</h3>
					<p class="mb-4 text-sm text-gray-400">
						{isDedicated ? 'Dedicated Server' : 'Virtual Private Server'}
					</p>
					<div class="mb-6">
						<span class="text-3xl font-bold sm:text-4xl">${isDedicated ? '99.99' : '59.99'}</span>
						<span class="text-gray-400">/month</span>
					</div>
					<ul class="mb-8 space-y-3 text-sm sm:space-y-4 sm:text-base">
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Free Setup</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">White Glove Service</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">24/7 Support via Discord</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Powered by Nvidia GPU</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">1080P/60FPS Streaming</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">1 Endpoint (SRT/SRTLA or RTMP)</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Basic Overlays/Alerts</span>
						</li>
						{#if isDedicated}
							<li class="flex items-center">
								<div class="checkmark-icon">
									<Icon icon="mdi:check" class="text-white" width="20" height="20" />
								</div>
								<span class="ml-2">Remote Desktop Access</span>
							</li>
						{/if}
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">1 Streaming Destination (Multi-Streaming Add-On)</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Optimized for Mobile Streaming</span>
						</li>
						{#if !isDedicated}
							<li class="flex items-center">
								<div class="checkmark-icon">
									<Icon icon="mdi:check" class="text-white" width="20" height="20" />
								</div>
								<span class="ml-2">Dedicated Edition Available</span>
							</li>
						{/if}
					</ul>
				</div>
				<p class="mb-4 text-center text-xs text-gray-400">
					Servers are typically deployed within 24 hours
				</p>
				<div class="relative">
					<a
						href={isDedicated
							? 'https://buy.stripe.com/5kA5nQcdwd3v11edQX'
							: 'https://buy.stripe.com/6oE03w1ySgfH6ly4gg'}
						target="_blank"
						rel="noopener noreferrer"
						class="block"
					>
						<button
							class="w-full cursor-pointer rounded-md bg-[#e20074] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#c70067] sm:px-12 sm:py-4"
						>
							Order Now
						</button>
					</a>
				</div>
			</div>

			<!-- Premium Plan -->
			<div
				bind:this={premiumPlan}
				class="group relative flex flex-col overflow-hidden rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-8"
				style="opacity: 0; transform: translateY(-20px);"
			>
				<!-- Corner Ribbon -->
				<div class="absolute top-[22px] right-[-58px] z-10 rotate-45">
					<div class="relative w-[200px]">
						<div
							class="bg-gradient-to-r from-[#e20074] to-[#ff00a0] py-2 text-center text-sm font-bold text-white shadow-lg"
						>
							POPULAR
						</div>
						<div
							class="animate-shimmer absolute inset-0 bg-white/10 bg-gradient-to-r from-transparent via-white/20 to-transparent"
						></div>
					</div>
				</div>
				<div class="pointer-events-auto flex-grow">
					<h3 class="mb-4 text-xl font-bold sm:text-2xl">PowerOBS Advanced</h3>
					<p class="mb-4 text-sm text-gray-400">
						{isDedicated ? 'Dedicated Server' : 'Semi-Bare Metal'}
					</p>
					<div class="mb-6">
						<span class="text-3xl font-bold sm:text-4xl">${isDedicated ? '139.99' : '99.99'}</span>
						<span class="text-gray-400">/month</span>
					</div>
					<ul class="mb-8 space-y-3 text-sm sm:space-y-4 sm:text-base">
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Free Setup</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">White Glove Service</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">24/7 Support via Discord</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Powered by Nvidia GPU</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">1080P/60FPS Streaming</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">1 Endpoints (SRT/SRTLA and RTMP)</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">5 Streaming Destinations (Via Plugin*)</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Custom Overlays & Alerts</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Remote Desktop Access</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Advanced Stream Settings</span>
						</li>
					</ul>
				</div>
				<p class="mb-4 text-center text-xs text-gray-400">
					Servers are typically deployed within 24 hours
				</p>
				<div class="relative">
					<a
						href={isDedicated
							? 'https://buy.stripe.com/28o03wb9s0gJ6ly6ou'
							: 'https://buy.stripe.com/eVag2u91k2oRcJW149'}
						target="_blank"
						rel="noopener noreferrer"
						class="block"
					>
						<button
							class="relative w-full cursor-pointer overflow-hidden rounded-md bg-gradient-to-r from-[#e20074] to-[#ff00a0] px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:scale-105 sm:px-12 sm:py-4"
						>
							<div class="relative z-10">Order Now</div>
							<div
								class="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
							></div>
						</button>
					</a>
				</div>
			</div>

			<!-- Advanced Plan -->
			<div
				bind:this={advancedPlan}
				class="group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-8 md:col-span-2 lg:col-span-1"
				style="opacity: 0; transform: translateX(50px);"
			>
				<div class="pointer-events-auto flex-grow">
					<h3 class="mb-4 text-xl font-bold sm:text-2xl">PowerOBS Premium</h3>
					<p class="mb-4 text-sm text-gray-400">
						{isDedicated ? 'Dedicated Server' : 'Semi-Bare Metal'}
					</p>
					<div class="mb-6">
						<span class="text-3xl font-bold sm:text-4xl">${isDedicated ? '189.99' : '129.99'}</span>
						<span class="text-gray-400">/month</span>
					</div>
					<ul class="mb-4 space-y-3 text-sm sm:space-y-4 sm:text-base">
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Free Setup</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">White Glove Service</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">24/7 Support via Discord</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Powered by Nvidia GPU</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">1080P/60FPS Streaming</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">3 Endpoints (SRT/SRTLA and RTMP)</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">10 Streaming Destinations (Via Plugin*)</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Custom Overlays & Alerts</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Remote Desktop Access</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Advanced Stream Settings</span>
						</li>
					</ul>
				</div>
				<p class="mb-4 text-center text-xs text-gray-400">
					Servers are typically deployed within 24 hours
				</p>
				<div class="relative">
					<a
						href={isDedicated
							? 'https://buy.stripe.com/cN2dUm2CW0gJ9xK6ox'
							: 'https://buy.stripe.com/6oE6rU6TcaVn9xKcMU'}
						target="_blank"
						rel="noopener noreferrer"
						class="block"
					>
						<button
							class="w-full cursor-pointer rounded-md bg-[#e20074] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#c70067] sm:px-12 sm:py-4"
						>
							Order Now
						</button>
					</a>
				</div>
			</div>
		</div>
		<!-- Custom Project Panel -->
		<div class="mt-8 flex justify-center">
			<div
				class="group relative flex w-full max-w-2xl flex-col items-center rounded-lg bg-[#121212]/80 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-8"
			>
				<div class="mb-4 flex items-center justify-center">
					<div class="rounded-full bg-[#e20074]/10 p-4">
						<Icon icon="ic:baseline-discord" width="40" height="40" class="text-[#e20074]" />
					</div>
				</div>
				<h3 class="mb-2 text-center text-2xl font-bold text-white">Custom Project</h3>
				<p class="mb-6 text-center text-gray-300">
					Need something more powerful, a custom solution, or help with a special event? Contact us
					and our team will work with you to deliver exactly what you need.
				</p>
				<a href="https://discord.gg/KtfrPhdEvx" target="_blank" rel="noopener noreferrer">
					<button
						class="cursor-pointer rounded-md bg-[#e20074] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#c70067]"
					>
						Connect Us
					</button>
				</a>
			</div>
		</div>
	</div>
</section>

<section
	id="endpoints"
	class="bg-[#e20074] py-16 text-center text-2xl font-bold text-white md:text-4xl"
>
	<h2>Endpoints & PowerStreaming</h2>
</section>

<section class="relative overflow-hidden bg-[#222] py-20 text-white">
	<!-- Background pattern -->
	<div class="pointer-events-none absolute inset-0">
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
				bind:this={srtPlan}
				class="group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-8"
				style="opacity: 0; transform: translateX(-50px);"
			>
				<div class="pointer-events-auto flex-grow">
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
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">High-quality streaming with Secure Reliable Transport (SRT)</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2"
								>Optimized for mobile and desktop devices (Android, iOS, and more)</span
							>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Ultra-low latency (sub-second) with error correction</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">AES-128 encryption for secure streaming</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Adaptive streaming for unstable networks and mobile data</span>
						</li>
					</ul>
				</div>
				<div class="relative">
					<a
						href="https://buy.stripe.com/8wM2bEcdw0gJaBO7sv"
						target="_blank"
						rel="noopener noreferrer"
						class="block"
					>
						<button
							class="w-full cursor-pointer rounded-md bg-[#e20074] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#c70067] sm:px-12 sm:py-4"
						>
							Order Now
						</button>
					</a>
				</div>
			</div>

			<!-- RTMP Endpoint -->
			<div
				bind:this={rtmpPlan}
				class="group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-8"
				style="opacity: 0; transform: translateX(50px);"
			>
				<div class="pointer-events-auto flex-grow">
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
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Industry-standard RTMP for legacy streaming compatibility</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Supports major platforms like Twitch and Kick</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">High-quality video up to 1080p</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Ideal for desktop streaming with OBS and other encoders</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Broad compatibility with a wide range of encoders</span>
						</li>
					</ul>
				</div>
				<div class="relative">
					<a
						href="https://buy.stripe.com/28o9E64L4gfH11eeUY"
						target="_blank"
						rel="noopener noreferrer"
						class="block"
					>
						<button
							class="w-full cursor-pointer rounded-md bg-[#e20074] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#c70067] sm:px-12 sm:py-4"
						>
							Order Now
						</button>
					</a>
				</div>
			</div>

			<!-- PowerStreaming Basic -->
			<div
				bind:this={powerStreamingBasic}
				class="group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-8"
				style="opacity: 0; transform: translateY(20px);"
			>
				<div class="pointer-events-auto flex-grow">
					<div class="mb-4 flex items-center justify-center">
						<div
							class="rounded-full bg-[#e20074]/10 p-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#e20074]/20"
						>
							<Icon icon="mdi:chart-timeline-variant" width="32" height="32" color="#e20074" />
						</div>
					</div>
					<h3 class="mb-4 text-center text-xl font-bold sm:text-2xl">PowerStreaming Basic</h3>
					<p class="mb-6 text-left text-gray-300">
						Stream seamlessly to up to 5 platforms simultaneously. Perfect for creators looking to
						expand their reach across multiple channels with ease and reliability.
					</p>
					<div class="mb-6">
						<span class="text-3xl font-bold sm:text-4xl">$4.99</span>
						<span class="text-gray-400">/month</span>
					</div>
					<ul class="mb-8 space-y-3 text-sm sm:space-y-4 sm:text-base">
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Stream to 5 different platforms simultaneously</span>
						</li>
					</ul>
				</div>
				<div class="relative">
					<button
						class="w-full cursor-not-allowed rounded-md bg-[#292929] px-8 py-3 text-lg font-medium text-white sm:px-12 sm:py-4"
						disabled
					>
						Coming Soon
					</button>
				</div>
			</div>

			<!-- PowerStreaming Pro -->
			<div
				bind:this={powerStreamingPro}
				class="group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-8"
				style="opacity: 0; transform: translateY(20px);"
			>
				<div class="pointer-events-auto flex-grow">
					<div class="mb-4 flex items-center justify-center">
						<div
							class="rounded-full bg-[#e20074]/10 p-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#e20074]/20"
						>
							<Icon icon="mdi:chart-timeline-variant" width="32" height="32" color="#e20074" />
						</div>
					</div>
					<h3 class="mb-4 text-center text-xl font-bold sm:text-2xl">PowerStreaming Pro</h3>
					<p class="mb-6 text-left text-gray-300">
						Amplify your presence by streaming to up to 10 platforms at once. Ideal for advanced
						users and brands aiming to maximize audience engagement across a wide range of channels.
					</p>
					<div class="mb-6">
						<span class="text-3xl font-bold sm:text-4xl">$9.99</span>
						<span class="text-gray-400">/month</span>
					</div>
					<ul class="mb-8 space-y-3 text-sm sm:space-y-4 sm:text-base">
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Stream to 10 different platforms simultaneously</span>
						</li>
					</ul>
				</div>
				<div class="relative">
					<button
						class="w-full cursor-not-allowed rounded-md bg-[#292929] px-8 py-3 text-lg font-medium text-white sm:px-12 sm:py-4"
						disabled
					>
						Coming Soon
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
		pointer-events: none;
	}

	/* Add a second layer of dots for more depth */
	.dot-pattern {
		background-image: radial-gradient(
			circle at center,
			rgba(255, 255, 255, 0.1) 1px,
			transparent 1px
		);
		background-size: 16px 16px;
		pointer-events: none;
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

	/* Custom checkmark style */
	.checkmark-icon {
		background-color: #e20074;
		border-radius: 50%;
		padding: 2px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
	}

	@keyframes shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	.animate-shimmer {
		animation: shimmer 2.5s infinite;
		pointer-events: none;
	}

	/* Add consistent hover effect for all pricing and feature blocks */
	.pricing-panel {
		transition: all 500ms ease;
		min-height: 220px;
		transform: translateY(0);
		will-change: transform;
	}

	.pricing-panel:hover {
		transform: scale(1.05);
		background-color: rgb(18, 18, 18);
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}

	.pricing-panel .icon-container {
		transition: all 300ms ease;
	}

	.pricing-panel:hover .icon-container {
		transform: scale(1.1);
		background-color: rgba(226, 0, 116, 0.2);
	}
</style>
