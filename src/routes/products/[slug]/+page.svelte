<script lang="ts">
	import { get } from "svelte/store";
    import { cartItems, addToCart } from "../../../cart";
    import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import Counter from "$lib/components/Counter.svelte";
	import { onMount } from "svelte";
	import { productItems } from "../../../products";

	export let data;

	let quantity = 1;
	let id = data.slug.options[0].id;
	let pricePerItem = data.slug.options[0].price;
	let price = "";
	let loading = true;

	const products = get(productItems);

	// Everytime select value changes, get select value and obtain id and price per item again
	const handleChange = () => {
		let select = (<HTMLSelectElement>document.getElementById("variation")).value;
		let selectValues = select.split(",");
		id = parseInt(selectValues[0]);
		pricePerItem = parseFloat(selectValues[1]);
	};

	// Update price everytime price per item changes
	$: price = (quantity * ((!pricePerItem)? 0 : pricePerItem)).toFixed(2);

	const toastStore = getToastStore();

    const t: ToastSettings = {
	    message: "Added item to cart!",
        timeout: 5000,
    };

    let cart: Array<CartItem> = get(cartItems); // Get Cart Items
    let cartItemIndex = cart.findIndex((item: CartItem) => {return item.product.id === data.id })  // Find index that cart item is at
    let cartProduct = cart[cartItemIndex];  // Store product

    // Listen to changes in cartItems and update
    cartItems.subscribe((newCartValue: any) => {
        cart = newCartValue;
        cartItemIndex = cart.findIndex((item: CartItem) => {return item.product.id === data.id })
        cartProduct = cart[cartItemIndex];
        console.log(cart);
    })

    const add = (() => {
		let productItemIndex = products.findIndex((item: Product) => {return item.search_id === id})
		let product = products[productItemIndex];
		console.log(product)
        addToCart(product.id, quantity);
        toastStore.trigger(t);
    });

	onMount(() => {
		loading = false;
	});

</script>
{#if loading}
	<div class="h-[60rem]">
		<i class="fa-solid fa-spinner fa-2xl animate-spin absolute top-1/2"></i>
	</div>
{:else}
<main class="flex flex-col lg:flex-row w-[90rem] px-[2rem] md:px-[7rem] gap-[7.75rem] mt-[3.31rem] mb-[7.19rem]">
	<div class="flex flex-col gap-[1.5rem] max-w-[30rem]">
		<div class="flex flex-col gap-[2.81rem]">
			<div>
				<h2>{data.name}</h2>
				<h3>{data.slug?.subtitle}</h3>
			</div>
			<p>{data.slug?.slugDesc1}</p>
			<p>{data.slug?.slugDesc2}</p>
		</div>

		<div class="flex flex-col gap-[0.75rem]">
			<div class="flex flex-col">
				<subtitle>Size</subtitle>
				<select id="variation" on:change={handleChange} class="text-left btn w-fit px-10">
					{#each data.slug.options as option}
						<option value="{option.id + "," + option.price}">{option.label}</option>
					{/each}
				</select>
			</div>
			<div>
				<subtitle>Quantity</subtitle>
				<Counter bind:value={quantity}/>			</div>
		</div>
		<button class="btn bg-primary-500 w-fit" on:click={add}>
			Add to Cart <span class="w-[1.25rem]" />
			<span id="price">${price}</span>
		</button>
	</div>
	<img src={data.src} alt={data.alt} class="max-w-[16rem] md:max-w-[24rem] lg:w-[28rem] object-cover" />
</main>
{/if}