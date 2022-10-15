<script lang="ts">
	import Button from '$lib/ui/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import type { ActionData } from './$types';
	import { invalidateAll } from '$app/navigation';
	import { enhance, applyAction } from '$app/forms';

	export let form: ActionData;
</script>

<section>
	<Card>
		<h3 class="">Login</h3>
		<form
			method="POST"
			action="?/login"
			use:enhance={() => {
				return async ({ result }) => {
					invalidateAll();
					await applyAction(result);
				};
			}}
		>
			<div class="form-control">
				<label for="email">Email</label>
				<input id="email" name="email" type="text" required />
			</div>
			{#if form?.invalid}
				<p class="error">Email and sont necessaires.</p>
			{/if}

			{#if form?.credentials}
				<p class="error">Nous ne trouvons pas votre adresse mail.</p>
			{/if}

			<div class="form-control">
				{#if form?.password}
					<p class="error">Le mot de pass n'est pas correct.</p>
				{/if}

				<label for="password">Password</label>
				<input id="password" name="password" type="password" required />
			</div>
			<div class="pt-10">
				<Button type="submit">Log in</Button>
			</div>
		</form>
	</Card>
</section>

<style>
	section h3 {
		color: var(--green);
	}
</style>
