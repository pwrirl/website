<script>
	import '../../app.css';
	import Header from '$lib/components/main/header.svelte';
	import Footer from '$lib/components/main/footer.svelte';

	let { data, children } = $props();

	// Add focus-visible polyfill to improve keyboard navigation
	import { onMount } from 'svelte';

	onMount(() => {
		// Add a class to the body when using keyboard navigation
		const handleFirstTab = (e) => {
			if (e.key === 'Tab') {
				document.body.classList.add('user-is-tabbing');
				window.removeEventListener('keydown', handleFirstTab);
			}
		};
		window.addEventListener('keydown', handleFirstTab);

		// Remove the class when using mouse
		const handleMouseDown = () => {
			document.body.classList.remove('user-is-tabbing');
		};
		window.addEventListener('mousedown', handleMouseDown);

		return () => {
			window.removeEventListener('keydown', handleFirstTab);
			window.removeEventListener('mousedown', handleMouseDown);
		};
	});
</script>

<div class="flex min-h-screen flex-col">
	<!-- Header -->
	<Header />
	<!-- Main content -->
	<main class="flex-grow">
		{@render children()}
	</main>
	<!-- Footer -->
	<Footer />
</div>

<style>
	/* Hide focus outlines for non-keyboard users */
	:global(body:not(.user-is-tabbing) *:focus) {
		outline: none !important;
		box-shadow: none !important;
	}

	:global(body:not(.user-is-tabbing) *:focus-visible) {
		outline: none !important;
		box-shadow: none !important;
	}

	/* Respect reduced motion preferences */
	@media (prefers-reduced-motion: reduce) {
		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}
</style>
