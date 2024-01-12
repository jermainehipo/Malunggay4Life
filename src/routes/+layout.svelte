<script lang="ts">
	import '../app.postcss';
	import { AppBar, AppShell, ListBox} from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { Drawer, getDrawerStore } from "@skeletonlabs/skeleton";
	import { initializeStores } from '@skeletonlabs/skeleton';
	import MobileMenu from './MobileMenu.svelte'

	initializeStores();
	const drawerStore = getDrawerStore();

	let screenSize: number;		// For mobile menu display
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

		// Mobile Menu Drawer Store Config
		const openMobileMenu = () => {
		drawerStore.open({
			id: 'MobileMenu',
			position: 'right'
		});
	};
</script>


<svelte:window bind:innerWidth={screenSize}/>
<Drawer>
	{#if $drawerStore.id === 'MobileMenu'}
		<MobileMenu/>
	{/if}
</Drawer>
<AppShell>
	<svelte:fragment slot="header">
		<AppBar background="bg-secondary-500">
			<svelte:fragment slot="lead">
				{#if screenSize <= 800}
					<button name="Expand for Navigation Menu" on:click={openMobileMenu} class="ml-2 mr-6">
						<!-- (August 6th, 2023) bars from FontAwesome. https://fontawesome.com/icons/bars?f=classic&s=solid -->
						<i class="fa-solid fa-bars fa-xl" />
					</button>
				{/if}
				<a href="/">
					<img class="h-[3rem] md:h-[3.75rem]" alt="Malunggay 4 Life Logo" src="/Logos/M4L-transparent.png">
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if screenSize > 800}
					<div class="flex gap-[2.5rem] content-center">				
						<a href="/shop" class="font-bold place-self-center">Shop</a>
						<a href="/contact-us" class="font-bold place-self-center">Contact Us</a>
						<a href="/our-story" class="font-bold place-self-center">Our Story</a>
						<button class="w-8 h-12">
							<!-- (January 12st, 2024) user from FontAwesome. https://fontawesome.com/icons/user?f=classic&s=solid -->
							<a href="/account">
								<i class="fa-solid fa-user fa-lg"></i>
							</a>
						</button>
						<a href="/cart" class="btn variant-filled-primary m-0 flex gap-2" data-sveltekit-preload-data="hover">
							<i class="fa-solid fa-cart-shopping"></i>
							0
						</a>
					</div>
				{:else}

					<button class="w-8 h-12">
						<!-- (August 6th, 2023) user from FontAwesome. https://fontawesome.com/icons/user?f=classic&s=regular -->
						<a href="/account">
							<i class="fa-regular fa-user fa-lg"></i>
						</a>
					</button>
					<a href="/cart" class="btn variant-filled-primary m-0 flex gap-2" data-sveltekit-preload-data="hover">
						<i class="fa-solid fa-cart-shopping"></i>
						0
					</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<main class="bg-secondary-500 flex items-center justify-center">
		<slot />
	</main>
</AppShell>

