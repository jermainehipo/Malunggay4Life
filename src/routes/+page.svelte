<script lang="ts">
	import { Avatar } from "@skeletonlabs/skeleton";
	import leaves from "$lib/Images/leaves.jpg";
	import story from "$lib/Images/story.jpg";

	export let data;

	let screenSize: number;
	let elemReviews: HTMLDivElement;

	/** Move review cards left*/
	function multiColumnLeft(): void {
		let x = elemReviews.scrollWidth;
		if (elemReviews.scrollLeft !== 0) x = elemReviews.scrollLeft - elemReviews.clientWidth;
		elemReviews.scroll(x, 0);
	}

	/** Move review cards right*/
	function multiColumnRight(): void {
		let x = 0;
		// -1 is used because different browsers use different methods to round scrollWidth pixels.
		if (elemReviews.scrollLeft < elemReviews.scrollWidth - elemReviews.clientWidth - 1) x = elemReviews.scrollLeft + elemReviews.clientWidth;
		elemReviews.scroll(x, 0);
	}
</script>

<svelte:window bind:innerWidth={screenSize} />
<main class="container max-w-[90rem]">
	<div class="max-w-[90rem] flex flex-col lg:flex-row px-[2rem] md:px-[4rem] lg:px-[7.62rem] pb-8 gap-[6rem]">
		<div class="flex-col max-w-[20rem] mt-[4rem] lg:mt-[9rem]">
			<h1 class="tag text-[3rem] leading-[3.7rem] sm:text-[64px] sm:leading-[80px]">
				Nourishing Wellness, Naturally
			</h1>
			<p class="my-4">Unlock the power of Moringa for a healthier you.</p>
			<a href="/shop" class="btn variant-filled-primary">Get Started</a>
		</div>
		<img alt="Leaves" src="{leaves}" class="max-w-[48rem] max-h-[45rem] rounded-2xl object-cover" />
	</div>
	<div class="bg-primary-500 max-w-[90rem] px-[2rem] md:px-[4rem] lg:px-[7.62rem] min-h-[46.75rem] py-16">
		<h2>Benefits</h2>
		<h3>What makes our Moringa Leaves so amazing.</h3>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 pt-8">
			<!-- Grid Item -->
			<div class="flex gap-2">
				<div>
					<i class="fa-solid fa-check fa-2xl"></i>
				</div>
				<div>
					<h4>Boosts Your Immunity</h4>
					<p>With 7 times the vitamin C of oranges, fortify your body's defenses and stay healthy year-round.</p>
				</div>
			</div>
			<div class="flex gap-2">
				<div>
					<i class="fa-solid fa-check fa-2xl"></i>
				</div>
				<div>
					<h4>Energy and Endurance</h4>
					<p>Elevate your energy levels and endurance with Moringa's natural properties, helping you power through your day.</p>
				</div>
			</div>
			<div class="flex gap-2">
				<div>
					<i class="fa-solid fa-check fa-2xl"></i>
				</div>
				<div>
					<h4>Natural Detoxification</h4>
					<p>Cleanse your body naturally with Moringa's detoxifying properties, promoting overall well-being.</p>
				</div>
			</div>
			<div class="flex gap-2">
				<div>
					<i class="fa-solid fa-check fa-2xl"></i>
				</div>
				<div>
					<h4>Radiant Skin and Hair</h4>
					<p>Achieve glowing skin and stimulate hair growth with Moringa's potent combination of 46 antioxidants and essential nutrients.</p>
				</div>
			</div>
			<div class="flex gap-2">
				<div>
					<i class="fa-solid fa-check fa-2xl"></i>
				</div>
				<div>
					<h4>Power-Packed Protein Source</h4>
					<p>Enjoy a protein boost that's twice as potent as yogurt, supporting muscle health and overall vitality.</p>
				</div>
			</div>
			<div class="flex gap-2">
				<div>
					<i class="fa-solid fa-check fa-2xl"></i>
				</div>
				<div>
					<h4>Joint and Inflammation Support</h4>
					<p>Experience relief from inflammation and joint discomfort with Moringa's 36 anti-inflammatory compounds.</p>
				</div>
			</div>
			<div class="flex gap-2">
				<div>
					<i class="fa-solid fa-check fa-2xl"></i>
				</div>
				<div>
					<h4>Revitalize Your Bones</h4>
					<p>Benefit from 4 times the calcium found in milk, ensuring strong and healthy bones for an active lifestyle.</p>
				</div>
			</div>
			<div class="flex gap-2">
				<div>
					<i class="fa-solid fa-check fa-2xl"></i>
				</div>
				<div>
					<h4>Cognitive Clarity</h4>
					<p>Enhance mental clarity and focus, giving your brain the nutrients it needs to perform at its best.</p>
				</div>
			</div>
			<div class="flex gap-2">
				<div>
					<i class="fa-solid fa-check fa-2xl"></i>
				</div>
				<div>
					<h4>Heart Health</h4>
					<p>Support a healthy heart with Moringa's impressive potassium content, three times that of a banana.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="max-w-[90rem] px-[2rem] md:px-[4rem] lg:px-[7.62rem] py-16">
		<h2>Our Products</h2>
		<div class="flex flex-wrap justify-center gap-[4rem] lg:gap-[6rem] my-8">
			<!-- Product Item -->
			{#each data.products as product}
				<div class="w-fit">
					<a href="/products/{product.slug}">
						<img src={product.image.src} alt={product.image.alt} class="w-[12.5rem] h-[12.5rem] border" />
						<p>{product.name}</p>
					</a>
					<div class="flex">
						<i class="fa-solid fa-star" style="color: #ffd500;"></i>
						<i class="fa-solid fa-star" style="color: #ffd500;"></i>
						<i class="fa-solid fa-star" style="color: #ffd500;"></i>
						<i class="fa-solid fa-star" style="color: #ffd500;"></i>
						<i class="fa-solid fa-star" style="color: #ffd500;"></i>
					</div>
					<p><b>${product.pricePerItem}</b></p>
					<button class="btn bg-primary-500 w-full">Add to Cart</button>
				</div>
			{/each}
		</div>
	</div>

	<div class="bg-primary-500 max-w-[90rem] px-[2rem] md:px-[4rem] min-h-[46.75rem]lg:px-[7.62rem] py-16">
		<h2>Our Story</h2>
		<div class="lg:flex gap-[2.94rem]">
			<div class="py-[5.56rem] max-w-[41.3125rem]">
				<p>Malunggay 4 Life🪴 emerged from my quest for herbal medicine or food supplements that could enhance my family's immune system, promoting a healthier and longer life for them and my friends.</p>
				<br />
				<p>As the inaugural consumers of "Malunggay 4 Life🌿," we've incorporated it into our daily routines—whether in capsule form, as tea, or as a powder for smoothies, salads, soups, and various dishes. Embracing it has significantly contributed to the overall well-being and resilience of each family member and friend, effectively addressing health issues.</p>
				<br />
				<p>Motivated by these positive outcomes, I established "Malunggay 4 Life 🌿" to offer Moringa Oleifera products to everyone seeking improved health.</p>
				<br />
				<p>Through thorough research, I discovered the nutritional richness and benefits of Moringa plants (Moringa Oleifera)🌿. Recognized as a miracle tree, superfood, and a tree of life, these findings underscore the significance of incorporating Moringa into our daily lives.</p>
			</div>
			<img alt="Our Story" src="{story}" class="object-cover w-[35.375rem] h-[33rem]" />
		</div>
	</div>

	<div class="max-w-[90rem] px-[2rem] md:px-[4rem] lg:px-[7.62rem] py-16 flex flex-col gap-[4.31rem]">
		<div class="flex flex-col gap-[1rem]">
			<h2>Customer Reviews</h2>
			<h3>Hear it from our customers just like you.</h3>
		</div>

		<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
			{#if screenSize > 600}
				<!-- Left Button -->
				<button type="button" class="btn-icon variant-filled bg-primary-500 w-[2.5rem] h-[2.5rem]" on:click={multiColumnLeft}>
					<!-- (January 21, 2024) arrow-left from FontAwesome. https://fontawesome.com/icons/arrow-left?f=classic&s=solid -->
					<i class="fa-solid fa-arrow-left" />
				</button>
			{/if}

			<!-- Carousel -->
			<div bind:this={elemReviews} class="flex gap-[3.12rem] snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
				<!-- Review Card -->
				{#each data.reviewCards as reviewCard}
					<div class="bg-tertiary-500 flex flex-col gap-[1.31rem] w-[25rem] h-[14.375rem] px-[1.75rem] py-[1.75rem] rounded-xl">
						<div class="flex gap-[2rem] content-center">
							<div>
								<Avatar src={reviewCard.src} width="w-[2.5rem]" rounded="rounded-full" />
							</div>
							<p class="text-center w-[8rem]">
								<b>
									{reviewCard.name}
									<br />
									{reviewCard.location}
								</b>
							</p>
							<p class="place-self-center">
								<b>{reviewCard.rating}</b>
							</p>
						</div>
						<div>
							<p>{reviewCard.description}</p>
						</div>
					</div>
				{/each}
			</div>
			{#if screenSize > 600}
				<!-- Right Button -->
				<button type="button" class="btn-icon bg-primary-500 w-[2.5rem] h-[2.5rem]" on:click={multiColumnRight}>
					<!-- (January 21, 2024) arrow-right from FontAwesome. https://fontawesome.com/icons/arrow-right?f=classic&s=solid -->
					<i class="fa-solid fa-arrow-right" />
				</button>
			{/if}
		</div>
	</div>
</main>
