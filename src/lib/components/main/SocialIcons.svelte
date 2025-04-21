<script>
	import Icon from '@iconify/svelte';
	import { socials } from '$lib/data/socialicons.js';
	export let Color = '#000000';
</script>

{#each socials as { name, url, icon }}
	<a href={url} target="_blank" rel="noopener noreferrer" title={name}>
		<Icon {icon} width="24" height="24" color={Color} />
	</a>
{/each}
