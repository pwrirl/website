<script>
	import Icon from '@iconify/svelte';
	let isMobileMenuOpen = false; // State to toggle mobile menu

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<header class="sticky top-0 z-10 bg-[#222] py-4 text-lg text-white md:py-8">
	<div class="container mx-auto px-5">
		<nav class="flex items-center md:items-center">
			<!-- Left side on tablet/desktop, centered on mobile -->
			<div class="flex flex-1 justify-center sm:justify-start">
				<div class="flex flex-col items-center md:flex-row md:items-center md:space-x-6">
					<!-- Logo -->
					<div class="flex items-center">
						<a href="/">
							<img src="/images/pwrirl_logo.svg" alt="PowerIRL Logo" />
						</a>
					</div>
					<!-- Desktop Menu (hidden on tablet and below) -->
					<ul class="hidden space-x-4 md:flex">
						<li><a href="/">Home</a></li>
						<li><a href="/">Resources</a></li>
						<li><a href="/">Support</a></li>
					</ul>
					<!-- Hamburger Menu Icon (visible on tablet and below, below logo) -->
					<div class="mt-2 flex justify-center md:hidden">
						<button on:click={toggleMobileMenu}>
							<Icon icon="game-icons:hamburger-menu" width="32" height="32" color="#e20074" />
						</button>
					</div>
				</div>
			</div>
			<!-- Avatar on the far right -->
			<div class="self-start md:self-center">
				<a href="/dashboard">
					<Icon icon="carbon:user-avatar-filled" width="38" height="38" color="#e20074" />
				</a>
			</div>
		</nav>
		<!-- Mobile Menu (visible when toggled on tablet and below) -->
		{#if isMobileMenuOpen}
			<div class="bg-[#222] px-5 py-4 text-white md:hidden">
				<ul class="flex flex-col space-y-4">
					<li><a href="/" on:click={toggleMobileMenu}>Home</a></li>
					<li><a href="/" on:click={toggleMobileMenu}>Resources</a></li>
					<li><a href="/" on:click={toggleMobileMenu}>Support</a></li>
				</ul>
			</div>
		{/if}
	</div>
</header>
