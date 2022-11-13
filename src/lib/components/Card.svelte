<div class="flex justify-center">
	<div class="w-full rounded-2xl border p-10 md:w-2/4">
		<slot><!-- optional fallback --></slot>
	</div>
</div>

<style>
	.border {
		background: #0a182e;
		box-shadow: -20px 20px 60px #060e1b, 20px -20px 60px #0e2241;
		border-color: var(--green);
	}
</style>
