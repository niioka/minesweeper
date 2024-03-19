<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Title from '$lib/components/Title.svelte';
	import type { StartGameEventPayload } from '$lib/models/game';

	const dispatch = createEventDispatcher<{
		startGame: StartGameEventPayload,
	}>()

	type Mode = {
		name: string;
		width: number;
		height: number;
		bombCount: number;
	}

	const modes: Mode[] = [
		{ name: "Easy", width: 9, height: 9, bombCount: 10 },
		{ name: "Normal", width: 16, height: 16, bombCount: 40 },
		{ name: "Hard", width: 30, height: 16, bombCount: 99 },
	]

	function handleModeButtonClick(mode: Mode) {
		dispatch('startGame', { width: mode.width, height: mode.height, bombCount: mode.bombCount })
	}
</script>

<div class="menu-page">
	<Title />
	<div class="buttons">
		{#each modes as mode}
			<div class="button-wrapper">
				<button class="button" on:click|preventDefault={(event) => handleModeButtonClick(mode)}>
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