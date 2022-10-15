<script>
	import Button from '$lib/ui/Button.svelte';
	import { fade } from 'svelte/transition';

	export let societyButton = 'noveoo';

	const handleNoveoo = () => {
		societyButton = 'noveoo';
	};

	const handleMontauban = () => {
		societyButton = 'montauban';
	};

	const handleRwf = () => {
		societyButton = 'rwf';
	};

	const handlePatriarca = () => {
		societyButton = 'patriarca';
	};

	const handleLectra = () => {
		societyButton = 'lectra';
	};
</script>

<section id="experience" class="workplaces">
	<h2 class="numbered-heading">Expériences professionnelles</h2>
	<div class="flex flex-col md:flex-row">
		<div class="buttons flex flex-row self-baseline md:flex-col">
			<Button
				on:click={handleLectra}
				active={societyButton === 'lectra' ? 'active' : ''}
				type="secondary">Lectra</Button
			>
			<Button
				on:click={handleNoveoo}
				active={societyButton === 'noveoo' ? 'active' : ''}
				type="secondary">Noveoo</Button
			>
			<Button
				on:click={handleMontauban}
				active={societyButton === 'montauban' ? 'active' : ''}
				type="secondary">Montauban</Button
			>
			<Button on:click={handleRwf} active={societyButton === 'rwf' ? 'active' : ''} type="secondary"
				>RWF</Button
			>
			<Button
				on:click={handlePatriarca}
				active={societyButton === 'patriarca' ? 'active' : ''}
				type="secondary">Patriarca</Button
			>
		</div>
		<div class="md:px-8 ">
			{#if societyButton === 'montauban'}
				<div in:fade={{ delay: 100, duration: 700 }}>
					<div class="pb-6">
						<h3>
							Stagiaire <span
								>@ <a href="https://www.montauban-renovation.com/" target="_blank">Montauban</a
								></span
							>
						</h3>
						<p>février <span>2021</span> à mars <span>2012</span></p>
					</div>
					<ul>
						<li>
							Création d'une application pour la gestion du processus de la création du client à la
							facturation des dossiers clients.
						</li>
						<li>
							Application créée en Django et ensuite gérée par un administrateur et plusieurs
							utlisateurs avec des différents rôles.
						</li>
						<li>Élaboration du projet avec la méthodologie <span>Scrum Agile</span></li>
					</ul>
				</div>
			{:else if societyButton === 'rwf'}
				<div in:fade={{ delay: 100, duration: 700 }}>
					<div class="pb-6">
						<h3>
							Apprenant <span
								>@ <a href="https://ruralwebfactory.fr/" target="_blank">Rural Web Factory</a></span
							>
							by <span><a href="https://simplon.co/" target="_blank">Simplon</a></span>
						</h3>
						<p>Octobre 2020 à Juillet 2021</p>
					</div>
					<ul>
						<li>Apprentissage de langages de base comme JavaScript, HTML et CSS.</li>
						<li>Conception de bases de données. Apprentissage MCD et MLD.</li>
						<li>
							Réalisation de plusieurs projets pour améliorer la connaissance générale du métier de
							développeur
						</li>
					</ul>
				</div>
			{:else if societyButton === 'patriarca'}
				<div in:fade={{ delay: 100, duration: 700 }}>
					<div class="pb-6">
						<h3>
							Conducteur de travaux <span
								>@ <a href="http://www.patriarca.fr" target="_blank">Patriarca</a></span
							>
						</h3>
						<p>Janvier <span>2019</span> à Mars <span>2020</span></p>
					</div>
					<ul>
						<li>
							Coordination des travaux réalisés dans le cadre d’un ou plusieurs chantiers dans le
							respect de la qualité, des délais et du budget.
						</li>
						<li>
							Suivi technique, administratif et financier du chantier ainsi que des entreprises
							sous-traitantes.
						</li>
						<li>
							Etude du dossier et des contrats, préparation de l'opération, définition des besoins,
							méthodes, moyens humains et matériels, planification de l'opération
						</li>
					</ul>
				</div>
			{:else if societyButton === 'noveoo'}
				<div in:fade={{ delay: 100, duration: 700 }}>
					<div class="pb-6">
						<h3>
							Développeur Web / Fondateur <span
								>@ <a href="https://www.noveoo.fr/" target="_blank">Noveoo</a></span
							>
						</h3>
						<p>Septembre <span>2021</span> à <span>Présent</span></p>
					</div>
					<ul>
						<li>
							Création de sites Vitrine, Ecommerce, site sur mesure et refonte de sites avec
							l'utilisation de Svelte, CMS, Django, Tailwind, Bootstrap...
						</li>
						<li>
							Suivi technique et maintenance des sites internet ou des applications web créés en
							fonction des besoins.
						</li>
						<li>
							Gestion de projet avec l'utlisation de la méthodologie Agile avec une approche Scrum.
						</li>
					</ul>
				</div>
			{:else if societyButton === 'lectra'}
				<div in:fade={{ delay: 100, duration: 700 }}>
					<div class="pb-6">
						<h3>
							Développeur logiciel en JavaScript <span
								>@ <a href="https://www.lectra.com/fr" target="_blank">Lectra France</a></span
							>
						</h3>
						<p>Juin <span>2022</span> à <span>Présent</span></p>
					</div>
					<ul>
						<li>
							Intégré au sein d’une équipe <span><strong>AGILE</strong></span>, je participe à
							l’implémentation et l’intégration du PLM de la société dans les écosystèmes des
							clients.
						</li>
						<li>
							Ces activités consistent à de l’analyse / conception, du développement des
							personnalisations, de la revue de code et de la validation manuelle.
						</li>
						<li>
							Je participe à l’accompagnement technico fonctionnel des filiales et des clients
							worldwide, de l’implémentation de process métiers clients, de l’intégration avec
							l’écosystème clients et de la livraison des PLM.
						</li>
					</ul>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	a {
		display: inline-block;
		text-decoration: none;
		font-size: 2rem;
		position: relative;
		color: var(--green);
	}

	li {
		color: var(--slate);
		max-width: 70ch;
		padding-top: 1rem;
		font-family: 'Montserrat', sans-serif;
		font-size: 1.175em;
	}

	li::before {
		content: '▹';
		color: rgba(88, 227, 197, 1);
		margin-right: 1.175rem;
	}

	a:hover::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		border-bottom: solid 1px var(--green);
		animation: border_anim 0.7s forwards;
	}

	@keyframes border_anim {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}

	@media (max-width: 768px) {
		li {
			padding: 0.375rem 1rem;
		}

		.buttons {
			overflow-x: scroll;
			-webkit-overflow-scrolling: touch;
			white-space: nowrap;
		}
	}
</style>
