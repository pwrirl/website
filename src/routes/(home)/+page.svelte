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
					style="opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease-out, transform 0.5s ease-out;"
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
				class="relative flex h-8 w-20 items-center rounded-full border-2 border-[#222] bg-[#222] px-1 transition-colors duration-300 focus:outline-none"
				aria-label="Toggle VPS/Dedicated"
			>
				<div
					class="absolute top-0 left-0 h-full w-full rounded-full transition-colors duration-300"
					style="background: {isDedicated
						? 'linear-gradient(90deg,#e20074 0%,#ff00a0 100%)'
						: '#121212'};"
				></div>
				<div
					class="relative z-10 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300"
					style="transform: translateX({isDedicated ? '48px' : '0'});"
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
				class="pricing-panel group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-8"
				style="opacity: 0; transform: translateX(-50px); transition: opacity 0.5s ease-out, transform 0.5s ease-out;"
			>
				<div class="pointer-events-auto flex-grow">
					<h3 class="mb-4 text-xl font-bold sm:text-2xl">PowerOBS Basic</h3>
					<div class="mb-6">
						<span class="text-3xl font-bold sm:text-4xl">${isDedicated ? '119.99' : '59.99'}</span>
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
							<span class="ml-2">1080p/60FPS Streaming</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Basic Stream Overlays</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Mobile Streaming</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Cloud OBS Access</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Basic Analytics</span>
						</li>
					</ul>
				</div>
				<div class="relative">
					<button
						class="w-full cursor-pointer rounded-md bg-[#e20074] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#c70067] sm:px-12 sm:py-4"
					>
						Order Now
					</button>
				</div>
			</div>

			<!-- Premium Plan -->
			<div
				bind:this={premiumPlan}
				class="pricing-panel group relative flex flex-col overflow-hidden rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-8"
				style="opacity: 0; transform: translateY(-20px); transition: opacity 0.5s ease-out, transform 0.5s ease-out;"
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
					<h3 class="mb-4 text-xl font-bold sm:text-2xl">PowerOBS Premium</h3>
					<div class="mb-6">
						<span class="text-3xl font-bold sm:text-4xl">${isDedicated ? '239.99' : '119.99'}</span>
						<span class="text-gray-400">/month</span>
					</div>
					<ul class="mb-8 space-y-3 text-sm sm:space-y-4 sm:text-base">
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Everything in Basic</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Remote Desktop Control</span>
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
							<span class="ml-2">1080p/60FPS Streaming</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Cloud Recording</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Advanced Stream Settings</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Scene Collections</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Priority Support</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Stream Analytics</span>
						</li>
					</ul>
				</div>
				<div class="relative">
					<button
						class="relative w-full cursor-pointer overflow-hidden rounded-md bg-gradient-to-r from-[#e20074] to-[#ff00a0] px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:scale-105 sm:px-12 sm:py-4"
					>
						<div class="relative z-10">Order Now</div>
						<div
							class="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
						></div>
					</button>
				</div>
			</div>

			<!-- Advanced Plan -->
			<div
				bind:this={advancedPlan}
				class="pricing-panel group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-8 md:col-span-2 lg:col-span-1"
				style="opacity: 0; transform: translateX(50px); transition: opacity 0.5s ease-out, transform 0.5s ease-out;"
			>
				<div class="pointer-events-auto flex-grow">
					<h3 class="mb-4 text-xl font-bold sm:text-2xl">PowerOBS Advanced</h3>
					<div class="mb-6">
						<span class="text-3xl font-bold sm:text-4xl">${isDedicated ? '339.99' : '169.99'}</span>
						<span class="text-gray-400">/month</span>
					</div>
					<ul class="mb-8 space-y-3 text-sm sm:space-y-4 sm:text-base">
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Everything in Basic</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Priority Support</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Delivered in 24 Hours</span>
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
							<span class="ml-2">Unmetered Bandwidth</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Custom Stream Overlays</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Multi-Platform Streaming</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Advanced Analytics</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Stream Scheduling</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Custom Alerts & Notifications</span>
						</li>
					</ul>
				</div>
				<div class="relative">
					<button
						class="w-full cursor-pointer rounded-md bg-[#e20074] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#c70067] sm:px-12 sm:py-4"
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
				class="pricing-panel group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-8"
				style="opacity: 0; transform: translateX(-50px); transition: opacity 0.5s ease-out, transform 0.5s ease-out;"
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
							<span class="ml-2">Secure Reliable Transport for mobile streaming</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Optimized for Android & iOS devices</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Low latency streaming with error correction</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">AES encryption for secure transmission</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Jitter compensation for unstable networks</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Bandwidth optimization for mobile data</span>
						</li>
					</ul>
				</div>
				<div class="relative">
					<button
						class="w-full cursor-pointer rounded-md bg-[#e20074] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#c70067] sm:px-12 sm:py-4"
					>
						Order Now
					</button>
				</div>
			</div>

			<!-- RTMP Endpoint -->
			<div
				bind:this={rtmpPlan}
				class="pricing-panel group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-8"
				style="opacity: 0; transform: translateX(50px); transition: opacity 0.5s ease-out, transform 0.5s ease-out;"
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
							<span class="ml-2">Industry-standard streaming protocol</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Compatible with all major streaming platforms</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">High-quality video delivery</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Stable and reliable streaming</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Perfect for desktop streaming</span>
						</li>
						<li class="flex items-center">
							<div class="checkmark-icon">
								<Icon icon="mdi:check" class="text-white" width="20" height="20" />
							</div>
							<span class="ml-2">Wide range of encoder support</span>
						</li>
					</ul>
				</div>
				<div class="relative">
					<button
						class="w-full cursor-pointer rounded-md bg-[#e20074] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#c70067] sm:px-12 sm:py-4"
					>
						Order Now
					</button>
				</div>
			</div>
		</div>

		<!-- PowerStreaming Plans -->
		<div class="mt-16 grid gap-8 md:grid-cols-1">
			<!-- PowerStreaming Basic -->
			<div
				bind:this={powerStreamingBasic}
				class="pricing-panel group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-8"
				style="opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease-out, transform 0.5s ease-out;"
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
						Perfect for content creators looking to expand their reach across multiple platforms
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
						class="w-full cursor-pointer rounded-md bg-[#e20074] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#c70067] sm:px-12 sm:py-4"
					>
						Get Started
					</button>
				</div>
			</div>

			<!-- PowerStreaming Pro -->
			<div
				bind:this={powerStreamingPro}
				class="pricing-panel group relative flex flex-col rounded-lg bg-[#121212]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#121212] hover:shadow-lg sm:p-8"
				style="opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease-out, transform 0.5s ease-out;"
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
						Ideal for professional streamers and businesses requiring maximum reach and advanced
						features
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
						class="w-full cursor-pointer rounded-md bg-[#e20074] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#c70067] sm:px-12 sm:py-4"
					>
						Get Started
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
</style>
