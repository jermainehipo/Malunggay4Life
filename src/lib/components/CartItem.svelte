<script lang="ts">
	import { removeFromCart } from "../../cart";

	import CartCounter from "./CartCounter.svelte";

	export let product: Product;
	export let quantity: number;
	export let totalPrice: number;
	
</script>

<div class="flex gap-[0.56rem] pb-[3.12rem] border-b-2 border-gray-300">
	<a href="/products/{product.slug.url}"><img src={product.src} alt={product.alt} class="object-cover w-[12rem] h-[12.5rem]" /></a>
	<div>
		<div class="flex gap-[2.5rem]">
			<div class="flex flex-col gap-[1rem] w-[18rem] h-[10.625rem]">
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

			<!-- Counter -->
			<CartCounter id={product.id} bind:value={quantity} />

			<p><b>${totalPrice.toFixed(2)}</b></p>
		</div>
		<div class="flex gap-[1.25rem]">
			<button
				on:click={() => {
					removeFromCart(product.id, quantity);
				}}
			>
				<subtitle>Remove</subtitle>
			</button>
			<p>|</p>
			<button>
				<subtitle>Save for Later</subtitle>
			</button>
		</div>
	</div>
</div>
