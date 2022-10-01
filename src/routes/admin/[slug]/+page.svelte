<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

<section>
	{#each data[0] as contact}
		<div class="w-full p-16 rounded-xl contact relative grid grid-rows-2">
			<p class="right-6 top-2 absolute text-sm">
				Envoyé le :
				<span>{contact.createAt.toLocaleDateString()}</span>
			</p>
			<div class="grid grid-cols-2">
				<div class="">
					<span>Nom</span>
					<p>{contact.name}</p>
				</div>
				<div class="">
					<span>E-mail</span>
					<p>{contact.email}</p>
				</div>
			</div>
			<div class="grid grid-cols-1">
				<div>
					<span>Message :</span>
					<p>{contact.description}</p>
				</div>
			</div>
		</div>
	{/each}
</section>

<style>
	section .contact {
		min-height: 50vh;
		background: #0a182e;
		box-shadow: -20px 20px 60px #060e1b, 20px -20px 60px #0e2241;
		border-color: var(--slate);
	}
</style>
