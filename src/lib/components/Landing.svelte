<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';

	let intro: boolean;

	setTimeout(() => {
		intro = true;
	}, 0);
</script>

<div class="body">
	{#if intro}
		<p
			in:fly={{ y: 150, duration: 2000 }}
			out:scale={{ duration: 1000, delay: 500, opacity: 0, start: 0, easing: quartOut }}
		>
			J
		</p>

		<p
			in:fly={{ y: -150, duration: 2000 }}
			out:scale={{ duration: 1000, delay: 500, opacity: 0, start: 0, easing: quartOut }}
		>
			R
		</p>
	{/if}
</div>

<style>
	.body {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		z-index: 1001;
		background: var(--dark-navy);
		overflow: hidden;
	}

	p {
		font-size: 100px;
		color: var(--green);
	}
</style>
