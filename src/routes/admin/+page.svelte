<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let data: PageData;

	let searchTherm = '';
	let progression = '';

	$: serchedData = data[0].filter((data) => {
		return (
			data.name.toLowerCase().includes(searchTherm) ||
			data.email.toLowerCase().includes(searchTherm) ||
			data.description.toLowerCase().includes(searchTherm) ||
			data.choice.toLowerCase().includes(searchTherm)
		);
	});

	const progressionBar = (data2: number) => {
		const oneDay = 1000 * 60 * 60 * 24;
		const sendData = Number(data2);
		const actualDay = Number(Date.now());
		return Math.round((actualDay - sendData) / oneDay);
	};
</script>

<section class="min-h-screen py-32 align-center flex flex-col">
	<div class="form-control">
		<input
			class:search={searchTherm.length === 0 ? 'search' : ''}
			type="search"
			placeholder="Chercher par email ou nom..."
			bind:value={searchTherm}
		/>
	</div>
	<table class="table-auto border-spacing-y-3 border-separate w-full relative">
		<thead>
			<tr>
				<th />
				<th>Name</th>
				<th>Email</th>
				<th>Date</th>
				<th>Message</th>
				<th>Type</th>
				<th />
				<th>Options</th>
			</tr>
		</thead>
		{#each serchedData as contact, i}
			<tbody>
				<tr>
					<th>{i + 1}</th>
					<td>{contact.name}</td>
					<td>{contact.email}</td>
					<td>{contact.createAt.toDateString()}</td>
					<td>{contact.description.substring(0, 6)}...</td>
					<td class="center">
						{#if contact.choice === 'COMPLAIN'}
							<span class="indicator-item badge badge-secondary">CP</span>
						{:else if contact.choice === 'WORK'}
							<span class="indicator-item badge badge-warning">W</span>
						{:else if contact.choice === 'CONTACT'}
							<span class="indicator-item badge badge-accent">C</span>
						{/if}
					</td>
					<td>
						<progress
							class="progress w-32"
							class:progress-success={progressionBar(Number(contact.createAt)) <= 3
								? 'progress-success'
								: ''}
							class:progress-warning={progressionBar(Number(contact.createAt)) > 3
								? 'progress-warning'
								: ''}
							class:progress-error={progressionBar(Number(contact.createAt)) > 7
								? 'progress-error'
								: ''}
							value={progressionBar(Number(contact.createAt))}
							max="10"
						/>
					</td>
					<td>
						<div class="flex">
							<a href="/admin/{contact.id}" class="mt-1 pr-4">
								<img src="/icons/message.svg" alt="mail" />
							</a>
							<form method="post" class="overflow-x-auto" use:enhance>
								<input type="text" name="id" value={contact.id} hidden />
								<button>
									<img src="/icons/trashCan.svg" alt="trash can" />
								</button>
							</form>
						</div>
					</td>
				</tr>
			</tbody>
		{/each}
	</table>
</section>

<style>
	.table-auto {
		position: relative;
		text-align: left;
	}

	.table-auto th:first-child {
		position: sticky;
		position: -webkit-sticky;
		left: 0px;
		z-index: 11;
	}

	.table-auto thead tr > th {
		background-color: var(--light-navy);
		color: var(--green);
	}

	table tr:first-child th:first-child,
	table tr:first-child td:first-child {
		border-top-left-radius: 10px;
	}

	table tr:first-child th:last-child,
	table tr:first-child td:last-child {
		border-top-right-radius: 10px;
	}

	table tr:last-child th:first-child,
	table tr:last-child td:first-child {
		border-bottom-left-radius: 10px;
	}

	table tr:last-child th:last-child,
	table tr:last-child td:last-child {
		border-bottom-right-radius: 10px;
	}

	tbody td:nth-child(6) {
		position: relative;
	}

	.table-auto th,
	td {
		white-space: nowrap;
		padding: 1rem /* 16px */;
		vertical-align: middle;
		background-color: var(--lightest-navy);
	}

	.table-auto {
		display: table;
	}

	.search {
		background-image: url(/icons/search.svg);
		background-position: right;
		background-repeat: no-repeat;
		background-size: 2rem;
	}
</style>
