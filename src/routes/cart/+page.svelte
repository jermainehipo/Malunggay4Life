<script lang="ts">
	import CartItem from "$lib/components/CartItem.svelte";
	import { get } from "svelte/store";
	import { cartItems } from "../../cart";
	import { onDestroy } from "svelte";
	import SavedItem from "../../lib/components/SavedItem.svelte";
	import { savedItems } from "../../saved";
	import { ProgressBar } from "@skeletonlabs/skeleton";

	// Cart button text updating
	let cart = get(cartItems);
	let saved = get(savedItems);
	let totalItems = 0;
	let subtotal = 0;
	let freeShippingCost = 79.00;
	let screenSize: number;

	$: freeShippingCost = 79.00 - subtotal;

	// Calculate total number of items in cart
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

	const unsubscribeSaved = savedItems.subscribe((newSavedValue) => {
		saved = newSavedValue;
	});

	async function checkout() {
		if (cart.length == 0) return; // If there are no items in the cart, do nothing
		await fetch("../api/stripeCheckout", {
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

	onDestroy(() => {
		unsubscribeCart();
		unsubscribeSaved();
	});

</script>

<svelte:window bind:innerWidth={screenSize} />

<main class="container max-w-[90rem] px-[1rem] lg:px-[2rem] xl:px-[7.62rem] mt-[4.37rem]">
	<h1 class="text-center">Your Shopping Cart</h1>
	<div class="border p-[1rem] rounded-2xl my-4 flex gap-[1.25rem] mt-[3.31rem]">
		<div class="bg-primary-500 rounded-[12rem] px-[0.9rem] py-[0.8rem] w-[3rem] h-[3rem]">
			<i class="fa-solid fa-check fa-xl"></i>
		</div>
		<span class="grid content-center">
			<p>Explore premium supplements with a satisfaction guarantee. Not happy? We've got you covered, your well-being is our commitment.</p>
		</span>
	</div>

	{#if screenSize <= 1300}
	<div class="border-l-2 border-gray-500 p-[1.31rem] w-fit">
		<div class="mb-[2rem] flex flex-col gap-[0.5rem]">
			{#if freeShippingCost > 0}
				<p>Spend ${freeShippingCost.toFixed(2)} more for free shipping!</p>
			{:else}
				<p>Yay! You've earned free shipping!</p>
			{/if}
			<ProgressBar max={79} value={ subtotal } meter="bg-primary-500"></ProgressBar>
		</div>
		<div class="grid grid-cols-[12rem_minmax(3.75rem,_1fr)] sm:grid-cols-[18.75rem_minmax(3.75rem,_1fr)] border-b-2 border-gray-500 pb-[0.5rem]">
			<p><b>Subtotal (Items {totalItems})</b></p>
			<p><b>${subtotal.toFixed(2)}</b></p>
			<p>Shipping</p>
			{#if freeShippingCost > 0}
				<p>TBD</p>
			{:else}
				<p><b>FREE</b></p>
			{/if}
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
		<div class="flex flex-wrap gap-[1rem] md:gap-[1.25rem]">
			{#if screenSize > 767}
				<div class="flex gap-[1.25rem] w-[50rem] h-fit pb-[0.5rem] border-b-2 border-gray-500">
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
			<div class="mb-[3rem] flex flex-col gap-[0.5rem]">
				{#if freeShippingCost > 0}
					<p>Spend ${freeShippingCost.toFixed(2)} more for free shipping!</p>
				{:else}
					<p>Yay! You've earned free shipping!</p>
				{/if}
				<ProgressBar max={79} value={ subtotal } meter="bg-primary-500"></ProgressBar>
			</div>
			<div class="grid grid-cols-[18.75rem_minmax(3.75rem,_1fr)] border-b-2 border-gray-500 pb-[0.5rem]">
				<p><b>Subtotal (Items {totalItems})</b></p>
				<p><b>${subtotal.toFixed(2)}</b></p>
				<p>Shipping</p>
				{#if freeShippingCost > 0}
					<p>TBD</p>
				{:else}
					<p><b>FREE</b></p>
				{/if}
				<p>Tax</p>
				<p>TBD</p>
			</div>
			<div class="grid grid-cols-[18.75rem_minmax(3.75rem,_1fr)] my-[0.5rem]">
				<p>Estimated Total</p>
				<p>${subtotal.toFixed(2)}</p>
			</div>
			<button class="btn bg-primary-500" on:click={() => checkout()}>Checkout</button>
		</div>
		{/if}
	</div>

	<div class="flex flex-col gap-[1.25rem] mb-[7.19rem]">
		<div class="py-[0.5rem] border-y-2 border-gray-500">
			<h3><b>Saved Items</b></h3>
		</div>
		<!-- Saved Items -->
		{#each saved as {product, quantity, totalPrice}}
			<SavedItem {product} {quantity} {totalPrice} />
		{/each}
	</div>
</main>
