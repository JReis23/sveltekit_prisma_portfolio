<script>
	export let active = '';
	export let type = 'primary';
	export let href = '';
	export let rel = '';
	export let target = '';
	export let tailwindStyle = '';
</script>

{#if href}
	<a {href} class={type} {rel} {target}>
		<slot />
	</a>
{:else}
	<button class="{type} {active} {tailwindStyle}" on:click on:submit>
		<slot />
	</button>
{/if}

<style>
	button {
		font-family: 'Fira Code', monospace;
	}
	.active {
		border-left: 3px solid var(--green) !important;
		outline: none;
		color: var(--green) !important;
	}

	.primary {
		border: 1px solid var(--green);
		color: var(--green);
		display: flex;
		align-items: center;
		border-radius: 3px;
		padding: 8px 12px;
		font-size: 0.8rem;
		transition: all 0.3s ease-in-out;
		width: fit-content;
	}

	.primary:hover {
		background: rgba(var(--rgba-green), 0.2);
	}

	.primary-main {
		position: relative;
		padding: 1.5rem 3rem;
		border-radius: 15px;
		text-align: center;
		transition: all 0.1s ease-in-out;
		cursor: pointer;
		background: linear-gradient(145deg, #0b1a31, #091629);
		box-shadow: 3px 3px 14px #040a12, -3px -3px 14px #10264a;
		color: var(--green);
	}

	.primary-main:hover {
		border-radius: 15px;
		background: #0a182e;
		box-shadow: inset 7px 7px 14px #091629, inset -7px -7px 14px #0b1a33;
	}

	.primary-main:active {
		border-radius: 15px;
		background: #0a182e;
		box-shadow: inset -20px 20px 60px #060e1b, inset 20px -20px 60px #0e2241;
	}

	.secondary {
		color: var(--slate);
		padding: 0.5rem 0.9rem;
		text-align: center;
		width: fit-content;
		border-left: solid 1px var(--slate);
		font-size: 0.875rem;
	}
	.secondary:hover {
		background: rgba(var(--rgba-green), 0.2);
	}

	.third {
		border: 1px solid var(--green);
		color: var(--green);
		display: flex;
		align-items: center;
		border-radius: 25vh;
		padding: 0.2rem 0.4rem;
		font-size: 0.6rem;
		transition: all 0.3s ease-in-out;
		width: fit-content;
	}

	.third:hover {
		background: rgba(var(--rgba-green), 0.2);
	}

	.del {
		border: 1px solid var(--red);
		color: var(--red);
		display: flex;
		align-items: center;
		border-radius: 3px;
		padding: 8px 12px;
		font-size: 0.8rem;
		transition: all 0.3s ease-in-out;
		width: fit-content;
	}

	.del:hover {
		color: var(--navy);
		background: hsl(0, 84%, 60%);
	}

	.delLitle {
		border: 1px solid hsl(0, 84%, 60%);
		color: hsl(0, 84%, 60%);
		display: flex;
		align-items: center;
		border-radius: 25vh;
		padding: 0.2rem 0.4rem;
		font-size: 0.6rem;
		transition: all 0.3s ease-in-out;
		width: fit-content;
	}

	.delLitle:hover {
		color: var(--navy);
		background: hsl(0, 84%, 60%);
	}

	.submit {
		border: 1px solid var(--green);
		color: var(--green);
		display: flex;
		align-items: center;
		border-radius: 3px;
		padding: 0.4rem 0;
		font-size: 1rem;
		transition: all 0.3s ease-in-out;
		width: 100%;
		justify-content: center;
	}

	.submit:hover {
		background: rgba(var(--rgba-green), 0.2);
	}

	.login {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80px;
		height: 80px;
		border-radius: 150px;
		background: linear-gradient(145deg, #0b1a31, #091629);
		box-shadow: 3px 3px 14px #040a12, -3px -3px 14px #10264a;
		margin: 3rem 3rem;
		padding: 1.4em;
		position: fixed;
		color: var(--green);
		bottom: 0;
		right: 0;
	}

	.login:hover {
		border-radius: 150px;
		background: #0a182e;
		box-shadow: inset 7px 7px 14px #091629, inset -7px -7px 14px #0b1a33;
	}

	.logout {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80px;
		height: 80px;
		border-radius: 150px;
		background: linear-gradient(145deg, #0b1a31, #091629);
		box-shadow: 3px 3px 14px #040a12, -3px -3px 14px #10264a;
		margin: 3rem 3rem;
		padding: 1.4em;
		position: fixed;
		color: var(--red);
		bottom: 0;
		right: 0;
	}

	.logout:hover {
		border-radius: 150px;
		background: #0a182e;
		box-shadow: inset 7px 7px 14px #091629, inset -7px -7px 14px #0b1a33;
	}

	@media (max-width: 768px) {
		.secondary {
			padding: 0.3rem 0.3rem;
		}
	}
</style>
