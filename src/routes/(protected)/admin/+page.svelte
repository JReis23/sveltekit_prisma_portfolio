<script lang="ts">
	import Modal from '$lib/ui/Modal.svelte';
	import Button from '$lib/ui/Button.svelte';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	type searchData = {
		name: string;
		email: string;
		description: string;
		choice: string;
	};

	let noDataToShow: boolean = true;
	let searchTherm: string = '';
	let deleteConfirmation: boolean = false;

	const redirectWhenNoData: any = async () => {
		location.replace('/');
		noDataToShow = false;
	};

	$: serchedData = $page.data[0].filter((data: searchData) => {
		return (
			data.name.toLowerCase().includes(searchTherm) ||
			data.email.toLowerCase().includes(searchTherm) ||
			data.description.toLowerCase().includes(searchTherm) ||
			data.choice.toLowerCase().includes(searchTherm)
		);
	});

	const progressionRadial = (data2: number) => {
		const oneDay = 1000 * 60 * 60 * 24;
		const sendData = Number(data2);
		const actualDay = Number(Date.now());
		return Math.round((actualDay - sendData) / oneDay) * 10;
	};
</script>

<section class="align-center flex min-h-screen flex-col py-32">
	{#if $page.data[0].length === 0}
		{#if noDataToShow}
			<Modal on:close={redirectWhenNoData}>
				<div class="alert alert-error flex justify-center shadow-lg">
					<div class="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 flex-shrink-0 stroke-current"
							fill="none"
							viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
							/></svg
						>
						<span>Vous n'avez pas de contacts</span>
					</div>
				</div>
			</Modal>
		{/if}
	{:else}
		<div class="form-control">
			<input
				class:search={searchTherm.length === 0 ? 'search' : ''}
				type="search"
				placeholder="Chercher par email ou nom..."
				bind:value={searchTherm}
			/>
		</div>
		<table class="relative w-full table-auto border-separate border-spacing-y-3">
			<thead>
				<tr>
					<th />
					<th>Nom</th>
					<th>Email</th>
					<th>Date</th>
					<th>Type</th>
					<th>Jours</th>
					<th>Options</th>
				</tr>
			</thead>
			{#each serchedData as contact, i}
				<tbody>
					<tr>
						<th>{i + 1}</th>
						<td>{contact.name}</td>
						<td>{contact.email}</td>
						<td>{contact.updateAt.toLocaleDateString()}</td>
						<td class="relative">
							{#if contact.choice === 'COMPLAIN'}
								<div class="h-4 w-4 rounded-full bg-rose-600" />
							{:else if contact.choice === 'WORK'}
								<div class="h-4 w-4 rounded-full bg-amber-500" />
							{:else if contact.choice === 'CONTACT'}
								<div class="h-4 w-4 rounded-full bg-green-500" />
							{/if}
						</td>
						<td>
							<div
								class="radial-progress"
								class:text-success={progressionRadial(Number(contact.createAt)) <= 30
									? 'text-success'
									: ''}
								class:text-warning={progressionRadial(Number(contact.createAt)) > 30
									? 'text-warning'
									: ''}
								class:text-error={progressionRadial(Number(contact.createAt)) > 70
									? 'text-error'
									: ''}
								style="--value:{progressionRadial(
									Number(contact.createAt)
								)}; --size:2.2rem; --thickness: 4px"
							>
								{progressionRadial(Number(contact.createAt)) / 10}
							</div>
						</td>
						<td>
							<div class="flex">
								<a href="/admin/{contact.id}" class="mt-1 pr-4">
									<img src="/icons/message.svg" alt="mail" />
								</a>
								<button
									on:click={() => {
										deleteConfirmation = true;
									}}
								>
									<img src="/icons/trashCan.svg" alt="trash can" />
								</button>
								{#if deleteConfirmation}
									<Modal on:close={() => (deleteConfirmation = false)}>
										<div class="flex w-full flex-col justify-center p-10">
											<div class="py-10">
												<p>Vous êtes sure de vouloir effacer ce contact ?</p>
											</div>
											<form method="post" class="flex justify-center overflow-x-auto">
												<input type="text" name="id" value={contact.id} hidden />
												<Button
													type="del"
													on:click={() => {
														deleteConfirmation = false;
													}}>Annuler</Button
												>
												<Button
													tailwindStyle="ml-6"
													type="primary"
													on:submit={() => {
														deleteConfirmation = false;
													}}>Confirmer</Button
												>
											</form>
										</div>
									</Modal>
								{/if}
							</div>
						</td>
					</tr>
				</tbody>
			{/each}
		</table>
	{/if}
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

	.alert span {
		color: var(--navy);
		padding: 1rem;
		font-size: 1.2rem;
	}
</style>
