<script lang="ts">
	export let count: number;

	let restBombCountStr = '';
	$: {
		if (count <= -100) {
			restBombCountStr = '-99';
		} else if (count < 0) {
			restBombCountStr = '-' + ('00' + -count).slice(-2);
		} else if (count >= 1000) {
			restBombCountStr = '999';
		} else {
			restBombCountStr = ('000' + count).slice(-3);
		}
	}

</script>

<div class="bomb-count">💣{restBombCountStr}</div>

<style>
    .bomb-count {
        color: #444;
        background-color: white;
        justify-self: start;
        font-size: 16px;
    }
</style>