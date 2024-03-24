<script lang="ts">
	export let seconds: number = 0;
</script>

<div class="time">
	⏱{("000" + seconds).slice(-3)}
</div>

<style>
    .time {
        color: #444;
        background-color: white;
        font-size: 16px;
        justify-self: end;
    }
</style>