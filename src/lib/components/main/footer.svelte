<script>
	import Icon from '@iconify/svelte';
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
		<div class="grid gap-12 md:grid-cols-4">
			<!-- Company Info -->
			<div class="space-y-4">
				<img src="/images/pwrirl_logo.svg" alt="PowerIRL Logo" class="h-10 w-auto" />
				<p class="text-sm text-gray-400">
					The future of cloud-based streaming. Professional-grade tools for content creators.
				</p>
				<!-- Social Icons -->
				<div class="flex space-x-4">
					<a href="#" class="text-gray-400 transition-colors hover:text-[#e20074]">
						<Icon icon="mdi:twitter" width="24" height="24" />
					</a>
					<a href="#" class="text-gray-400 transition-colors hover:text-[#e20074]">
						<Icon icon="mdi:instagram" width="24" height="24" />
					</a>
					<a href="#" class="text-gray-400 transition-colors hover:text-[#e20074]">
						<Icon icon="mdi:youtube" width="24" height="24" />
					</a>
					<a href="#" class="text-gray-400 transition-colors hover:text-[#e20074]">
						<Icon icon="mdi:discord" width="24" height="24" />
					</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-4 text-lg font-bold">Quick Links</h3>
				<ul class="space-y-2">
					<li><a href="/" class="text-gray-400 transition-colors hover:text-white">Home</a></li>
					<li>
						<a href="/features" class="text-gray-400 transition-colors hover:text-white">Features</a
						>
					</li>
					<li>
						<a href="/pricing" class="text-gray-400 transition-colors hover:text-white">Pricing</a>
					</li>
					<li>
						<a href="/support" class="text-gray-400 transition-colors hover:text-white">Support</a>
					</li>
				</ul>
			</div>

			<!-- Resources -->
			<div>
				<h3 class="mb-4 text-lg font-bold">Resources</h3>
				<ul class="space-y-2">
					<li><a href="/blog" class="text-gray-400 transition-colors hover:text-white">Blog</a></li>
					<li>
						<a href="/docs" class="text-gray-400 transition-colors hover:text-white"
							>Documentation</a
						>
					</li>
					<li>
						<a href="/tutorials" class="text-gray-400 transition-colors hover:text-white"
							>Tutorials</a
						>
					</li>
					<li>
						<a href="/status" class="text-gray-400 transition-colors hover:text-white">Status</a>
					</li>
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h3 class="mb-4 text-lg font-bold">Contact</h3>
				<ul class="space-y-2">
					<li class="flex items-center">
						<Icon icon="mdi:email" class="mr-2 text-[#e20074]" width="20" height="20" />
						<a
							href="mailto:support@powerirl.com"
							class="text-gray-400 transition-colors hover:text-white">support@powerirl.com</a
						>
					</li>
					<li class="flex items-center">
						<Icon icon="mdi:discord" class="mr-2 text-[#e20074]" width="20" height="20" />
						<a href="#" class="text-gray-400 transition-colors hover:text-white">Join Discord</a>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
			<p>© 2025 PowerIRL an SDS Nexus, LLC Company. All rights reserved.</p>
		</div>
	</div>
</footer>
