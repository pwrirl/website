<script>
	import '../app.css';
	import { SiTwitch, SiKick, SiYoutube, SiRumble, SiDiscord } from "@icons-pack/svelte-simple-icons";

	let { children } = $props();
</script>
<div class="flex flex-col min-h-screen">
	<header class="bg-[#222] text-white text-lg sticky top-0 z-10">
		<div class="container mx-auto py-6">
			<nav class="flex justify-between items-center px-5">
				<a href="/">
					<img src="/images/pwrirl_logo.svg" alt="PowerIRL Logo" />
				</a>
				<ul class="flex space-x-4">
					<li><a href="/">Home</a></li>
					<li><a href="/">Resources</a></li>
					<li><a href="/">Support</a></li>
				</ul>
				<div>
					<a href="/dashboard">
						<img src="https://via.placeholder.com/50" alt="User Avatar" />
					</a>
				</div>
			</nav>
		</div>
	</header>
	<main class="flex-grow">
		{@render children()}
	</main>
	
	<footer class="bg-[#222] text-white p-8">
		<div class="container mx-auto">
			<div class="flex flex-col md:flex-row justify-between items-center">
				<!-- Copyright - centered overall but aligned left in flex layout on desktop -->
				<div class="order-2 md:order-1 w-full md:w-auto">
					<p class="text-xs text-center md:text-left mt-4 md:mt-0">
						&copy; {new Date().getFullYear()} <span class="text-[#e20074] font-bold">PowerIRL</span> an SDS Nexus, LLC Company. All rights reserved.
					</p>
				</div>
				
				<!-- Social icons - centered on mobile, right-aligned on desktop -->
				<div class="order-1 md:order-2 flex space-x-4">
					<a href="https://twitch.tv/pwrirl" target="_blank" rel="noopener noreferrer">
						<SiTwitch color="#e20074" size={24} />
					</a>
					<a href="https://kick.com/pwrirl" target="_blank" rel="noopener noreferrer">
						<SiKick color="#e20074" size={24} />
					</a>
					<a href="https://youtube.com/pwrirl" target="_blank" rel="noopener noreferrer">
						<SiYoutube color="#e20074" size={24} />
					</a>
					<a href="https://rumble.com/pwrirl" target="_blank" rel="noopener noreferrer">
						<SiRumble color="#e20074" size={24} />
					</a>
					<a href="https://discord.gg/pwrirl" target="_blank" rel="noopener noreferrer">
						<SiDiscord color="#e20074" size={24} />
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>
