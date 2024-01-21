<script>
	// @ts-nocheck
	import CartItem from "../CartItem.svelte";
	export let data;
    let id;
    let newPrice;

	$: totalItems = data.cartItems.length;

	function calculateTotal() {
        let subtotal = 0;
		data.cartItems.forEach((cartItem) => {
			subtotal += cartItem.totalPrice;
		});
        return subtotal.toFixed(2);
	}
    

</script>

<main class="container max-w-[90rem] mt-[4.37rem] px-[7.75rem]">
	<div class="flex justify-center">
		<h1>Your Shopping Cart</h1>
	</div>

	<div class="flex mt-[3.31rem] mb-[7.19rem]">
		<!-- Item Table -->
		<div class="flex flex-col justify-center gap-[1.25rem]">
			<div class="flex gap-[1.25rem] pb-[0.5rem] border-b-2 border-gray-500">
				<p class="w-[32rem]"><b>Item</b></p>
				<p class="w-[7.5rem] text-center"><b>Quantity</b></p>
				<p class="w-[6rem] text-center"><b>Price</b></p>
			</div>
			<!-- Cart Item -->
			{#each data.cartItems as { id, name, description, source, alt, pricePerItem, numOfItem, totalPrice, inStock }}
				<CartItem on:update={calculateTotal} {id} {name} {description} {source} {alt} {pricePerItem} {numOfItem} {totalPrice} {inStock} />
                asfd
			{/each}
		</div>

		<!-- Total -->
		<div class="border-l-2 border-gray-500 p-[1.31rem]">
			<div class="grid grid-cols-[18.75rem_minmax(3.75rem,_1fr)] border-b-2 border-gray-500 pb-[0.5rem]">
				<p><b>Subtotal (Items {totalItems})</b></p>
				<p><b>${calculateTotal()}</b></p>
				<p>Shipping</p>
				<p>TBD</p>
				<p>Tax</p>
				<p>TBD</p>
			</div>
			<div class="grid grid-cols-[18.75rem_minmax(3.75rem,_1fr)] my-[0.5rem]">
				<p>Estimated Total</p>
				<p>${calculateTotal()}</p>
			</div>
			<button class="btn bg-primary-500">Checkout</button>
		</div>
	</div>

	<div class="flex flex-col gap-[1.25rem] mb-[7.19rem]">
		<div class="py-[0.5rem] border-y-2 border-gray-500">
			<h3><b>Saved Items</b></h3>
		</div>
		<!-- Saved Items -->
		{#each data.savedItems as item}
			<div class="flex gap-[0.56rem] pb-[3.12rem] border-b-2 border-gray-300">
				<img src={item.source} alt={item.alt} class="max-w-[12.5rem] max-h-[12.5rem]" />
				<div>
					<div class="flex gap-[2.5rem]">
						<div class="flex flex-col gap-[1rem] w-[18.75rem] h-[10.625rem]">
							<div>
								<p><b>{item.name}</b></p>
								<p>{item.description}</p>
							</div>
							<div class="flex flex-col">
								<subtitle>${item.pricePerItem}</subtitle>
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
