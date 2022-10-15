<script lang="ts">
	import Main from '$lib/components/Main.svelte';
	import Workplaces from '$lib/components/Workplaces.svelte';
	import About from '$lib/components/About.svelte';
	import Social from '$lib/components/Social.svelte';
	import Modal from '$lib/ui/Modal.svelte';
	import Button from '$lib/ui/Button.svelte';
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;

	let choice = [
		{ value: 'WORK', desc: "J'ai une proposition de travail" },
		{ value: 'COMPLAIN', desc: 'Je ne suis pas satisfait(e)' },
		{ value: 'CONTACT', desc: 'Je veux dire Salut! 👋' }
	];

	let name: string = '';
	let email: string = '';
	let description: string = '';
</script>

<Social />
<Main />
<About />
<Workplaces />

<section id="contact">
	<h2 class="numbered-heading">Contactez-moi</h2>
	<div class="flex flex-col items-center">
		<article>
			<p class="">
				Que vous ayez une question ou que vous souhaitiez simplement me saluer, je ferai de mon
				mieux pour vous répondre !
			</p>
		</article>
		<form method="POST" use:enhance>
			<div class="form-control">
				<label for="name" class="">
					<span class="">Nom</span>
				</label>
				<input type="text" placeholder="Votre nom" name="name" bind:value={name} />
				<label for="name" class="">
					{#if form?.invalidName}
						<span class="invalid label-text-alt">Nom invalide</span>
					{/if}
				</label>
			</div>
			<div class="form-control">
				<label for="name" class="">
					<span class="">E-mail</span>
				</label>
				<input
					type="text"
					placeholder="Votre e-mail"
					novalidate
					class=""
					name="email"
					bind:value={email}
				/>
				<label for="name" class="">
					{#if form?.invalidEmail}
						<span class="invalid label-text-alt">E-mail invalide</span>
					{/if}
				</label>
			</div>
			<div class="form-control">
				<label for="name" class="">
					<span class="">Message</span>
				</label>
				<textarea
					type="text"
					rows="5"
					placeholder="Laisse votre message"
					class=""
					name="description"
					bind:value={description}
				/>
				<label for="name" class="flex justify-between">
					{#if form?.invalidDescription}
						<span class="invalid label-text-alt">
							Description must have more then 10 characters and less then 255</span
						>
					{/if}
					<span
						class="invalid label-text-alt pb-6"
						class:colorChange={description.length >= 10
							? description.length <= 255
								? 'colorChange'
								: ''
							: ''}>Caracteres : {description.length}</span
					>
				</label>
				<select class="w-full" name="choice">
					<option disabled selected>Raison du contact</option>
					{#each choice as selected}
						<option value={selected.value}>{selected.desc}</option>
					{/each}
				</select>
			</div>
			<div class="my-8">
				<Button on:click type="submit">Envoyer</Button>
			</div>
			{#if form?.success}
				<Modal
					on:close={() => {
						(form.success = false), (name = ''), (email = ''), (description = '');
					}}
				>
					<div class="alert alert-success shadow-lg">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 flex-shrink-0 stroke-current"
								fill="none"
								viewBox="0 0 24 24"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/></svg
							>
							<span>Votre message a été envoyé avec succès</span>
						</div>
					</div>
				</Modal>
			{/if}
		</form>
	</div>
</section>

<style>
	div {
		display: flex;
		justify-content: center;
		scroll-snap-type: y mandatory;
	}

	article {
		width: clamp(360px, 48vw, 1000px);
		padding: 3rem 0;
	}

	form {
		width: clamp(360px, 48vw, 1000px);
	}

	.colorChange {
		color: var(--green) !important;
	}

	.invalid {
		color: var(--red);
	}

	.alert span {
		color: var(--navy);
		padding: 1rem;
		font-size: 1.2rem;
	}

	@keyframes border_anim {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}
</style>
