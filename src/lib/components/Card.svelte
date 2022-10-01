<div class="flex justify-center">
	<div class="border w-full md:w-2/4 p-10 rounded-2xl">
		<slot><!-- optional fallback --></slot>
	</div>
</div>

<style>
	.border {
		background: #0a182e;
		box-shadow: -20px 20px 60px #060e1b, 20px -20px 60px #0e2241;
		border-color: var(--slate);
	}
</style>
