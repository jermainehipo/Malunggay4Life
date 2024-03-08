<script lang="ts">
	import { removeFromCart } from "../../cart";
	import { addToSaved } from "../../saved";

	import CartCounter from "./CartCounter.svelte";

	export let product: Product;
	export let quantity: number;
	export let totalPrice: number;
</script>

<div class="flex flex-col md:flex-row md:w-[50rem] gap-[0.56rem] pb-[2rem] border-b-2 border-gray-300 w-[9rem] md:w-fit xl:w-full">
	<a href="/products/{product.slug.url}">
		<img src={product.src} alt={product.alt} class="object-cover w-[9rem] h-[9rem] md:w-[12rem] md:h-[12.5rem] rounded-xl border" />
	</a>
	<div class="flex flex-col md:flex-none gap-[1rem]">
		<div class="flex flex-col gap-[1rem] md:w-[18rem] h-[8rem] md:h-[10rem]">
			<div>
				<a href="/products/{product.slug.url}" class="hover:underline">
					<p class="overflow-hidden truncate"><b>{product.name}</b></p>
				</a>
				<p class="overflow-hidden truncate">{product.description}</p>
			</div>
			<div class="flex flex-col">
				<p class="subtitle">${product.price.toFixed(2)}</p>
				<p class="subtitle">{product.inStock ? "In Stock" : "Out of Stock"}</p>
			</div>
		</div>
		<div class="flex flex-col md:flex-row gap-[0.8rem] md:gap-[1rem] mb-4">
			<button on:click={() => {removeFromCart(product.id, quantity);}}>
				<p class="hover:underline subtitle">Remove</p>
			</button>
			<p class="hidden md:block">|</p>
			<button on:click={() => {addToSaved(product.id, quantity); removeFromCart(product.id, quantity)}}>
				<p class="hover:underline subtitle">Save for Later</p>
			</button>
		</div>
	</div>
	<!-- Counter -->
	<div class="flex flex-col md:flex-row gap-[1.25rem] md:gap-[2.5rem] md:ml-[2rem] items-center text-right">
		<CartCounter id={product.id} bind:value={quantity} />
		<p><b>${totalPrice.toFixed(2)}</b></p>
	</div>
</div>
