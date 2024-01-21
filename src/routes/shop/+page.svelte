<script>
	export let data;
</script>

<main class="container max-w-[90rem] mt-[4.37rem] mb-[7.75rem]">
	<div class="flex justify-center">
		<h1>Our Premium Moringa Powder</h1>
	</div>
	<div class="flex flex-wrap justify-center gap-[4rem] lg:gap-[6rem] my-8">
		<!-- Product Item -->
		{#each data.items as item}
			<div class="w-fit">
				<a href="/products/{item.slug}" class="hover:bold">
					<img src={item.image.src} alt={item.image.alt} class="w-[12.5rem] h-[12.5rem] border" />
					<p>{item.name}</p>
				</a>
				<div class="flex">
					<!-- (January 20, 2024) star from FontAwesome. https://fontawesome.com/icons/star?f=classic&s=solid -->
					<i class="fa-solid fa-star" style="color: #ffd500;"></i>
					<i class="fa-solid fa-star" style="color: #ffd500;"></i>
					<i class="fa-solid fa-star" style="color: #ffd500;"></i>
					<i class="fa-solid fa-star" style="color: #ffd500;"></i>
					<i class="fa-solid fa-star" style="color: #ffd500;"></i>
				</div>
				<p><b>${item.pricePerItem}</b></p>
				<button class="btn bg-primary-500 w-full">Add to Cart</button>
			</div>
		{/each}
	</div>
</main>
