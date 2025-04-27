<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	let isMobileMenuOpen = false;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

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

			if (isMobileMenuOpen) toggleMobileMenu();
		}
	}

	function scrollToTop(event) {
		event.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
		if (isMobileMenuOpen) toggleMobileMenu();
	}
</script>

<!-- Skip to main content link for keyboard users -->
<a 
	href="#main-content" 
	class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#e20074] focus:text-white focus:rounded"
>
	Skip to main content
</a>

<header class="sticky top-0 z-50 bg-[#222] py-6 text-lg text-white shadow-md shadow-black/10">
	<div class="container mx-auto px-5">
		<nav class="flex items-center md:items-center">
			<!-- Left side on tablet/desktop, centered on mobile -->
			<div class="flex flex-1 justify-center sm:justify-start">
				<div class="flex flex-col items-center md:flex-row md:items-center md:space-x-6">
					<!-- Logo -->
					<div class="flex items-center">
						<a href="/">
							<img src="/images/pwrirl_logo.svg" alt="PowerIRL Logo" class="h-10 w-auto" />
						</a>
					</div>
					<!-- Desktop Menu (hidden on tablet and below) -->
					<ul class="hidden space-x-6 md:flex">
						<li>
							<button
								on:click={scrollToTop}
								class="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 font-medium transition-all hover:bg-[#e20074]/10 hover:text-[#e20074] focus:outline-none focus:ring-2 focus:ring-[#e20074] focus:ring-offset-2 focus:ring-offset-[#222]"
							>
								<Icon icon="mdi:home" width="20" height="20" class="text-[#e20074]" />
								<span>Home</span>
							</button>
						</li>
						<li>
							<button
								on:click={() => scrollToSection('features')}
								class="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 font-medium transition-all hover:bg-[#e20074]/10 hover:text-[#e20074] focus:outline-none focus:ring-2 focus:ring-[#e20074] focus:ring-offset-2 focus:ring-offset-[#222]"
							>
								<Icon icon="mdi:star" width="20" height="20" class="text-[#e20074]" />
								<span>Features</span>
							</button>
						</li>
						<li>
							<button
								on:click={() => scrollToSection('pricing')}
								class="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 font-medium transition-all hover:bg-[#e20074]/10 hover:text-[#e20074] focus:outline-none focus:ring-2 focus:ring-[#e20074] focus:ring-offset-2 focus:ring-offset-[#222]"
							>
								<Icon icon="mdi:tag" width="20" height="20" class="text-[#e20074]" />
								<span>Pricing</span>
							</button>
						</li>
					</ul>
					<!-- Hamburger Menu Icon (visible on tablet and below, below logo) -->
					<div class="mt-2 flex justify-center md:hidden">
						<button class="cursor-pointer hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#e20074] focus:ring-offset-2 focus:ring-offset-[#222] rounded-md" on:click={toggleMobileMenu} aria-label="Toggle mobile menu" aria-expanded={isMobileMenuOpen}>
							<Icon icon="game-icons:hamburger-menu" width="32" height="32" color="#e20074" />
						</button>
					</div>
				</div>
			</div>
			<!-- Avatar on the far right -->
			<div class="flex items-center {isMobileMenuOpen ? 'hidden md:flex' : 'flex'}">
				<a
					href="https://billing.stripe.com/p/login/cN25mb4HCbBR02k4gg"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Go to user dashboard"
					class="transition-opacity hover:opacity-80 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e20074] focus:ring-offset-2 focus:ring-offset-[#222]"
				>
					<Icon icon="carbon:user-avatar-filled" width="38" height="38" color="#e20074" />
				</a>
			</div>
		</nav>
	</div>
</header>

<!-- Mobile Menu (visible when toggled on tablet and below) -->
{#if isMobileMenuOpen}
	<div
		class="fixed inset-0 z-40 flex cursor-pointer items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden"
		on:click|self={toggleMobileMenu}
		on:keydown={(e) => e.key === 'Escape' && toggleMobileMenu()}
		role="dialog"
		aria-modal="true"
		aria-label="Mobile menu"
		tabindex="0"
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
	>
		<div
			class="relative mx-4 w-full max-w-md cursor-pointer overflow-hidden rounded-xl bg-gradient-to-b from-[#1a1a1a] to-[#121212] shadow-2xl"
			in:scale={{ duration: 300, start: 0.95 }}
			out:scale={{ duration: 200, start: 1 }}
		>
			<!-- Background pattern -->
			<div class="absolute inset-0">
				<div
					class="absolute inset-0 bg-[linear-gradient(45deg,#ffffff_1px,transparent_1px),linear-gradient(-45deg,#ffffff_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.02]"
				></div>
				<div
					class="absolute inset-0 bg-gradient-to-b from-transparent via-[#e20074]/5 to-transparent"
				></div>
			</div>

			<!-- Menu content -->
			<div class="relative pt-12">
				<!-- Close button -->
				<button
					class="absolute top-3 right-2 cursor-pointer rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#e20074] focus:text-white"
					on:click={toggleMobileMenu}
					aria-label="Close mobile menu"
				>
					<Icon icon="mdi:close" width="24" height="24" />
				</button>

				<!-- Menu items -->
				<div class="p-6">
					<ul class="space-y-2">
						<li>
							<button
								class="group flex w-full cursor-pointer items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10 focus:outline-none focus:ring-2 focus:ring-[#e20074]"
								on:click={scrollToTop}
							>
								<Icon
									icon="mdi:home"
									width="24"
									height="24"
									class="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
								/>
								<span class="font-medium text-white">Home</span>
							</button>
						</li>
						<li>
							<button
								class="group flex w-full cursor-pointer items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10 focus:outline-none focus:ring-2 focus:ring-[#e20074]"
								on:click={() => scrollToSection('features')}
							>
								<Icon
									icon="mdi:star"
									width="24"
									height="24"
									class="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
								/>
								<span class="font-medium text-white">Features</span>
							</button>
						</li>
						<li>
							<button
								class="group flex w-full cursor-pointer items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10 focus:outline-none focus:ring-2 focus:ring-[#e20074]"
								on:click={() => scrollToSection('pricing')}
							>
								<Icon
									icon="mdi:tag"
									width="24"
									height="24"
									class="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
								/>
								<span class="font-medium text-white">Pricing</span>
							</button>
						</li>
					</ul>

					<!-- Quick actions -->
					<div class="mt-8 space-y-4">
						<a
							href="https://billing.stripe.com/p/login/cN25mb4HCbBR02k4gg"
							class="flex w-full items-center justify-center gap-2 rounded-lg bg-[#e20074] px-4 py-3 font-medium text-white transition-colors hover:bg-[#c70067] focus:outline-none focus:ring-2 focus:ring-white"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon icon="mdi:account" width="20" height="20" />
							<span>Go to Dashboard</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
