<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/ui/Button.svelte';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<section>
	<Card>
		<h3>Register</h3>
		<form method="POST" use:enhance>
			<div class="form-control">
				<label for="email">email</label>
				<input id="email" name="email" type="email" required />
				{#if form?.userEmail}
					<p class="error">Email already taken</p>
				{/if}
			</div>

			<div class="form-control">
				<label for="password">Password</label>
				<input id="password" name="password" type="password" required />
			</div>
			<div class="pt-10">
				<Button type="submit">Register</Button>
			</div>
		</form>
	</Card>
</section>

<style>
	section h3 {
		color: var(--green);
	}
</style>
