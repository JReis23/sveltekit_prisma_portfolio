<script lang="ts">
	import Button from '$lib/ui/Button.svelte';
</script>

<section id="index" class="flex h-screen justify-between">
	<div class="flex flex-col justify-center">
		<h2>Salut, je m'appelle</h2>
		<h1>João Reis</h1>
		<h3>et je suis développeur Web.</h3>
		<p class="pt-3 pb-3">
			Je suis un développeur web spécialisé dans la création du front-end de tout site web, je
			développe également des applications back-end à intégrer aux solutions front-end que je crée.
		</p>
		<div class="button-main mt-16">
			<Button
				rel="external"
				href="https://drive.google.com/uc?id=1UoEYh2pBT0SBUudj7mvpgtRU2A_-7D2_"
				target="_blank"
				type="primary-main"
				>Regardez mon CV !
			</Button>
		</div>
	</div>
</section>

<style>
	p {
		max-width: 60ch;
	}
</style>
