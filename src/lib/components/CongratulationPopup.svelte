<script lang="ts">

	import Button from '$lib/components/Button.svelte';
	import { gameStore } from '$lib/game-store';

	export let time: number | undefined;
	export let bestTime: number | undefined;

	function handleRetryButton() {
		gameStore.retry(new Date().getTime());
	}

	function handleBackToMenuButton() {
		gameStore.backToMenu();
	}
</script>

<div class="popup">
	<div class="title">Congratulation🎉</div>
	<div class="content">
		<div>TIME:</div>
		<div>{time}</div>
		<div>BEST TIME:</div>
		<div>{bestTime}</div>
	</div>
	<div>
		<div class="button">
			<Button on:click={handleRetryButton}>
				RETRY
			</Button>
		</div>
		<div class="button">
			<Button on:click={handleBackToMenuButton}>
				BACK TO MENU
			</Button>
		</div>
	</div>
</div>

<style>
    .popup {
        position: absolute;
        background-color: rgb(255, 255, 255);
        padding: 10px;
        font-size: 12px;
        width: 150px;
    }

    .title {
        font-size: 12px;
        font-weight: bold;
        text-align: center;
    }

    .content {
        display: grid;
        grid-template-columns: 100px auto;
    }

    .button {
        width: 100%;
        margin-top: 5px;
    }
</style>