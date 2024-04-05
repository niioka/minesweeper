<script lang="ts">

	import Title from '$lib/components/Title.svelte';
	import BoardView from '$lib/components/BoardView.svelte';
	import type { CompleteState, GameData, GameOverState, PlayingState } from '$lib/models/game';
	import { createEventDispatcher, onMount } from 'svelte';
	import type { GridData } from '$lib/models/board';
	import MineCounter from '$lib/components/MineCounter.svelte';
	import GameOverPopup from '$lib/components/GameOverPopup.svelte';
	import CongratulationPopup from '$lib/components/CongratulationPopup.svelte';
	import ElapsedTimeCounter from '$lib/components/ElapsedTimeCounter.svelte';
	import { gameStore } from '$lib/game-store';

	export let state: PlayingState | GameOverState | CompleteState;


	const dispatch = createEventDispatcher<{
		updateGame: GameData;
	}>();

	$: enabled = state.type === 'PLAYING';
	$: game = state.game;
	$: isGameOverPopupOpen = state.type === 'GAME-OVER' && state.q === 'POPUP-OPEN';

	onMount(() => {
		setInterval(() => gameStore.tick(new Date().getTime()), 100);
	});

	function handleChangeMark(ev: CustomEvent<GridData>) {
		gameStore.changeMark(ev.detail);
	}

	function handleOpenCover(ev: CustomEvent<GridData>) {
		gameStore.openCover(ev.detail);
	}
</script>

<div class="game-page">
	<div>
		<div class="header">
			<Title />
			{#if enabled}
				<button class="discard" on:click={(ev) => gameStore.giveUp()}>✘</button>
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
	{#if isGameOverPopupOpen}
		<GameOverPopup />
	{/if}
	{#if state.type === 'COMPLETE' && state.q === 'POPUP-OPEN'}
		<CongratulationPopup time={game.elapsedSeconds} bestTime={state.bestTime} />
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
        user-select: none;
    }

    .header {
        display: flex;
        height: 30px;
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