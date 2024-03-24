<script lang="ts">
	import type { GridData } from '$lib/models/board';
	import { createEventDispatcher } from 'svelte';

	export let grid: GridData;
	export let isDisabled: boolean = false;

	const dispatch = createEventDispatcher<{
		openCover: GridData;
		changeMark: GridData;
	}>();

	function neighborMineCountColor() {
		if (grid.neighborBombCount === 1) {
			return 'blue';
		} else if (grid.neighborBombCount === 2) {
			return 'green';
		} else if (grid.neighborBombCount === 3) {
			return 'red';
		} else if (grid.neighborBombCount === 4) {
			return 'purple';
		} else if (grid.neighborBombCount === 5) {
			return 'maroon';
		} else if (grid.neighborBombCount === 6) {
			return 'turquoise';
		} else if (grid.neighborBombCount === 7) {
			return 'black';
		} else if (grid.neighborBombCount === 8) {
			return 'gray';
		}
		return 'black';
	}

	function handleGridRightClick() {
		if (isDisabled) {
			return;
		}
		dispatch('changeMark', grid);
	}

	function handleGridLeftClick() {
		if (isDisabled) {
			return;
		}
		dispatch('openCover', grid);
	}

</script>

{#if grid.displayType === "BLANK"}
	<button class="grid grid--blank" style:color={neighborMineCountColor()} disabled>
		{#if grid.neighborBombCount > 0}{grid.neighborBombCount}{/if}
	</button>
{:else if grid.displayType === "MINE" || grid.displayType === "CLEARED_MINE"}
	<button class="grid" class:grid--burst={grid.displayType === 'MINE'}
					class:grid--cleared={grid.displayType === "CLEARED_MINE"}>
		💣
	</button>
{:else if grid.displayType === "COVERED" || grid.displayType === "FLAG" || grid.displayType === "UNKNOWN"}
	<button class="grid grid--covered"
					on:contextmenu|preventDefault={(ev) => handleGridRightClick()}
					on:click|preventDefault={(ev) => handleGridLeftClick()}
					tabindex="-1"
	>
		{#if grid.displayType === 'FLAG'}🚩{/if}
		{#if grid.displayType === 'UNKNOWN'}❓{/if}
	</button>
{/if}

<style>
    .grid {
        margin: 0;
        padding: 0;
        font-size: 10px;
        text-align: center;
        height: 20px;
        max-height: 20px;
        background-color: #bbb;
        border: 2px solid #bbb;
        user-select: none;
        width: 100%;
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

    .grid--burst {
        background-color: #c66;
        border: 2px solid #c66;
    }

    .grid--cleared {
        background-color: #66c;
        border: 2px solid #66c;
    }
</style>