<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/stores';
	import '../app.postcss';
</script>

<svelte:head>
	<title>SvelteKit Auth</title>
</svelte:head>

<Header />

<main class="w-full flex justify-center overflow-x-hidden">
	<div class="main-div justify-center flex">
		<slot />
	</div>
</main>
