import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const modalStore = writable(false);
export const openNav = writable(false);
export const visited: any = writable(browser && localStorage.getItem('Visited'));
visited.subscribe(() => browser && localStorage.setItem('Visited', 'Visited'));
