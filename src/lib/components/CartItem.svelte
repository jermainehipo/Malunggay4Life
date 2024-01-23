<script lang="ts">
	import { get } from "svelte/store";
	import { cartItems, removeFromCart } from "../../cart";

	import Counter from "./Counter.svelte";

	export let product: Product;
	export let quantity: number;
	export let totalPrice: number;
	
</script>

<div class="flex gap-[0.56rem] pb-[3.12rem] border-b-2 border-gray-300">
	<img src={product.src} alt={product.alt} class="max-w-[12.5rem] max-h-[12.5rem]" />
	<div>
		<div class="flex gap-[2.5rem]">
			<div class="flex flex-col gap-[1rem] w-[18.75rem] h-[10.625rem]">
				<div>
					<p><b>{product.name}</b></p>
					<p>{product.description}</p>
				</div>
				<div class="flex flex-col">
					<subtitle>${product.price}</subtitle>
					<subtitle>{product.inStock ? "In Stock" : "Out of Stock"}</subtitle>
				</div>
			</div>

			<!-- Counter -->
			<Counter id={product.id} bind:value={quantity} />

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
