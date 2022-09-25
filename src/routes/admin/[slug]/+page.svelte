<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	<div class="w-full p-10">
		<p>{data.email}</p>
	</div>
</section>

<style>
	div {
		min-height: 60vh;
		border: 1px solid var(--lightest-navy);
		border-radius: 50px;
		background-color: var(--light-navy);
	}
</style>
