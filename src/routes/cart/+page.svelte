<script lang="ts">
	import CartItem from "$lib/components/CartItem.svelte";
	import { get } from "svelte/store";
	import { cartItems } from "../../cart";
	import { onDestroy } from "svelte";

	export let data;

	// Cart button text updating
	let cart = get(cartItems);
	let totalItems = 0;
	let subtotal = 0;
	let screenSize: number;

	if (cart.length != 0) {
		cart.forEach((cartItem) => {
			totalItems += cartItem.quantity;
		});
	}

	// Listen to changes in cartItems and update
	const unsubscribeCart = cartItems.subscribe((newCartValue) => {
		cart = newCartValue;
		totalItems = 0;
		subtotal = 0;
		cart.forEach((cartItem) => {
			totalItems += cartItem.quantity;
			subtotal += cartItem.totalPrice;
		});
	});

	async function checkout() {
		await fetch("api/stripeCheckout", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(
				{ items: cart }
			)
		}).then((data) => {
			return data.json();
		}).then((data) => {
			window.location.replace(data.url);
		})
	}

	onDestroy(unsubscribeCart);

</script>

<svelte:window bind:innerWidth={screenSize} />

<main class="container max-w-[90rem] mt-[4.37rem] px-[1rem] lg:px-[2rem] xl:px-[7.62rem]">
	<div>
		<h1 class="text-[3rem] leading-[3.7rem] sm:text-[64px] sm:leading-[80px] text-center">Your Shopping Cart</h1>
	</div>

	{#if screenSize <= 1300}
	<div class="border-l-2 border-gray-500 p-[1.31rem] w-fit mt-[4rem]">
		<div class="grid grid-cols-[12rem_minmax(3.75rem,_1fr)] sm:grid-cols-[18.75rem_minmax(3.75rem,_1fr)] border-b-2 border-gray-500 pb-[0.5rem]">
			<p><b>Subtotal (Items {totalItems})</b></p>
			<p><b>${subtotal.toFixed(2)}</b></p>
			<p>Shipping</p>
			<p>TBD</p>
			<p>Tax</p>
			<p>TBD</p>
		</div>
		<div class="grid grid-cols-[12rem_minmax(3.75rem,_1fr)] sm:grid-cols-[18.75rem_minmax(3.75rem,_1fr)] my-[0.5rem]">
			<p>Estimated Total</p>
			<p>${subtotal.toFixed(2)}</p>
		</div>
		<button class="btn bg-primary-500" on:click={() => checkout()}>Checkout</button>
	</div>
	{/if}

	<div class="flex mt-[3.31rem] mb-[7.19rem]">
		<!-- Item Table -->
		<div class="flex flex-wrap gap-[2rem] md:gap-[1.25rem]">
			{#if screenSize > 767}
			<div class="flex gap-[1.25rem] pb-[0.5rem] border-b-2 border-gray-500">
				<p class="w-[32rem]"><b>Items</b></p>
				<p class="w-[7.5rem] text-center"><b>Quantity</b></p>
				<p class="w-[6rem] text-center"><b>Price</b></p>
			</div>
			{/if}
			<!-- Cart Item -->
			{#each cart as { product, quantity, totalPrice }}
				<CartItem {product} {quantity} {totalPrice} />
			{/each}
		</div>

		<!-- Total -->
		{#if screenSize > 1300}
		<div class="border-l-2 border-gray-500 p-[1.31rem]">
			<div class="grid grid-cols-[18.75rem_minmax(3.75rem,_1fr)] border-b-2 border-gray-500 pb-[0.5rem]">
				<p><b>Subtotal (Items {totalItems})</b></p>
				<p><b>${subtotal.toFixed(2)}</b></p>
				<p>Shipping</p>
				<p>TBD</p>
				<p>Tax</p>
				<p>TBD</p>
			</div>
			<div class="grid grid-cols-[18.75rem_minmax(3.75rem,_1fr)] my-[0.5rem]">
				<p>Estimated Total</p>
				<p>${subtotal.toFixed(2)}</p>
			</div>
			<button class="btn bg-primary-500">Checkout</button>
		</div>
		{/if}
	</div>

	<div class="flex flex-col gap-[1.25rem] mb-[7.19rem]">
		<div class="py-[0.5rem] border-y-2 border-gray-500">
			<h3><b>Saved Items</b></h3>
		</div>
		<!-- Saved Items -->
		{#each data.savedItems as item}
			<div class="flex gap-[0.56rem] pb-[3.12rem] border-b-2 border-gray-300">
				<img src={item.src} alt={item.alt} class="max-w-[12.5rem] max-h-[12.5rem]" />
				<div>
					<div class="flex gap-[2.5rem]">
						<div class="flex flex-col gap-[1rem] w-[18.75rem] h-[10.625rem]">
							<div>
								<p><b>{item.name}</b></p>
								<p>{item.description}</p>
							</div>
							<div class="flex flex-col">
								<subtitle>${item.price}</subtitle>
								<subtitle>{item.inStock ? "In Stock" : "Out of Stock"}</subtitle>
							</div>
						</div>
						<p><b>$19.99</b></p>
					</div>
					<div class="flex gap-[1.25rem]">
						<button class="btn bg-primary-500">Move to Cart</button>
						<button>
							<subtitle>Remove</subtitle>
						</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>
