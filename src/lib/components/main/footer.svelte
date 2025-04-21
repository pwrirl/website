<script>
	import Icon from '@iconify/svelte';
	import { socials } from '$lib/data/socialicons';
</script>

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
				<!-- Social Icons -->
				<div class="flex justify-center space-x-4">
					{#each socials as social}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-400 transition-colors hover:text-[#e20074]"
							title={social.name}
						>
							<Icon icon={social.icon} width="24" height="24" />
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
			<p>© 2025 PowerIRL an SDS Nexus, LLC Company. All rights reserved.</p>
		</div>
	</div>
</footer>
