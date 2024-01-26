<script lang="ts">
	import { get } from "svelte/store";
    import { cartItems, addToCart } from "../../../cart";
    import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import Counter from "$lib/components/Counter.svelte";

	export let data;

	let quantity = 1;
	let price = "";

	$: price = (quantity * data.price).toFixed(2);

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
        addToCart(data.id, quantity);
        toastStore.trigger(t);
    });

</script>

<main class="flex flex-col lg:flex-row w-[90rem] px-[2rem] md:px-[7rem] gap-[7.75rem] mt-[3.31rem] mb-[7.19rem]">
	<div class="flex flex-col gap-[1.25rem] max-w-[20rem] sm:max-w-[37.625rem]">
		<div class="flex flex-col gap-[2.81rem]">
			<div>
				<h2>{data.name}</h2>
				<h3>{data.slug?.subtitle}</h3>
			</div>
			<p>{data.slug?.slugDesc1}</p>
			<p>{data.slug?.slugDesc2}</p>
		</div>
		<Counter bind:value={quantity} />
		<button class="btn bg-primary-500 w-fit" on:click={add}>
			Add to Cart <span class="w-[1.25rem]" />${price}
		</button>
	</div>
	<img src={data.src} alt={data.alt} class="max-w-[16rem] md:max-w-[24rem] lg:max-w-[28rem] object-cover" />
</main>
