<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import ButtonToTop from '$lib/ui/ButtonToTop.svelte';
	import NavPhone from '$lib/components/NavPhone.svelte';
</script>

<svelte:head>
	<title>SvelteKit Auth</title>
</svelte:head>

<Header />
<NavPhone />
<main class="flex w-full justify-center overflow-x-hidden">
	<div class="main-div flex justify-center">
		<slot />
	</div>
</main>
<ButtonToTop />
