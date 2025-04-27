<script>
	import '../../app.css';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { fade, scale } from 'svelte/transition';
	import { socials } from '$lib/data/socialIcons';
	import { onMount } from 'svelte';
	let isMobileMenuOpen = false;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
	
	// Add focus-visible polyfill to only show focus rings for keyboard navigation
	onMount(() => {
		// This script helps differentiate between keyboard and mouse focus
		window.addEventListener('mousedown', () => {
			document.body.classList.add('using-mouse');
		});
		
		window.addEventListener('keydown', (event) => {
			if (event.key === 'Tab') {
				document.body.classList.remove('using-mouse');
			}
		});
	});

	const navItems = [
		{
			title: 'Homepage',
			path: '/',
			icon: 'mdi:home'
		},
		{
			title: 'Legal',
			path: '/legal',
			icon: 'mdi:gavel'
		},
		{
			title: 'Terms of Service',
			path: '/legal/tos',
			icon: 'mdi:file-document'
		},
		{
			title: 'Disclaimer',
			path: '/legal/disclaimer',
			icon: 'mdi:alert-circle'
		},
		{
			title: 'Privacy Policy',
			path: '/legal/privacy',
			icon: 'mdi:shield-lock'
		}
	];
</script>

<!-- Skip to main content link for keyboard users -->
<a 
	href="#main-content" 
	class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#e20074] focus:text-white focus:rounded"
>
	Skip to main content
</a>



<div class="min-h-screen bg-[#222] text-white">
	<header class="sticky top-0 z-50 bg-[#222] py-6 text-lg text-white shadow-md shadow-black/10">
		<div class="container mx-auto px-5">
			<nav class="flex items-center justify-between">
				<!-- Logo -->
				<div class="flex items-center">
					<a href="/" class="flex items-center">
						<img src="/images/pwrirl_logo.svg" alt="PowerIRL Logo" class="h-10 w-auto" />
					</a>
				</div>

				<!-- Desktop Navigation -->
				<div class="hidden items-center space-x-6 md:flex">
					{#each navItems as item}
						<a
							href={item.path}
							class="group flex items-center space-x-2 text-sm font-medium transition-colors hover:text-[#e20074] focus:outline-none focus:ring-2 focus:ring-[#e20074] focus:ring-offset-2 focus:ring-offset-[#222] rounded-md {$page
								.url.pathname === item.path
								? 'text-[#e20074]'
								: 'text-gray-300'}"
							aria-current={$page.url.pathname === item.path ? 'page' : undefined}
						>
							<Icon
								icon={item.icon}
								class="h-5 w-5 transition-colors group-hover:text-[#e20074] {$page.url.pathname ===
								item.path
									? 'text-[#e20074]'
									: 'text-gray-300'}"
							/>
							<span class="hidden lg:inline">{item.title}</span>
						</a>
					{/each}
				</div>

				<!-- Mobile Menu Button -->
				<button 
					class="cursor-pointer hover:opacity-80 md:hidden focus:outline-none focus:ring-2 focus:ring-[#e20074] focus:ring-offset-2 focus:ring-offset-[#222] rounded-md" 
					on:click={toggleMobileMenu}
					aria-label="Toggle mobile menu"
					aria-expanded={isMobileMenuOpen}
				>
					<Icon icon="game-icons:hamburger-menu" width="32" height="32" color="#e20074" />
				</button>
			</nav>
		</div>
	</header>

	<!-- Mobile Menu Overlay -->
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
				<div
					class="absolute inset-0 bg-[url('/images/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center"
				></div>
				<div class="relative">
					<!-- Close button -->
					<button
						class="absolute top-4 right-4 cursor-pointer rounded-full bg-[#1a1a1a] p-2 hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#e20074]"
						on:click={toggleMobileMenu}
						aria-label="Close mobile menu"
					>
						<Icon icon="mdi:close" width="24" height="24" color="#e20074" />
					</button>

					<!-- Menu items -->
					<div class="flex flex-col space-y-1 p-6">
						{#each navItems as item}
							<a
								href={item.path}
								class="group flex items-center space-x-3 rounded-lg p-3 text-sm font-medium transition-colors hover:bg-[#2a2a2a] {$page
									.url.pathname === item.path
									? 'bg-[#2a2a2a] text-[#e20074]'
									: 'text-gray-300'}"
							>
								<Icon
									icon={item.icon}
									class="h-5 w-5 transition-colors group-hover:text-[#e20074] {$page.url
										.pathname === item.path
										? 'text-[#e20074]'
										: 'text-gray-300'}"
								/>
								<span>{item.title}</span>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}

	<main id="main-content">
		<slot />
	</main>

	<footer class="relative overflow-hidden bg-[#1a1a1a] py-20 text-white">
		<div class="container mx-auto px-5">
			<div class="flex flex-col items-center text-center">
				<!-- Company Info -->
				<div class="max-w-md space-y-4">
					<img src="/images/pwrirl_logo.svg" alt="PowerIRL Logo" class="mx-auto h-10 w-auto" />
					<p class="text-sm text-gray-300">
						The future of cloud-based streaming. Professional-grade tools for content creators.
					</p>
				</div>

				<!-- Social Icons -->
				<div class="mt-8 flex justify-center space-x-6">
					{#each socials as social}
						<a
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Follow us on ${social.name}`}
								class="group rounded-full bg-[#2a2a2a] p-3 transition-colors hover:bg-[#e20074] focus:outline-none focus:ring-2 focus:ring-[#e20074]"
							>
							<Icon
								icon={social.icon}
								class="h-5 w-5 text-gray-300 transition-colors group-hover:text-white"
							/>
						</a>
					{/each}
				</div>
			</div>

			<!-- Bottom Bar -->
			<div class="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-300">
				<!-- Legal Links -->
				<div class="mb-4 flex flex-wrap justify-center gap-6">
					{#each navItems.slice(1) as item}
						<a
							href={item.path}
							class="transition-colors hover:text-[#e20074] focus:outline-none focus:ring-2 focus:ring-[#e20074] focus:rounded-md p-1 {$page.url.pathname === item.path
								? 'text-[#e20074]'
								: 'text-gray-300'}"
							aria-current={$page.url.pathname === item.path ? 'page' : undefined}
						>
							{item.title}
						</a>
					{/each}
				</div>
				<p>© 2025 PowerIRL an SDS Nexus, LLC Company. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
	
	/* Hide focus outlines for mouse users but keep them for keyboard users */
	:global(body.using-mouse *:focus) {
		outline: none !important;
		box-shadow: none !important;
	}
	
	/* Add reduced motion preference support */
	@media (prefers-reduced-motion: reduce) {
		:global(*) {
			transition-duration: 0.001ms !important;
			animation-duration: 0.001ms !important;
		}
	}
</style>
