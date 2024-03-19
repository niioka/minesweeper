<script lang="ts">
	import { type BoardData, type GridData } from '$lib/models/board';
	import { createEventDispatcher } from 'svelte';
	import { changeMark } from '$lib/logics/grid-logic';

	export let board: BoardData;
	export let isDisabled: boolean = false;

	const dispatch = createEventDispatcher<{
		updateBoard: BoardData,
		openCover: GridData,
	}>();

	function handleGridRightClick(grid: GridData) {
		if (isDisabled) {
			return;
		}
		changeMark(grid);
		dispatch('updateBoard', board);
	}

	function handleGridLeftClick(grid: GridData) {
		if (isDisabled) {
			return;
		}
		dispatch('openCover', grid);
	}

	function neighborCount(grid: GridData): string {
		if (grid.neighborBombCount > 0) {
			return grid.neighborBombCount.toString();
		}
		return '\u00A0';
	}

	function markChar(grid: GridData): string {
		if (grid.displayType === 'FLAG') {
			return '🚩';
		} else if (grid.displayType === 'UNKNOWN') {
			return '❓';
		}
		return '\u00A0';
	}


</script>

<div class="board-view"
		 style:width={`${board.width * 20}px`}
		 style:height={`${board.height * 20}px`}
		 style:grid-template-columns={`repeat(${board.width}, 1fr)`}>
	{#each board.grids as grid}
		{#if grid.displayType === "BLANK"}
			<div class="grid grid--blank">
				{neighborCount(grid)}
			</div>
		{:else if grid.displayType === "MINE" || grid.displayType === "CLEARED_MINE"}
			<div class="grid">
				💣
			</div>
		{:else if grid.displayType === "COVERED" || grid.displayType === "FLAG" || grid.displayType === "UNKNOWN"}
			<div class="grid grid--covered"
					 role="button"
					 on:contextmenu|preventDefault={(event) => handleGridRightClick(grid)}
					 on:click|preventDefault={(event) => handleGridLeftClick(grid)}
					 tabindex="-1"
			>
				{markChar(grid)}
			</div>
		{/if}
	{/each}
</div>


<style>
    .board-view {
        background-color: yellow;
        display: inline-grid;
    }

    .grid {
        margin: 0;
        padding: 0;
        font-size: 10px;
        text-align: center;
        width: 16px;
        height: 16px;
        background-color: #bbb;
        border: 2px solid #bbb;
        user-select: none;
        position: relative;
    }

    .grid--blank {
        font-weight: bold;
    }

    .grid--covered {
        border-top: 2px solid #ddd;
        border-left: 2px solid #ddd;
        border-right: 2px solid #999;
        border-bottom: 2px solid #999;
    }


</style>