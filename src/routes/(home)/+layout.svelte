<script>
	import '../../app.css';
	import Header from '$lib/components/main/header.svelte';
	import Footer from '$lib/components/main/footer.svelte';

	let { data, children } = $props();
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
