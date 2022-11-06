<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import ButtonToTop from '$lib/ui/ButtonToTop.svelte';
	import NavPhone from '$lib/components/NavPhone.svelte';
	import Landing from '$lib/components/Landing.svelte';
	import { navigating } from '$app/stores';
	import { Stretch } from 'svelte-loading-spinners';
	import { visited } from '$lib/stores/writableStore';

	let introPage: boolean;
	if ($visited === 'Visited') {
		introPage = false;
	} else {
		introPage = true;
		setTimeout(() => {
			introPage = false;
		}, 2000);
	}
</script>

<svelte:head>
	<title>Joao REIS - Développeur Web Nouvelle Aquitaine, Bordeaux</title>
</svelte:head>

{#if introPage}
	<Landing />
{:else if $navigating}
	<main class="grid h-screen w-screen place-items-center">
		<Stretch size="60" color="var(--green)" unit="px" duration="1s" />
	</main>
{:else}
	<Header />
	<NavPhone />
	<main class="flex w-full justify-center overflow-x-hidden">
		<div class="main-div flex justify-center">
			<slot />
		</div>
	</main>
	<ButtonToTop />
{/if}
