<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import type { StageType } from '$lib/models/game';
	import { gameStore } from '$lib/game-store';
	import { getRandomBombPositions } from '$lib/logics/game-logic.js';


	type Mode = {
		name: string;
		width: number;
		height: number;
		bombCount: number;
		stageType: StageType;
	}

	const modes: Mode[] = [
		{ name: 'Easy', width: 9, height: 9, bombCount: 10, stageType: 'EASY' },
		{ name: 'Normal', width: 16, height: 16, bombCount: 40, stageType: 'NORMAL' },
		{ name: 'Hard', width: 30, height: 16, bombCount: 99, stageType: 'HARD' }
	];

	function handleModeButtonClick(mode: Mode) {
		gameStore.init({
			width: mode.width,
			height: mode.height,
			getMinePositions: getRandomBombPositions(mode.bombCount),
			stageType: mode.stageType,
			currentTime: new Date().getTime()
		});
	}
</script>

<div class="menu-page">
	<Title />
	<div class="buttons">
		{#each modes as mode}
			<div class="button-wrapper">
				<button class="button" on:click|preventDefault={(_ev) => handleModeButtonClick(mode)}>
					<div>{mode.name}</div>
					<div>
						{mode.width} x {mode.height}
					</div>
					<div>{mode.bombCount}</div>
				</button>
			</div>
		{/each}
	</div>
</div>

<style>
    .menu-page {
        background-color: white;
        padding: 1em;
        width: 300px;
    }

    .buttons {
        display: flex;
    }

    .button-wrapper {
        width: 30%;
        margin: 1%;
        position: relative;
    }

    .button-wrapper:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    .button {
        position: absolute;
        display: block;
        font-size: 14px;
        width: 100%;
        height: 100%;
    }
</style>