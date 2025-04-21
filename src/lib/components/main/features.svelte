<script>
	import Icon from '@iconify/svelte';

	const features = [
		{
			icon: 'mdi:cellphone',
			title: 'Mobile Device Support',
			description:
				'We offer support for both Android & iPhone devices. Our services work with multiple mobile applications for streaming.'
		},
		{
			icon: 'mdi:shield-check',
			title: 'Streaming Drop Protection',
			description:
				"With our Cloud OBS Service, you'll have the reliability that if your stream drops for any reason you'll remain online."
		},
		{
			icon: 'mdi:layers',
			title: 'Custom Overlays',
			description:
				"Dedicated server plans come with full OBS control which means you'll have the ability to have your own overlays."
		},
		{
			icon: 'mdi:star',
			title: 'Partner Programs',
			description:
				'Become a partner and elevate your IRL streams with exclusive perks, discounted hosting, and tailored solutions for qualified streamers.'
		},
		{
			icon: 'mdi:hand-heart',
			title: 'White Glove Service',
			description:
				'Our White Glove Service means we handle everything with extra care— Think of it as a premium, hands-on experience designed to make things easy, smooth, and stress-free for you.'
		},
		{
			icon: 'mdi:desktop-classic',
			title: 'Remote Access',
			description:
				'Not at home? You can control your Cloud OBS Service via Remote Desktop or Web Browser.'
		}
	];
</script>

<section class="bg-[#222] py-16 text-white">
	<div class="container mx-auto px-5">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<div
					class="flex flex-col items-center rounded-lg bg-[#121212] p-6 text-center transition-transform hover:scale-105"
				>
					<div class="mb-4 rounded-full bg-[#e20074]/10 p-4">
						<Icon icon={feature.icon} width="32" height="32" color="#e20074" />
					</div>
					<h3 class="mb-2 text-xl font-bold">{feature.title}</h3>
					<p class="text-sm text-gray-300">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
