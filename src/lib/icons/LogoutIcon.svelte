<script lang="ts">
	import Icon, { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

	export let label: string = 'Logout icon';
	export let colour: string = 'inherit';
	export let ariaHidden: boolean = false;
	export let width: string;

	const id = Date.now().toString(16) + ((Math.random() * 0x1000000) | 0).toString(16);

	addCollection({
		prefix: 'simple-icons',
		icons: {
			logout: {
				body: '<path fill="currentColor" fill-rule="evenodd" d="M3 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm7.707 3.293a1 1 0 0 1 0 1.414L9.414 9H17a1 1 0 1 1 0 2H9.414l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"/>'
			}
		},
		width: 24,
		height: 24
	});
</script>

<Icon icon="simple-icons:logout" {ariaHidden} aria-label={label} color={colour} {width} {id} />
