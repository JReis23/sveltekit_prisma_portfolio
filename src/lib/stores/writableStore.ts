import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const modalStore = writable(false);
export const openNav = writable(false);
export const visited: any = writable(browser && localStorage.getItem('Visited'));
visited.subscribe(() => {
	if (browser && localStorage.length === 0) {
		browser && localStorage.setItem('Visited', Date.now().toString());
	}
});
export const loading = writable(false);
