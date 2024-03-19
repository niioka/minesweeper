<script lang="ts">

	import Title from '$lib/components/Title.svelte';
	import BoardView from '$lib/components/BoardView.svelte';
	import type { GameData } from '$lib/models/game';
	import { createEventDispatcher } from 'svelte';
	import type { BoardData } from '$lib/models/board';
	import BombCountLabel from '$lib/components/BombCountLabel.svelte';

	export let game: GameData;

	const dispatch = createEventDispatcher<{
		updateGame: GameData;
	}>();


	function handleUpdateBoard(event: CustomEvent<BoardData>) {
		dispatch('updateGame', game);
	}
</script>

<div class="game-page">
	<div>
		<div class="header">
			<Title />
			<div class="discard">✘</div>
		</div>
		<div class="info">
			<BombCountLabel count={game.restBombCount} />
			<div class="time">
				⏱{("000" + game.elapsedSeconds).slice(-3)}
			</div>
		</div>
		<BoardView board={game.board} on:updateBoard={handleUpdateBoard} />
	</div>
</div>

<style>
    .game-page {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
    }

    .header {
        display: flex;
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
    }


    .time {
        color: #444;
        background-color: white;
        font-size: 16px;
        justify-self: end;
    }
</style>