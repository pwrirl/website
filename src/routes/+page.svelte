<script>
	export let videoSrc = '/videos/hero_video.mp4';
	export let posterImage = '/images/hero_video_fallback.jpg';
	import Icon from '@iconify/svelte';
</script>

<div
	class="relative flex h-[75vh] w-full items-center justify-center overflow-hidden sm:h-[50vh] md:h-[75vh]"
>
	<video
		autoplay
		loop
		muted
		playsinline
		poster={posterImage}
		class="absolute top-0 left-0 z-[1] h-full w-full object-cover"
		on:error={() => console.log('Video failed to load, showing poster image')}
	>
		<source src={videoSrc} type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<div class="absolute top-0 left-0 z-[2] h-full w-full bg-black/60"></div>
	<div class="relative z-[3] max-w-[90%] p-8 text-center text-white">
		<h1 class="mb-4 text-3xl font-bold drop-shadow-lg sm:text-4xl md:text-5xl">
			Elevate Your Streams with <span class="font-bold text-[#e20074]">PowerIRL</span>
		</h1>
		<p class="mb-8 text-xl drop-shadow sm:text-2xl">
			PowerIRL offers Desktop & IRL Streaming Solutions. PowerIRL is for any streamer who requires
			the right services to help them succeed. We've built everything for you. All you need to do is
			GO LIVE!
		</p>
		<div class="flex justify-center gap-4">
			<a
				href="/learn-more"
				class="rounded-md bg-[#e20074] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#c70067] sm:px-6 sm:py-3 sm:text-base"
				>Learn More</a
			>
			<a
				href="/sign-up"
				class="rounded-md border-2 border-white px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:px-6 sm:py-3 sm:text-base"
				>Sign Up</a
			>
		</div>
	</div>
</div>
<section class="bg-[#e20074] py-12 text-center text-2xl font-bold text-white md:text-4xl">
	<h2>Features</h2>
</section>
<section class="bg-[#222] text-white">
	<div class="container mx-auto px-5 py-20">
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
			<div class="border-opacity-2 rounded-md border border-gray-300 p-5">
				<Icon icon="mdi:home" />

				<h3 class="mb-2 text-xl font-bold">Feature 1</h3>
				<p>
					PowerIRL provides a comprehensive suite of tools for streamers, including overlays,
					alerts, and more.
				</p>
			</div>
			<div class="border-opacity-2 rounded-md border border-gray-300 p-5">
				<img
					src="/images/feature1.png"
					alt="Feature 1"
					class="mb-4 h-32 w-full rounded-md object-cover"
				/>
				<h3 class="mb-2 text-xl font-bold">Feature 1</h3>
				<p>
					PowerIRL provides a comprehensive suite of tools for streamers, including overlays,
					alerts, and more.
				</p>
			</div>
			<div class="border-opacity-2 rounded-md border border-gray-300 p-5">
				<img
					src="/images/feature1.png"
					alt="Feature 1"
					class="mb-4 h-32 w-full rounded-md object-cover"
				/>
				<h3 class="mb-2 text-xl font-bold">Feature 1</h3>
				<p>
					PowerIRL provides a comprehensive suite of tools for streamers, including overlays,
					alerts, and more.
				</p>
			</div>
			<div class="border-opacity-2 rounded-md border border-gray-300 p-5">
				<img
					src="/images/feature1.png"
					alt="Feature 1"
					class="mb-4 h-32 w-full rounded-md object-cover"
				/>
				<h3 class="mb-2 text-xl font-bold">Feature 1</h3>
				<p>
					PowerIRL provides a comprehensive suite of tools for streamers, including overlays,
					alerts, and more.
				</p>
			</div>
			<div class="border-opacity-2 rounded-md border border-gray-300 p-5">
				<img
					src="/images/feature1.png"
					alt="Feature 1"
					class="mb-4 h-32 w-full rounded-md object-cover"
				/>
				<h3 class="mb-2 text-xl font-bold">Feature 1</h3>
				<p>
					PowerIRL provides a comprehensive suite of tools for streamers, including overlays,
					alerts, and more.
				</p>
			</div>
			<div class="border-opacity-2 rounded-md border border-gray-300 p-5">
				<img
					src="/images/feature1.png"
					alt="Feature 1"
					class="mb-4 h-32 w-full rounded-md object-cover"
				/>
				<h3 class="mb-2 text-xl font-bold">Feature 1</h3>
				<p>
					PowerIRL provides a comprehensive suite of tools for streamers, including overlays,
					alerts, and more.
				</p>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="container mx-auto p-6">
		<h2 class="mb-4 text-2xl font-bold">Welcome to PowerIRL</h2>
		<p>
			PowerIRL is a community-driven platform that aims to provide resources and support for
			individuals interested in the world of powerlifting.
		</p>
		<p>Join us and be part of a growing community!</p>
	</div>
</section>
<section></section>
