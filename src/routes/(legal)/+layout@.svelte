<script>
	import '../../app.css';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { fade, scale } from 'svelte/transition';
	import { socials } from '$lib/data/socialIcons';
	let isMobileMenuOpen = false;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

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
					<a
						href="/"
						class="text-sm font-medium transition-colors hover:text-[#e20074] {$page.url
							.pathname === '/'
							? 'text-[#e20074]'
							: 'text-gray-300'}"
					>
						Homepage
					</a>
					<a
						href="/legal"
						class="text-sm font-medium transition-colors hover:text-[#e20074] {$page.url
							.pathname === '/legal'
							? 'text-[#e20074]'
							: 'text-gray-300'}"
					>
						Legal
					</a>
					<a
						href="/legal/tos"
						class="text-sm font-medium transition-colors hover:text-[#e20074] {$page.url
							.pathname === '/legal/tos'
							? 'text-[#e20074]'
							: 'text-gray-300'}"
					>
						Terms of Service
					</a>
					<a
						href="/legal/disclaimer"
						class="text-sm font-medium transition-colors hover:text-[#e20074] {$page.url
							.pathname === '/legal/disclaimer'
							? 'text-[#e20074]'
							: 'text-gray-300'}"
					>
						Disclaimer
					</a>
					<a
						href="/legal/privacy"
						class="text-sm font-medium transition-colors hover:text-[#e20074] {$page.url
							.pathname === '/legal/privacy'
							? 'text-[#e20074]'
							: 'text-gray-300'}"
					>
						Privacy Policy
					</a>
				</div>

				<!-- Mobile Menu Button -->
				<button class="cursor-pointer hover:opacity-80 md:hidden" on:click={toggleMobileMenu}>
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
						class="absolute top-3 right-2 cursor-pointer rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
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
									class="group flex w-full cursor-pointer items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10 {$page
										.url.pathname === '/'
										? 'text-[#e20074]'
										: 'text-white'}"
									on:click={toggleMobileMenu}
								>
									<Icon
										icon="mdi:home"
										width="24"
										height="24"
										class="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
									/>
									<span class="font-medium text-white">Homepage</span>
								</a>
							</li>
							<li>
								<a
									href="/legal"
									class="group flex w-full cursor-pointer items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10 {$page
										.url.pathname === '/legal'
										? 'text-[#e20074]'
										: 'text-white'}"
									on:click={toggleMobileMenu}
								>
									<Icon
										icon="mdi:gavel"
										width="24"
										height="24"
										class="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
									/>
									<span class="font-medium text-white">Legal</span>
								</a>
							</li>
							<li>
								<a
									href="/legal/tos"
									class="group flex w-full cursor-pointer items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10 {$page
										.url.pathname === '/legal/tos'
										? 'text-[#e20074]'
										: 'text-white'}"
									on:click={toggleMobileMenu}
								>
									<Icon
										icon="mdi:file-document"
										width="24"
										height="24"
										class="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
									/>
									<span class="font-medium text-white">Terms of Service</span>
								</a>
							</li>
							<li>
								<a
									href="/legal/disclaimer"
									class="group flex w-full cursor-pointer items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10 {$page
										.url.pathname === '/legal/disclaimer'
										? 'text-[#e20074]'
										: 'text-white'}"
									on:click={toggleMobileMenu}
								>
									<Icon
										icon="mdi:alert-circle"
										width="24"
										height="24"
										class="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
									/>
									<span class="font-medium text-white">Disclaimer</span>
								</a>
							</li>
							<li>
								<a
									href="/legal/privacy"
									class="group flex w-full cursor-pointer items-center rounded-lg px-4 py-3 transition-all hover:bg-[#e20074]/10 {$page
										.url.pathname === '/legal/privacy'
										? 'text-[#e20074]'
										: 'text-white'}"
									on:click={toggleMobileMenu}
								>
									<Icon
										icon="mdi:shield-lock"
										width="24"
										height="24"
										class="mr-3 text-[#e20074] transition-transform group-hover:scale-110"
									/>
									<span class="font-medium text-white">Privacy Policy</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	{/if}

	<main class="container mx-auto px-5 py-12">
		<slot />
	</main>

	<footer class="relative overflow-hidden bg-[#1a1a1a] py-20 text-white">
		<!-- Background pattern -->
		<div class="absolute inset-0">
			<!-- Hexagonal pattern -->
			<div
				class="absolute inset-0 bg-[linear-gradient(120deg,#ffffff_1px,transparent_1px),linear-gradient(60deg,#ffffff_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.02]"
			></div>
			<!-- Gradient overlay -->
			<div
				class="absolute inset-0 bg-gradient-to-b from-transparent via-[#e20074]/5 to-transparent"
			></div>
		</div>

		<div class="relative container mx-auto px-5">
			<div class="flex flex-col items-center text-center">
				<!-- Company Info -->
				<div class="max-w-md space-y-4">
					<img src="/images/pwrirl_logo.svg" alt="PowerIRL Logo" class="mx-auto h-10 w-auto" />
					<p class="text-sm text-gray-400">
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
							class="text-gray-400 transition-colors hover:text-[#e20074]"
							aria-label={social.name}
						>
							<Icon icon={social.icon} width="24" height="24" />
						</a>
					{/each}
				</div>
			</div>

			<!-- Bottom Bar -->
			<div class="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
				<!-- Legal Links -->
				<div class="mb-4 flex flex-wrap justify-center gap-6">
					<a
						href="/legal"
						class="text-sm font-medium text-gray-400 transition-colors hover:text-[#e20074]"
					>
						Legal
					</a>
					<a
						href="/legal/tos"
						class="text-sm font-medium text-gray-400 transition-colors hover:text-[#e20074]"
					>
						Terms of Service
					</a>
					<a
						href="/legal/disclaimer"
						class="text-sm font-medium text-gray-400 transition-colors hover:text-[#e20074]"
					>
						Disclaimer
					</a>
					<a
						href="/legal/privacy"
						class="text-sm font-medium text-gray-400 transition-colors hover:text-[#e20074]"
					>
						Privacy Policy
					</a>
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
</style>
