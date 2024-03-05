<script lang="ts">
	import { onMount, setContext } from "svelte";
	import { auth, db } from "$lib/firebase/firebase";
	import { getDoc, doc, setDoc, type DocumentData } from "firebase/firestore";
	import "../app.postcss";
	import { AppBar, AppShell, Toast } from "@skeletonlabs/skeleton";
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
	import { storePopup } from "@skeletonlabs/skeleton";
	import { Drawer, getDrawerStore } from "@skeletonlabs/skeleton";
	import { initializeStores } from "@skeletonlabs/skeleton";
	import MobileMenu from "$lib/drawers/MobileMenu.svelte";
	import PageFooter from "$lib/components/PageFooter.svelte";
	import logo from "$lib/Logos/M4L-transparent.png";
	import { authStore } from "../store/store";
	import { cartItems } from "../cart";
	import { get } from "svelte/store";

	initializeStores();
	const drawerStore = getDrawerStore();
	const authRoutes = ["/account"];
	const scrollExceptions = ["/account", "/log-in", "/sign-up"];

	let screenSize: number; // For mobile menu display
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Mobile Menu Drawer Store Config
	const openMobileMenu = () => {
		drawerStore.open({
			id: "MobileMenu",
			position: "right",
		});
	};

	// Cart button text updating
	let cart = get(cartItems);
	let totalItems = 0;
	cart.forEach((cartItem) => {
		totalItems += cartItem.quantity;
	});

	// Listen to changes in cartItems and update
	const unsubscribeCart = cartItems.subscribe((newCartValue) => {
		cart = newCartValue;
		totalItems = 0;
		cart.forEach((cartItem) => {
			totalItems += cartItem.quantity;
		});
	});

	onMount(() => {
		console.log("Mounting");

		const currentPath = window.location.pathname; // Get current path

		// Have pages start from the top everytime besides for account page
		if (!scrollExceptions.includes(currentPath)) {
			setContext("scroll", "top");
		}

		const unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
			// If not authenticated and attempted access on auth route, redirect
			if (!user && authRoutes.includes(currentPath)) {
				window.location.href = "/log-in";
				return;
			}

			if (!user) return;

			let dataToSetToStore: DocumentData;
			const docRef = doc(db, "users", user.uid);
			const docSnap = await getDoc(docRef);
			if (!docSnap.exists()) {
				const userRef = doc(db, "user", user.uid);
				dataToSetToStore = {
					email: user.email,
					todos: [],
				};
				await setDoc(userRef, dataToSetToStore, { merge: true });
			} else {
				const userData = docSnap.data();
				dataToSetToStore = userData;
			}
			authStore.update((curr) => {
				return {
					...curr,
					user,
					loading: false,
					data: dataToSetToStore,
				};
			});
		});

		return () => {
			unsubscribeCart();
			unsubscribeAuth();
		};
	});
</script>

<svelte:window bind:innerWidth={screenSize} />

<Drawer>
	{#if $drawerStore.id === "MobileMenu"}
		<MobileMenu />
	{/if}
</Drawer>
<Toast position="tr" class="mt-[4rem]" buttonDismiss="btn-icon bg-primary-500" />
<AppShell>
	<svelte:fragment slot="header">
		<div class="flex justify-center">
			<div class="w-[90rem] bg-black">
				<AppBar background="bg-secondary-500">
					<svelte:fragment slot="lead">
						{#if screenSize <= 800}
							<button name="Expand for Navigation Menu" on:click={openMobileMenu} class="mr-3">
								<!-- (August 6th, 2023) bars from FontAwesome. https://fontawesome.com/icons/bars?f=classic&s=solid -->
								<i class="fa-solid fa-bars fa-xl" />
							</button>
						{/if}
						<a href="/">
							<img class="max-h-[3.75rem]" alt="Malunggay 4 Life Logo" src={logo} />
						</a>
					</svelte:fragment>
					<svelte:fragment slot="trail">
						{#if screenSize > 800}
							<div class="flex gap-[2.5rem] content-center">
								<a href="/shop" class="font-bold place-self-center">Shop</a>
								<a href="/contact-us" class="font-bold place-self-center">Contact Us</a>
								<a href="/our-story" class="font-bold place-self-center">Our Story</a>
								<button id="account_1" class="w-8 h-12">
									<!-- (January 12st, 2024) user from FontAwesome. https://fontawesome.com/icons/user?f=classic&s=solid -->
									{#if !auth.currentUser}
									<a href="/log-in">
										<i class="fa-solid fa-user fa-lg"></i>
									</a>
									{:else} 
									<a href="/account">
										<i class="fa-solid fa-user fa-lg"></i>
									</a>
									{/if}
								</button>
								<a href="/cart" class="btn bg-primary-500 w-[8rem] m-0 flex gap-2" data-sveltekit-preload-data="hover">
									<i class="fa-solid fa-cart-shopping"></i>
									Cart {totalItems}
								</a>
							</div>
						{:else}
							<button class="w-8 h-12">
								<!-- (January 12st, 2024) user from FontAwesome. https://fontawesome.com/icons/user?f=classic&s=solid -->
								{#if !auth.currentUser}
									<a href="/log-in">
										<i class="fa-solid fa-user fa-lg"></i>
									</a>
									{:else} 
									<a href="/account">
										<i class="fa-solid fa-user fa-lg"></i>
									</a>
									{/if}
							</button>
							<a href="/cart" class="btn variant-filled-primary m-0 flex gap-2" data-sveltekit-preload-data="hover">
								<i class="fa-solid fa-cart-shopping"></i>
								{totalItems}
							</a>
						{/if}
					</svelte:fragment>
				</AppBar>
			</div>
		</div>
	</svelte:fragment>
	<main class="bg-secondary-500 flex items-center justify-center">
		<slot />
	</main>
	<div class="flex justify-center">
		<div class="container max-w-[90rem]"><PageFooter /></div>
	</div>
</AppShell>