<script lang="ts">
    import { addToCart, removeFromCart } from "../../cart";

	export let id: any;
	export let value: any;

	function increment() {
		addToCart(id, 1);
		value += 1;
	}

	function decrement() {
		removeFromCart(id, 1);
		if (value > 0) {
			value -= 1;
		}
	}


</script>

<div class="input w-fit flex gap-[0.4rem]">
	<button on:click={decrement}>
		<!-- (January 20th, 2023) minus from FontAwesome. https://fontawesome.com/icons/minus?f=classic&s=solid -->
		<i class="fa-solid fa-minus"></i>
	</button>
	<input type="number" bind:value class="text-center w-[3rem] border-0" readonly/>
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
