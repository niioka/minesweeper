<script lang="ts">
	import type { GameData, StartGameEventPayload } from '$lib/models/game';
	import MenuPage from '$lib/components/MenuPage.svelte';
	import { initGame } from '$lib/logics/game-logic';
	import GamePage from '$lib/components/GamePage.svelte';
	import { getRandomBombPositions } from '$lib/logics/game-logic.js';

	let game: GameData | undefined = undefined;

	function handleStartGame(event: CustomEvent<StartGameEventPayload>) {
		const { stageType, width, height, bombCount } = event.detail;
		game = initGame({ stageType, width, height, getMinePositions: getRandomBombPositions(bombCount) });
	}

	function handleRetry() {
		if (game) {
			game = initGame({
				stageType: game.stageType,
				width: game.board.width,
				height: game.board.height,
				getMinePositions: getRandomBombPositions(game.initialBombCount)
			});
		}
	}

	function handleUpdateGame(event: CustomEvent<GameData>) {
		let game_ = event.detail;
		game = game_;
		if (game_.status === 'GAMEOVER' && !game_.isGameOverPopupOpen) {
			setTimeout(() => {
				game_.isGameOverPopupOpen = true;
				game = game_;
			}, 1000);
		}
	}

	function handleBackToMenu() {
		game = undefined;
	}
</script>

<div class="root">
	{#if game === undefined}
		<MenuPage on:startGame={handleStartGame} />
	{:else}
		<GamePage game={game} on:updateGame={handleUpdateGame} on:backToMenu={handleBackToMenu} on:retry={handleRetry} />
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