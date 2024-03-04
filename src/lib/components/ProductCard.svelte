<script lang="ts">
	import { get } from "svelte/store";
    import { cartItems, addToCart } from "../../cart";
    import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';

    const toastStore = getToastStore();

    const t: ToastSettings = {
	    message: "Added item to cart!",
        timeout: 5000,
    };

    export let product: Product;
    let image = product.src;
    let cart = get(cartItems); // Get Cart Items
    let cartItemIndex = cart.findIndex((item) => {return item.product.id === product.id })  // Find index that cart item is at
    let cartProduct = cart[cartItemIndex];  // Store product

    // Listen to changes in cartItems and update
    cartItems.subscribe((newCartValue) => {
        cart = newCartValue;
        cartItemIndex = cart.findIndex((item) => {return item.product.id === product.id })
        cartProduct = cart[cartItemIndex];
        console.log(cart);
    })

    const add = (() => {
        addToCart(product.id, 1);
        toastStore.trigger(t);
    });

</script>
<div class="w-fit relative">
    
        <button class="btn bg-primary-500 absolute right-0 bg-primary-500 rounded-[12rem] p-[0.5rem] w-[2.5rem] h-[2.5rem]" on:click={add}>
            <i class="fa-solid fa-plus fa-xl"></i>
        </button>
    <a href="/products/{product.slug.url}" class="hover:no-underline">
        <img src={product.src} alt={product.alt} class="w-[12.5rem] h-[12.5rem]" />
        <p class="hover:underline">{product.name}</p>
        <div class="flex">
            <!-- (January 20, 2024) star from FontAwesome. https://fontawesome.com/icons/star?f=classic&s=solid -->
            <i class="fa-solid fa-star" style="color: #ffd500;"></i>
            <i class="fa-solid fa-star" style="color: #ffd500;"></i>
            <i class="fa-solid fa-star" style="color: #ffd500;"></i>
            <i class="fa-solid fa-star" style="color: #ffd500;"></i>
            <i class="fa-solid fa-star" style="color: #ffd500;"></i>
        </div>
        <p><b>${product.price.toFixed(2)}</b></p>
    </a>

</div>