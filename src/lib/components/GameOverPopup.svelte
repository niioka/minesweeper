<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{
		retry: null,
		backToMenu: null,
	}>();

	function handleRetryButtonClick() {
		dispatch('retry');
	}

	function handleBackButtonClick() {
		dispatch('backToMenu');
	}
</script>

<div class="root">
	<div class="title">Game Over</div>
	<div class="button">
		<Button on:click={handleRetryButtonClick}>
			Retry
		</Button>
	</div>
	<div class="button">
		<Button on:click={handleBackButtonClick}>
			Back to MENU
		</Button>
	</div>
</div>

<style>
    .root {
        position: absolute;
        background-color: #fff;
        padding: 10px;
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