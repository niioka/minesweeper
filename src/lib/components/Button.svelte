<script lang="ts">

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{
		click: null,
	}>()
	function handleClick() {
		dispatch('click')
	}
</script>

<button class="button" on:click|preventDefault={handleClick}>
		<slot />
</button>

<style>
		.button {
        border: 2px solid #bbb;
        outline: none;
        background-color: #bbb;
        font-size: 10px;
		}

    .button:hover {
        border: 2px solid #888;
    }

    .button:active {
        border: 2px solid #888;
        background-color: #888;
    }
</style>