<script lang="ts">
	import { removeFromCart } from "../../cart";

	import Counter from "./Counter.svelte";

	export let id: any;
	export let name: any;
	export let description: any;
	export let src: any;
	export let alt: any;
	export let price: any;
	export let quantity: any;
	export let totalPrice: any;
	export let inStock: any;

	$: totalPrice = (quantity * price).toFixed(2);
</script>

<div class="flex gap-[0.56rem] pb-[3.12rem] border-b-2 border-gray-300">
	<img {src} {alt} class="max-w-[12.5rem] max-h-[12.5rem]" />
	<div>
		<div class="flex gap-[2.5rem]">
			<div class="flex flex-col gap-[1rem] w-[18.75rem] h-[10.625rem]">
				<div>
					<p><b>{name}</b></p>
					<p>{description}</p>
				</div>
				<div class="flex flex-col">
					<subtitle>${price}</subtitle>
					<subtitle>{inStock ? "In Stock" : "Out of Stock"}</subtitle>
				</div>
			</div>

			<!-- Counter -->
			<Counter id={id} name={name} price={price} bind:value={quantity}/>

			<p><b>${totalPrice}</b></p>
		</div>
		<div class="flex gap-[1.25rem]">
			<button on:click={() => {removeFromCart(id, quantity)}}>
				<subtitle>Remove</subtitle>
			</button>
			<p>|</p>
			<button>
				<subtitle>Save for Later</subtitle>
			</button>
		</div>
	</div>
</div>
