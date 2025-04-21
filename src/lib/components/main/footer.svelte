<script>
	import SocialIcons from '$lib/components/main/SocialIcons.svelte';
</script>

<footer class="bg-[#222] p-8 text-white">
	<div class="container mx-auto">
		<div class="flex flex-col items-center justify-between md:flex-row">
			<!-- Copyright - centered overall but aligned left in flex layout on desktop -->
			<div class="order-2 w-full md:order-1 md:w-auto">
				<p class="mt-4 text-center text-xs md:mt-0 md:text-left">
					&copy; {new Date().getFullYear()} <span class="font-bold text-[#e20074]">PowerIRL</span> an
					SDS Nexus, LLC Company. All rights reserved.
				</p>
			</div>

			<!-- Social icons - centered on mobile, right-aligned on desktop -->
			<div class="order-1 flex space-x-4 md:order-2">
				<SocialIcons Color={'#e20074'} />
			</div>
		</div>
	</div>
</footer>
