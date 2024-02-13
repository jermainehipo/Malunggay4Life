<script lang="ts">
	import { removeFromCart } from "../../cart";
	import { addToSaved } from "../../saved";

	import CartCounter from "./CartCounter.svelte";

	export let product: Product;
	export let quantity: number;
	export let totalPrice: number;
</script>

<div class="flex flex-col md:flex-row gap-[0.56rem] pb-[2rem] border-b-2 border-gray-300 w-full">
	<a href="/products/{product.slug.url}">
		<img src={product.src} alt={product.alt} class="object-cover min-w-[12rem] min-h-[12.5rem] max-w-[12rem] max-h-[12.5rem] rounded-xl border" />
	</a>
	<div class="flex flex-col md:flex-none gap-[1rem]">
		<div class="flex flex-col gap-[1rem] md:w-[18rem] h-[10rem]">
			<div>
				<a href="/products/{product.slug.url}" class="hover:underline">
					<p><b>{product.name}</b></p>
				</a>
				<p>{product.description}</p>
			</div>
			<div class="flex flex-col">
				<subtitle>${product.price}</subtitle>
				<subtitle>{product.inStock ? "In Stock" : "Out of Stock"}</subtitle>
			</div>
		</div>
		<div class="flex gap-[1rem]">
			<button on:click={() => {removeFromCart(product.id, quantity);}}>
				<subtitle>Remove</subtitle>
			</button>
			<p>|</p>
			<button on:click={() => {addToSaved(product.id, quantity); removeFromCart(product.id, quantity)}}>
				<subtitle>Save for Later</subtitle>
			</button>
		</div>
	</div>
	<!-- Counter -->
	<div class="flex gap-[1.25rem] md:gap-[2.5rem] md:ml-[2rem] items-center text-right">
		<CartCounter id={product.id} bind:value={quantity} />
		<p><b>${totalPrice.toFixed(2)}</b></p>
	</div>
</div>
