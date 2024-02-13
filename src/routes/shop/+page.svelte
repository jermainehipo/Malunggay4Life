<script>
	import ProductCard from "$lib/components/ProductCard.svelte";
	import { get } from "svelte/store";
	import { productItems } from "../../products";
	
	const products = get(productItems);

</script>

<main class="container max-w-[90rem] mb-[7.75rem] px-[1rem] lg:px-[2rem] xl:px-[7.62rem]">
	<div>
		<h1>Our Premium Products</h1>
	</div>
	<div class="flex flex-wrap justify-center gap-[4rem] lg:gap-[6rem] my-8">
		<!-- Product Item -->
		{#each products as product}
			<ProductCard product={product}/>
		{/each}
	</div>
</main>
