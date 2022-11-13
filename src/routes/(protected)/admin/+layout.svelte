<script>
	import Button from '$lib/ui/Button.svelte';
	import { invalidateAll } from '$app/navigation';

	import { enhance, applyAction } from '$app/forms';
</script>

<form
	action="/logout"
	method="POST"
	use:enhance={() => {
		return async ({ result }) => {
			invalidateAll();
			await applyAction(result);
		};
	}}
>
	<Button type="logout">Logout</Button>
</form>
<slot />
