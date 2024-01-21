<script>
	// @ts-nocheck
	import { createEventDispatcher } from "svelte";

	import Counter from "./Counter.svelte";

	export let id;
	/**
	 * @type {any}
	 */
	export let name;
	/**
	 * @type {any}
	 */
	export let description;
	/**
	 * @type {{ src: any; }}
	 */
	export let source;
	/**
	 * @type {{ src: any; }}
	 */
	export let alt;
	/**
	 * @type {any}
	 */
	export let pricePerItem;
	/**
	 * @type {number}
	 */
	export let numOfItem;
	/**
	 * @type {any}
	 */
	export let totalPrice;
	/**
	 * @type {boolean}
	 */
	export let inStock;

	const dispatch = createEventDispatcher();

	function handleUpdate() {
        console.log("parent");
		dispatch('update', {totalPrice}, { bubble: true });
	}

	$: totalPrice = (numOfItem * pricePerItem).toFixed(2);
</script>

<div class="flex gap-[0.56rem] pb-[3.12rem] border-b-2 border-gray-300">
	<img src={source} {alt} class="max-w-[12.5rem] max-h-[12.5rem]" />
	<div>
		<div class="flex gap-[2.5rem]">
			<div class="flex flex-col gap-[1rem] w-[18.75rem] h-[10.625rem]">
				<div>
					<p><b>{name}</b></p>
					<p>{description}</p>
				</div>
				<div class="flex flex-col">
					<subtitle>${pricePerItem}</subtitle>
					<subtitle>{inStock ? "In Stock" : "Out of Stock"}</subtitle>
				</div>
			</div>

			<!-- Counter -->
			<Counter bind:value={numOfItem} on:update={handleUpdate}/>

			<p><b>${totalPrice}</b></p>
		</div>
		<div class="flex gap-[1.25rem]">
			<button>
				<subtitle>Remove</subtitle>
			</button>
			<p>|</p>
			<button>
				<subtitle>Save for Later</subtitle>
			</button>
		</div>
	</div>
</div>
