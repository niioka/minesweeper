<script lang="ts">
	import { type BoardData } from '$lib/models/board';
	import GridView from '$lib/components/GridView.svelte';

	export let board: BoardData;
	export let isDisabled: boolean = false;

</script>

<div class="board-view"
		 style:width={`${board.width * 20}px`}
		 style:height={`${board.height * 20}px`}
		 style:grid-template-columns={`repeat(${board.width}, 1fr)`}>
	{#each board.grids as grid}
		<GridView grid={grid}
							on:changeMark
							on:openCover
							isDisabled={isDisabled} />
	{/each}
</div>


<style>
    .board-view {
        display: grid;
        background-color: #bbb;
        padding: 4px;
        border-top: 4px solid #999;
        border-left: 4px solid #999;
        border-right: 4px solid #ddd;
        border-bottom: 4px solid #ddd;
    }


</style>