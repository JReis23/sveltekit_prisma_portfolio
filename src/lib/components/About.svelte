<script>
</script>

<section id="me" class="me">
	<h2 class="numbered-heading">À propos de moi</h2>
	<article class="flex flex-col md:flex-row">
		<div>
			<div class="about">
				<p>
					Mon intérêt pour le développement web a commencé il y a quelques années. Mais c’est en
					2020 que j'ai décidé que c'était le bon moment pour changer de métier et essayer de
					réaliser mon rêve de travailler dans le développement d'applications web !<br /><br
					/>Avant d'être développeur web, j'ai été conducteur de travaux dans le bâtiment et j'ai
					aussi travaillé pour le back-office d'une entreprise dans le domaine de la communication.
					Les métiers que j'ai exercés ont fait de moi un professionnel ayant de l'expérience dans
					la gestion des clients et des équipes.
					<br /><br />Ma formation de développeur Web a eu lieu entre novembre 2020 et juillet 2021.
					Pendant la formation, j'ai appris à travailler avec des langages comme
					<span>JavaScript, HTML, CSS, SQL et Python</span> et peu après la formation, j'ai commencé
					à travailler avec <span>React</span> et surtout <span>SVELTE</span> (utilisé pour la
					réalisation du portfolio). Au cours de ma formation, j'ai également suivi une formation
					<span>Opquast</span>
					et une formation <span>Agile</span>. <br /><br />Voici quelques technologies avec
					lesquelles j'ai travaillé récemment :
				</p>
			</div>
			<div class="flex flex-row">
				<ul>
					<li>Svelte</li>
					<li>SvelteKit</li>
					<li>JavaScript</li>
					<li>Tailwind</li>
				</ul>
				<ul>
					<li>Django</li>
					<li>Python</li>
					<li>Prisma</li>
					<li>Supabase</li>
				</ul>
			</div>
		</div>
		<div class="photo">
			<picture class="relative inline-block">
				<img src="/img/me.jpg" alt="joao reis" />
			</picture>
		</div>
	</article>
</section>

<style>
	.about {
		max-width: 75ch;
		padding-right: 2rem;
	}

	li::before {
		content: '▹';
		color: var(--green);
		margin-right: 1.175rem;
	}

	ul {
		padding-right: 5rem;
		padding-top: 3rem;
	}

	img {
		border-radius: 5px;
		z-index: 1;
		position: relative;
	}

	picture::after {
		content: '';
		background: rgba(var(--rgba-green), 0.3);
		position: absolute;
		display: block;
		width: 100%;
		top: 0;
		bottom: 0;
		transition: 0.5s ease-in-out;
		border-radius: 5px;
		z-index: 1;
	}

	picture {
		transition: 0.5s ease-in-out;
		border-radius: 5px;
		z-index: 1;
	}

	picture::before {
		content: '';
		border: 1px solid var(--green);
		position: absolute;
		top: 10px;
		left: 10px;
		width: 100%;
		height: 100%;
		transition: 0.5s ease-in-out;
		border-radius: 5px;
	}

	picture:hover {
		transition: 0.5s ease-in-out;
		transform: translateY(-3px);
	}

	picture:hover::before {
		transition: 0.5s ease-in-out;

		transform: translateY(-5px);
		transform: translateX(-5px);
	}

	picture:hover::after {
		background: none;
		transition: 0.5s ease-in-out;
		transform: translateY(-3px);
	}

	@media (max-width: 768px) {
		.photo {
			display: flex;
			justify-content: center;
			padding-top: 5rem;
		}

		ul {
			display: flex;
			justify-content: space-around;
			flex-direction: column;
			padding: 2rem;
		}
	}
</style>
