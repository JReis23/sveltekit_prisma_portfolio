<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
	console.log(form);
</script>

<h1>Register</h1>

<form method="POST" use:enhance>
	{#if form?.userEmail}
		<p class="error">Email already taken</p>
	{/if}

	<div>
		<label for="email">email</label>
		<input id="email" name="email" type="email" required />
	</div>

	<div>
		<label for="password">Password</label>
		<input id="password" name="password" type="password" required />
	</div>

	<button type="submit">Register</button>
</form>
