<script lang="ts">
	import type { GameData, StartGameEventPayload } from '$lib/models/game';
	import MenuPage from '$lib/components/MenuPage.svelte';
	import { initGame } from '$lib/logics/game-logic';
	import GamePage from '$lib/components/GamePage.svelte';
	import { getRandomBombPositions } from '$lib/logics/game-logic.js';

	let game: GameData | undefined = undefined;

	function handleStartGame(event: CustomEvent<StartGameEventPayload>) {
		const { width, height, bombCount } = event.detail;
		game = initGame({ width, height, getMinePositions: getRandomBombPositions(bombCount) });
	}

	function handleUpdateGame(event: CustomEvent<GameData>) {
		game = event.detail;
	}
</script>


{#if game === undefined}
	<MenuPage on:startGame={handleStartGame} />
{:else}
	<GamePage game={game} on:updateGame={handleUpdateGame} />
{/if}