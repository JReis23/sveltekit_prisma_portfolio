<script lang="ts">
	import Button from '$lib/ui/Button.svelte';
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import { fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { page } from '$app/stores';

	export let form: ActionData;
	export let showResponse: boolean = false;
</script>

<section>
	{#if !showResponse}
		<div
			class="contact relative grid w-full grid-rows-2 rounded-xl p-16"
			in:fly={{
				delay: 0,
				duration: 600,
				x: 400,
				easing: quintOut
			}}
		>
			<p class="absolute right-6 top-2 text-sm">
				Reçu le :
				<span>{$page.data.createAt.toLocaleDateString()}</span>
			</p>
			<div class="grid grid-cols-2">
				<div class="">
					<span>Nom</span>
					<p>{$page.data.name}</p>
				</div>
				<div class="">
					<span>E-mail</span>
					<p>{$page.data.email}</p>
				</div>
			</div>
			<div class="grid grid-cols-1">
				<div>
					<span>Message :</span>
					<p>{$page.data.description}</p>
				</div>
			</div>
			<button
				class="flex place-self-end"
				on:click={() => {
					showResponse = true;
				}}
				on:keypress={() => {
					showResponse = true;
				}}
			>
				<span class="px-8 text-sm">Répondre</span>

				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><path
						d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"
					/></svg
				>
			</button>
		</div>
	{:else}
		<form
			action=""
			method="post"
			use:enhance
			class="contact p-16"
			in:scale={{
				delay: 0,
				duration: 600,
				opacity: 0.5,
				start: 0.5,
				easing: quintOut
			}}
		>
			<div class="grid grid-cols-3 gap-y-6">
				<div class="col-span-2">
					<label for="to">Pour : </label>
					<input type="text" name="to" value={$page.data.email} />
					{#if form?.invalidTo}
						<p>Something went wrong</p>
					{/if}
				</div>
				<div class="col-span-2">
					<label for="subject">Sujet : </label>
					<input type="text" name="subject" />
				</div>
				<div class="col-span-3">
					<label for="html">Message : </label>
					<textarea type="text" name="html" rows="4" cols="4" />
				</div>
			</div>
			<div class="flex justify-end pt-10">
				<div class="pr-4">
					<Button
						type="del"
						on:click={() => {
							showResponse = false;
						}}>Annuler</Button
					>
				</div>
				<div>
					<Button type="primary">Envoyer email</Button>
				</div>
			</div>
		</form>
	{/if}
</section>

<style>
	section .contact {
		min-height: 50vh;
		background: #0a182e;
		box-shadow: -20px 20px 60px #060e1b, 20px -20px 60px #0e2241;
		border-color: var(--slate);
	}

	input,
	textarea {
		display: block;
		width: 100%;
		font: inherit;
		border: none;
		border-bottom: 2px solid var(--slate);
		border-radius: 3px 3px 0 0;
		background: inherit;
		padding: 0.15rem 0.25rem;
		transition: border-color 0.1s ease-out;
		color: var(--slate);
	}

	input:active,
	input:focus,
	textarea:active,
	textarea:focus {
		border-bottom: var(--green) 2px solid;
		outline: none;
	}

	svg {
		width: 26px;
		height: 26px;
		fill: var(--red);
		cursor: pointer;
		transition: linear 300ms;
	}

	svg:hover {
		fill: var(--green);
	}
</style>
