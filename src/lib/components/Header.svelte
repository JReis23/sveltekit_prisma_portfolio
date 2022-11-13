<script lang="ts">
	import { modalStore, openNav } from '$lib/stores/writableStore';
	import { page } from '$app/stores';
	import { invalidateAll } from '$app/navigation';
	import { enhance, applyAction } from '$app/forms';
	import LoginIcon from '$lib/icons/LoginIcon.svelte';
	import LogoutIcon from '$lib/icons/LogoutIcon.svelte';
	import Button from '$lib/ui/Button.svelte';

	let y = 0;

	const handleNav = () => {
		$openNav = !$openNav;
	};
</script>

<svelte:window bind:scrollY={y} />

<header class:shadow-xl={y !== 0}>
	<nav class="flex w-full items-center justify-between">
		<div class="logo flex items-center">
			<img src="/img/vectorpaint.svg" alt="logo joao reis" />
		</div>
		<div class="flex">
			<div class="flex justify-end md:hidden">
				<svg
					on:click|preventDefault={handleNav}
					on:keypress={handleNav}
					fill="var(--green)"
					width="36"
					height="36"
					version="1.1"
					id="lni_lni-menu"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 64 64"
					style="enable-background:new 0 0 64 64;"
					xml:space="preserve"
				>
					<g>
						<path
							d="M61,30.3H3c-1,0-1.8,0.8-1.8,1.8S2,33.8,3,33.8h58c1,0,1.8-0.8,1.8-1.8S62,30.3,61,30.3z"
						/>
						<path
							d="M61,47.9H3c-1,0-1.8,0.8-1.8,1.8S2,51.4,3,51.4h58c1,0,1.8-0.8,1.8-1.8S62,47.9,61,47.9z"
						/>
						<path
							d="M3,16.1h58c1,0,1.8-0.8,1.8-1.8S62,12.6,61,12.6H3c-1,0-1.8,0.8-1.8,1.8S2,16.1,3,16.1z"
						/>
					</g>
				</svg>
			</div>
			<div class="hidden md:visible md:flex">
				<ol class="flex flex-row items-center">
					<li><a href="/"> Accueil</a></li>
					<li><a href="/#me"> Moi</a></li>
					<li>
						<a href="/#experience"> Expérience</a>
					</li>
					<li>
						<a href="/#contact"> Contact</a>
					</li>
					<li>
						<a href="/admin"> Tableau de bord</a>
					</li>
				</ol>
			</div>
		</div>
	</nav>
</header>

<style>
	header {
		z-index: 10;
		padding: 1rem 2rem;
		position: fixed;
		width: 100%;
		background: var(--navy);
	}

	img {
		width: 40px;
		height: 30px;
	}

	a {
		padding: 0 0.7rem;
	}

	li {
		counter-increment: item 1;
	}

	li::before {
		content: '';
	}

	a::before {
		content: '0' counter(item) '.';
		color: var(--green);
		margin-right: 5px;
	}

	a:hover {
		color: var(--green);
	}

	a:focus,
	a:active {
		color: var(--green);
	}
</style>
