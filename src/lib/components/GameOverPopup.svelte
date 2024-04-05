<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { gameStore } from '$lib/game-store';


	function handleRetryButtonClick() {
		gameStore.retry(new Date().getTime());
	}

	function handleBackButtonClick() {
		gameStore.backToMenu();
	}
</script>

<div class="root">
	<div class="title">Game Over</div>
	<div class="button">
		<Button on:click={handleRetryButtonClick}>
			RETRY
		</Button>
	</div>
	<div class="button">
		<Button on:click={handleBackButtonClick}>
			BACK TO MENU
		</Button>
	</div>
</div>

<style>
    .root {
        position: absolute;
        background-color: #fff;
        padding: 10px;
        border: 1px black solid;
    }

    .title {
        font-size: 12px;
        font-weight: bold;
    }

    .button {
        width: 100%;
        margin-top: 5px;
    }
</style>