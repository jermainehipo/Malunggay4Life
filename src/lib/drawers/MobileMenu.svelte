<script>
	import { getDrawerStore } from "@skeletonlabs/skeleton";
	import logo from "$lib/Logos/M4L-transparent.png";
	import { auth } from "$lib/firebase/firebase";
	const drawerStore = getDrawerStore();

	function closeDrawer() {
		drawerStore.close();
	}
</script>

<main class="p-8 bg-secondary-500 h-full">
	<!-- (August 6th, 2023) xmark from FontAwesome. https://fontawesome.com/icons/xmark?f=classic&s=solid&sz=2xl -->
	<div class="flex gap-[3rem]">
		<button on:click={closeDrawer}>
			<i class="fa-solid fa-xmark fa-2xl"></i>
		</button>
		<div class="">
			<img class="w-[12rem]" alt="Malunggay4Life" src={logo} />
		</div>
	</div>

	<div class="flex flex-col p-8 pt-20 gap-8">
		<a href="/shop" class="font-bold" on:click={closeDrawer}>Shop</a>
		<a href="/contact-us" class="font-bold" on:click={closeDrawer}>Contact Us</a>
		<a href="/our-story" class="font-bold" on:click={closeDrawer}>Our Story</a>
		{#if !auth.currentUser}
			<a href="/log-in" class="font-bold" on:click={closeDrawer}>Log In</a>
		{:else}
			<a href="/account" class="font-bold" on:click={closeDrawer}>Account</a>
		{/if}
	</div>
</main>
