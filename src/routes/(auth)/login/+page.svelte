<script lang="ts">
	import Button from '$lib/ui/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<section>
	<Card>
		<h3 class="">Login</h3>
		<form method="POST" use:enhance>
			<div class="form-control">
				<label for="email">Email</label>
				<input id="email" name="email" type="text" required />
			</div>
			{#if form?.invalid}
				<p class="error">Username and password is required.</p>
			{/if}

			{#if form?.credentials}
				<p class="error">You have entered the wrong credentials.</p>
			{/if}

			<div class="form-control">
				{#if form?.password}
					<p class="error">You have entered the wrong password.</p>
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

	.border {
		background: #0a182e;
		box-shadow: -20px 20px 60px #060e1b, 20px -20px 60px #0e2241;
		border-color: var(--slate);
	}
</style>
