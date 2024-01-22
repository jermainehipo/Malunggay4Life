<script lang="ts">
	import { get } from "svelte/store";
    import { cartItems, addToCart } from "../../cart";

    export let id: any;
    export let slug: any;
    export let src: any;
    export let alt: any;
    export let name: any;
    export let price: any;

    export let product : Product = {id: id, name: "", price: ""};
    let cart = get(cartItems); // Get Cart Items
    let cartItemIndex = cart.findIndex((item) => {return item.id === product.id })  // Find index that cart item is at
    let cartProduct = cart[cartItemIndex];  // Store product

    // Listen to changes in cartItems and update
    cartItems.subscribe((newCartValue) => {
        cart = newCartValue;
        cartItemIndex = cart.findIndex((item) => {return item.id === product.id })
        cartProduct = cart[cartItemIndex];
        console.log(cart);
    })
</script>
<div class="w-fit">
    <a href="/products/{slug}" class="hover:bold">
        <img src={src} alt={alt} class="w-[12.5rem] h-[12.5rem] border" />
        <p>{name}</p>
    </a>
    <div class="flex">
        <!-- (January 20, 2024) star from FontAwesome. https://fontawesome.com/icons/star?f=classic&s=solid -->
        <i class="fa-solid fa-star" style="color: #ffd500;"></i>
        <i class="fa-solid fa-star" style="color: #ffd500;"></i>
        <i class="fa-solid fa-star" style="color: #ffd500;"></i>
        <i class="fa-solid fa-star" style="color: #ffd500;"></i>
        <i class="fa-solid fa-star" style="color: #ffd500;"></i>
    </div>
    <p><b>${price}</b></p>
    <button class="btn bg-primary-500 w-full" on:click={() => addToCart(product.id, 1)}>Add to Cart</button>
</div>