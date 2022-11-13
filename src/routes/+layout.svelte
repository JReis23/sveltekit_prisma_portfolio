<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import NavPhone from '$lib/components/NavPhone.svelte';
	import Landing from '$lib/components/Landing.svelte';
	import { Stretch } from 'svelte-loading-spinners';
	import { browser } from '$app/environment';

	let introPage: boolean = false;
	const diff_minutes = () => {
		let dt1: any = browser && Number(localStorage.Visited);
		let dt2: number = Date.now();
		let diff = (dt2 - dt1) / 1000;
		diff /= 60;
		return Math.abs(Math.round(diff));
	};

	if (diff_minutes() === 0) {
		introPage = true;
		setTimeout(() => {
			introPage = false;
		}, 2000);
	} else if (diff_minutes() >= 30) {
		browser && localStorage.clear();
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
	<!-- {#if $navigating}
	<main class="grid h-screen w-screen place-items-center">
		<Stretch size="60" color="var(--green)" unit="px" duration="1s" />
	</main> -->
{:else}
	<Header />
	<NavPhone />
	<main class="flex w-full justify-center overflow-x-hidden">
		<div class="main-div flex justify-center">
			<slot />
		</div>
	</main>
{/if}
<!-- {/if} -->
