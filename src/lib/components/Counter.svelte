<script lang="ts">
	import { get } from "svelte/store";
    import { cartItems, addToCart, removeFromCart } from "../../cart";

	export let id: any;
	export let value: any;

    let cart = get(cartItems); // Get Cart Items
    let cartItemIndex = cart.findIndex((item) => {return item.product.id === id })  // Find index that cart item is at
    let cartProduct = cart[cartItemIndex];  // Store product

    // Listen to changes in cartItems and update
    cartItems.subscribe((newCartValue) => {
        cart = newCartValue;
        cartItemIndex = cart.findIndex((item) => {return item.product.id === id })
        cartProduct = cart[cartItemIndex];
        console.log(cart);
    })

	function increment() {
		value += 1;
		addToCart(id, 1);
	}

	function decrement() {
		if (value > 0) {
			value -= 1;
		}
		removeFromCart(id, 1);
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
