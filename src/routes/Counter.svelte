<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();
	/**
	 * @type {number}
	 */
	 export let value;

	function increment() {
		value += 1;
		dispatch('update');
		console.log("child");
	}

	function decrement() {
		if (value > 0) {
			value -= 1;
			dispatch('update');
			console.log("child");
		}
	}

</script>

<div class="input w-fit flex gap-[0.4rem]">
	<button on:click={decrement}>
		<!-- (January 20th, 2023) minus from FontAwesome. https://fontawesome.com/icons/minus?f=classic&s=solid -->
		<i class="fa-solid fa-minus"></i>
	</button>
	<input type="number" bind:value class="text-center w-[3rem] border-0" />
	<button on:click={increment}>
		<!-- (January 20th, 2023) plus from FontAwesome. https://fontawesome.com/icons/plus?f=classic&s=solid -->
		<i class="fa-solid fa-plus"></i>
	</button>
</div>

<style>
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type="number"] {
		-moz-appearance: textfield;
	}
</style>
