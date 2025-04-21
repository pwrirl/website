<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	let isMobileMenuOpen = false; // State to toggle mobile menu
	let scrollY;
	let isScrolled = false;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function scrollToSection(sectionId) {
		const section = document.getElementById(sectionId);
		if (section) {
			const headerOffset = 100; // Account for fixed header and some padding
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

	$: isScrolled = scrollY > 20;
</script>

<svelte:window bind:scrollY />

<header
	class="sticky top-0 z-50 bg-[#222] text-lg text-white shadow-md transition-all duration-300 ease-in-out {isScrolled
		? 'py-4 shadow-lg shadow-black/25'
		: 'py-4 shadow-black/10 md:py-8'}"
>
	<div class="container mx-auto px-5">
		<nav class="flex items-center md:items-center">
			<!-- Left side on tablet/desktop, centered on mobile -->
			<div class="flex flex-1 justify-center sm:justify-start">
				<div class="flex flex-col items-center md:flex-row md:items-center md:space-x-6">
					<!-- Logo -->
					<div class="flex items-center">
						<a href="/">
							<img
								src="/images/pwrirl_logo.svg"
								alt="PowerIRL Logo"
								class="transition-all duration-300 {isScrolled ? 'h-8 w-auto' : 'h-10 w-auto'}"
							/>
						</a>
					</div>
					<!-- Desktop Menu (hidden on tablet and below) -->
					<ul class="hidden space-x-6 md:flex">
						<li>
							<a
								href="/"
								on:click={scrollToTop}
								class="flex items-center gap-2 rounded-lg px-3 py-2 font-medium transition-all hover:bg-[#e20074]/10 hover:text-[#e20074]"
							>
								<Icon icon="mdi:home" width="20" height="20" class="text-[#e20074]" />
								<span>Home</span>
							</a>
						</li>
						<li>
							<button
								on:click={() => scrollToSection('features')}
								class="flex items-center gap-2 rounded-lg px-3 py-2 font-medium transition-all hover:bg-[#e20074]/10 hover:text-[#e20074]"
							>
								<Icon icon="mdi:star" width="20" height="20" class="text-[#e20074]" />
								<span>Features</span>
							</button>
						</li>
						<li>
							<button
								on:click={() => scrollToSection('pricing')}
								class="flex items-center gap-2 rounded-lg px-3 py-2 font-medium transition-all hover:bg-[#e20074]/10 hover:text-[#e20074]"
							>
								<Icon icon="mdi:tag" width="20" height="20" class="text-[#e20074]" />
								<span>Pricing</span>
							</button>
						</li>
					</ul>
					<!-- Hamburger Menu Icon (visible on tablet and below, below logo) -->
					<div class="mt-2 flex justify-center md:hidden">
						<button class="cursor-pointer hover:opacity-80" on:click={toggleMobileMenu}>
							<Icon icon="game-icons:hamburger-menu" width="32" height="32" color="#e20074" />
						</button>
					</div>
				</div>
			</div>
			<!-- Avatar on the far right -->
			<div class="flex items-center {isMobileMenuOpen ? 'hidden md:flex' : 'flex'}">
				<a
					href="https://client.pwrirl.com"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-opacity hover:opacity-80"
				>
					<Icon icon="carbon:user-avatar-filled" width="38" height="38" color="#e20074" />
				</a>
			</div>
		</nav>
		<!-- Mobile Menu (visible when toggled on tablet and below) -->
		{#if isMobileMenuOpen}
			<div
				class="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden"
				on:click|self={toggleMobileMenu}
				in:fade={{ duration: 200 }}
				out:fade={{ duration: 200 }}
			>
				<div
					class="relative mx-4 w-full max-w-md overflow-hidden rounded-xl bg-gradient-to-b from-[#1a1a1a] to-[#121212] shadow-2xl"
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
					<div class="relative">
						<!-- Close button -->
						<button
							class="absolute top-4 right-4 rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
							on:click={toggleMobileMenu}
						>
							<Icon icon="mdi:close" width="24" height="24" />
						</button>

						<!-- Menu items -->
						<div class="p-6">
							<ul class="space-y-2">
								<li>
									<a
										href="/"
										class="group flex items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10"
										on:click={scrollToTop}
									>
										<Icon
											icon="mdi:home"
											width="24"
											height="24"
											class="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
										/>
										<span class="font-medium">Home</span>
									</a>
								</li>
								<li>
									<button
										class="group flex w-full items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10"
										on:click={() => scrollToSection('features')}
									>
										<Icon
											icon="mdi:star"
											width="24"
											height="24"
											class="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
										/>
										<span class="font-medium">Features</span>
									</button>
								</li>
								<li>
									<button
										class="group flex w-full items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10"
										on:click={() => scrollToSection('pricing')}
									>
										<Icon
											icon="mdi:tag"
											width="24"
											height="24"
											class="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
										/>
										<span class="font-medium">Pricing</span>
									</button>
								</li>
							</ul>

							<!-- Quick actions -->
							<div class="mt-8 space-y-4">
								<a
									href="/dashboard"
									class="flex w-full items-center justify-center gap-2 rounded-lg bg-[#e20074] px-4 py-3 font-medium text-white transition-colors hover:bg-[#c70067]"
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
	</div>
</header>
