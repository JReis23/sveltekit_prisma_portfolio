<script>
	import { redirect } from '@sveltejs/kit';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const close = () => {
		dispatch('close');
	};
</script>

<div class="backdrop" on:click={close} on:keypress={close}>
	<div class="modal-content relative rounded-lg">
		<svg
			on:click={close}
			on:keypress={close}
			fill="var(--green)"
			width="44"
			height="44"
			version="1.1"
			id="lni_lni-close"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 64 64"
			style="enable-background:new 0 0 64 64;"
			xml:space="preserve"
		>
			<path
				d="M34.5,32L62.2,4.2c0.7-0.7,0.7-1.8,0-2.5c-0.7-0.7-1.8-0.7-2.5,0L32,29.5L4.2,1.8c-0.7-0.7-1.8-0.7-2.5,0
		c-0.7,0.7-0.7,1.8,0,2.5L29.5,32L1.8,59.8c-0.7,0.7-0.7,1.8,0,2.5c0.3,0.3,0.8,0.5,1.2,0.5s0.9-0.2,1.2-0.5L32,34.5l27.7,27.8
		c0.3,0.3,0.8,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5c0.7-0.7,0.7-1.8,0-2.5L34.5,32z"
			/>
		</svg>

		<slot><!-- optional fallback --></slot>
	</div>
</div>

<style>
	.backdrop {
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(5px);
		z-index: 1000;
		justify-content: center;
		align-items: center;
		display: flex;
		text-align: center;
	}

	.modal-content {
		width: 90%;
		height: clamp (50%, 70%, 100%);
		background: var(--light-navy);
		display: flex;
		align-items: center;
		position: relative;
	}

	svg {
		position: absolute;
		top: -10px;
		right: -10px;
		width: 1.5rem;
		height: 1.5rem;
		border: 1px solid var(--green);
		padding: 0.2rem;
		background-color: var(--light-navy);
		transition: 300ms;
		cursor: pointer;
	}

	svg:hover {
		background-color: rgba(var(--rgba-green), 0.2);
		transform: scale(1.2);
	}

	@media (min-width: 768px) {
		.modal-content {
			max-width: 1000px;
		}
	}
</style>
