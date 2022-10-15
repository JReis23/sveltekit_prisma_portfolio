<script lang="ts">
	import Icon, { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

	export let label: string = 'Login icon';
	export let colour: string = 'inherit';
	export let ariaHidden: boolean = false;
	export let width: string;

	const id = Date.now().toString(16) + ((Math.random() * 0x1000000) | 0).toString(16);

	addCollection({
		prefix: 'simple-icons',
		icons: {
			login: {
				body: '<path fill="currentColor" d="M14 10L8 5v3H1v4h7v3l6-5zm3 7H9v2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9v2h8v14z"/>'
			}
		},
		width: 24,
		height: 24
	});
</script>

<Icon icon="simple-icons:login" {ariaHidden} aria-label={label} color={colour} {width} {id} />
