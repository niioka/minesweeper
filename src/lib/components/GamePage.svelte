<script lang="ts">

	import Title from '$lib/components/Title.svelte';
	import BoardView from '$lib/components/BoardView.svelte';
	import type { GameData } from '$lib/models/game';
	import { createEventDispatcher, onMount } from 'svelte';
	import type { GridData } from '$lib/models/board';
	import MineCounter from '$lib/components/MineCounter.svelte';
	import { changeMark, gameOver, openCover } from '$lib/logics/game-logic';
	import GameOverPopup from '$lib/components/GameOverPopup.svelte';
	import CongratulationPopup from '$lib/components/CongratulationPopup.svelte';
	import ElapsedTimeCounter from '$lib/components/ElapsedTimeCounter.svelte';

	export let game: GameData;

	const dispatch = createEventDispatcher<{
		updateGame: GameData;
	}>();

	$: enabled = game.status === 'PLAYING' || game.status === 'READY';

	onMount(() => {
		setInterval(() => {
			if (game.status === 'PLAYING') {
				game.elapsedSeconds = Math.floor((new Date().getTime() - game.startTime) / 1000);
				dispatch('updateGame', game);
			}
		}, 500);
	});

	function handleDiscard() {
		gameOver(game);
		game.isGameOverPopupOpen = true;
		dispatch('updateGame', game);
	}

	function handleChangeMark(ev: CustomEvent<GridData>) {
		changeMark(game, ev.detail);
		dispatch('updateGame', game);
	}

	function handleOpenCover(ev: CustomEvent<GridData>) {
		openCover(game, ev.detail);
		dispatch('updateGame', game);
	}
</script>

<div class="game-page">
	<div>
		<div class="header">
			<Title />
			{#if game.status === 'READY' || game.status === 'PLAYING'}
				<button class="discard" on:click={handleDiscard}>✘</button>
			{/if}
		</div>
		<div class="info">
			<MineCounter count={game.restBombCount} />
			<ElapsedTimeCounter seconds={game.elapsedSeconds} />
		</div>
		<BoardView board={game.board} isDisabled={!enabled}
							 on:changeMark={handleChangeMark}
							 on:openCover={handleOpenCover} />
	</div>
	{#if game.isGameOverPopupOpen}
		<GameOverPopup on:backToMenu on:retry />
	{/if}
	{#if game.status === 'COMPLETE'}
		<CongratulationPopup time={game.endTime} bestTime={game.bestTime} on:backToMenu on:retry />
	{/if}
</div>

<style>
    .game-page {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        padding: 8px;
        border-radius: 8px;
    }

    .header {
        display: flex;
        user-select: none;
    }

    .discard {
        margin-left: auto;
    }

    .discard:hover {
        color: red;
        cursor: pointer;
    }

    .info {
        display: grid;
        grid-template-columns: 2fr 1fr;
        user-select: none;
        margin-bottom: 8px;
    }


</style>