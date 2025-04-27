<script>
	import Icon from '@iconify/svelte';

	const legalDocs = [
		{
			title: 'Terms of Service',
			description:
				'Our terms and conditions for using PowerIRL services. Includes information about user obligations, payment terms, and service availability.',
			path: '/legal/tos',
			icon: 'mdi:file-document'
		},
		{
			title: 'Privacy Policy',
			description:
				'Learn how we collect, use, and protect your personal information. Details about data security, retention, and your privacy rights.',
			path: '/legal/privacy',
			icon: 'mdi:shield-lock'
		},
		{
			title: 'Disclaimer',
			description:
				'Important information about service limitations, liability, and your responsibilities when using PowerIRL.',
			path: '/legal/disclaimer',
			icon: 'mdi:alert-circle'
		}
	];
</script>

<div class="container mx-auto px-5 py-8">
	<h1 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">Legal Documents</h1>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each legalDocs as doc}
			<div
				class="pricing-panel group relative flex min-h-[320px] flex-col rounded-lg bg-[#121212]/80 p-8 text-center backdrop-blur-sm sm:p-10"
			>
				<div class="flex-grow">
					<h2 class="mb-4 text-2xl font-bold text-white">{doc.title}</h2>
					<div class="mb-4 flex justify-center">
						<div
							class="icon-container flex h-16 w-16 items-center justify-center rounded-full bg-[#e20074]/10"
						>
							<Icon icon={doc.icon} class="h-8 w-8 text-[#e20074]" />
						</div>
					</div>
					<p class="mb-8 text-base leading-relaxed text-gray-300">
						{doc.description}
					</p>
				</div>
				<div class="relative">
					<a
						href={doc.path}
						class="inline-block w-full cursor-pointer rounded-md bg-[#e20074] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#c70067] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#121212] sm:px-12 sm:py-4"
						aria-label="Read {doc.title}"
					>
						Read
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	/* Add consistent hover effect for all blocks */
	.pricing-panel {
		transition: all 500ms ease;
		min-height: 220px;
	}
	
	/* Add reduced motion preference support */
	@media (prefers-reduced-motion: reduce) {
		.pricing-panel,
		.pricing-panel .icon-container {
			transition: none;
		}
		
		.pricing-panel:hover {
			transform: none;
		}
		
		.pricing-panel:hover .icon-container {
			transform: none;
		}
	}

	.pricing-panel:hover {
		transform: scale(1.05);
		background-color: rgb(18, 18, 18);
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}

	.pricing-panel .icon-container {
		transition: all 300ms ease;
	}

	.pricing-panel:hover .icon-container {
		transform: scale(1.1);
		background-color: rgba(226, 0, 116, 0.2);
	}
</style>
