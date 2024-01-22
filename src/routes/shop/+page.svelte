<script>
	import ProductCard from "$lib/components/ProductCard.svelte";
	export let data;

</script>

<main class="container max-w-[90rem] mt-[4.37rem] mb-[7.75rem]">
	<div>
		<h1 class="text-[3rem] leading-[3.7rem] sm:text-[64px] sm:leading-[80px] text-center">Our Premium Moringa Products</h1>
	</div>
	<div class="flex flex-wrap justify-center gap-[4rem] lg:gap-[6rem] my-8">
		<!-- Product Item -->
		{#each data.products as {id, slug, src, alt, name, price}}
			<ProductCard id={id} slug={slug} src={src} alt={alt} name={name} price={price}/>
		{/each}
	</div>
</main>
