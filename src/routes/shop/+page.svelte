<script>
	import ProductCard from "$lib/components/ProductCard.svelte";
	import { get } from "svelte/store";
	import { displayProducts } from "../../products";
	import { onMount } from "svelte";
	
	const products = get(displayProducts);

	let loading = true;

	onMount(() => {
		loading = false;
	});

</script>

{#if loading}
	<div class="h-[60rem]">
		<i class="fa-solid fa-spinner fa-2xl animate-spin absolute top-1/2"></i>
	</div>
{:else}
	<main class="container max-w-[90rem] mb-[7.75rem] px-[1rem] lg:px-[2rem] xl:px-[7.62rem]">
		<div>
			<h1>Our Premium Products</h1>
		</div>
		<div class="flex flex-wrap justify-center sm:justify-normal gap-[1rem] md:gap-[2rem] my-8">
			<!-- Product Item -->
			{#each products as product}
				<ProductCard product={product}/>
			{/each}
		</div>
	</main>
{/if}