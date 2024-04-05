<script lang="ts">
	import type { GameState } from '$lib/models/game';
	import MenuPage from '$lib/components/MenuPage.svelte';
	import GamePage from '$lib/components/GamePage.svelte';
	import { gameStore } from '$lib/game-store';

	let state: GameState;
	gameStore.state.subscribe(value => {
		state = value;
	});
</script>

<div class="root">
	{#if state.type === 'SELECT-STAGE'}
		<MenuPage />
	{:else}
		<GamePage state={state} />
	{/if}
</div>

<style>
    .root {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #ccc;
    }
</style>