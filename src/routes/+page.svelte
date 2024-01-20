<script lang="ts">
	import { Avatar } from "@skeletonlabs/skeleton";
	import { Paginator } from "@skeletonlabs/skeleton";
	import PageFooter from "./PageFooter.svelte";

	import { error } from "@sveltejs/kit";

	export let data;


</script>

<main class="container max-w-[90rem]">
	<div class="max-w-[90rem] flex flex-col lg:flex-row px-[4rem] lg:px-[7.62rem] pb-8 gap-[6rem]">
		<div class="flex-col max-w-[20rem] mt-[4rem] lg:mt-[9rem]">
			<h1 class="tag">Nourishing Wellness, Naturally</h1>
			<p class="my-4">Unlock the power of Moringa for a healthier you.</p>
			<a href="/shop" class="btn variant-filled-primary">Get Started</a>
		</div>
		<img alt="Leaves" src="Images/leaves.jpg" class="max-w-[48rem] max-h-[45rem] rounded-2xl object-cover" />
	</div>

	<div class="bg-primary-500 max-w-[90rem] min-h-[46.75rem] px-[4rem] lg:px-[7.62rem] py-16">
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

	<div class="px-[4rem] max-w-[90rem] lg:px-[7.62rem] py-16">
		<h2>Our Products</h2>
		<div class="flex flex-wrap justify-center gap-[4rem] lg:gap-[6rem] my-8">
			<!-- Product Item -->
			{#each data.items as item}
				<div class="w-fit">
					<a href="/products/{item.slug}">
						<img src={item.image.src} alt={item.image.alt} class="w-[12.5rem] h-[12.5rem] border" />
						<p>{item.name}</p>
						<div class="flex">
							<i class="fa-solid fa-star" style="color: #ffd500;"></i>
							<i class="fa-solid fa-star" style="color: #ffd500;"></i>
							<i class="fa-solid fa-star" style="color: #ffd500;"></i>
							<i class="fa-solid fa-star" style="color: #ffd500;"></i>
							<i class="fa-solid fa-star" style="color: #ffd500;"></i>
						</div>
						<p><b>${item.pricePerItem}</b></p>
					</a>
					<button class="btn bg-primary-500 w-full">Add to Cart</button>
				</div>
			{/each}
		</div>
	</div>

	<div class="bg-primary-500 max-w-[90rem] min-h-[46.75rem] px-[4rem] lg:px-[7.62rem] py-16">
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
			<img alt="Our Story" src="Images/story.jpg" class="object-cover w-[35.375rem] h-[33rem]" />
		</div>
	</div>

	<div class="w-[90rem] px-[4rem] lg:px-[7.62rem] py-16 flex flex-col gap-[4.31rem]">
		<div class="flex flex-col gap-[1rem]">
			<h2>Customer Reviews</h2>
			<h3>Hear it from our customers just like you.</h3>
		</div>
		<div class="flex gap-[3.12rem]">
			<!-- Review Card -->
			<div class="bg-tertiary-500 flex flex-col gap-[1.31rem] w-[25rem] h-[14.375rem] px-[2.5rem] py-[2.5rem] rounded-xl">
				<div class="flex gap-[4rem] content-center">
					<div>
						<Avatar src="" width="w-[2.5rem]" rounded="rounded-full" />
					</div>
					<p class="text-center">
						<b>
							John Doe
							<br />
							Calgary, Alberta
						</b>
					</p>
					<p class="place-self-center">
						<b>4.5</b>
					</p>
				</div>
				<div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
			<div class="bg-tertiary-500 flex flex-col gap-[1.31rem] w-[25rem] h-[14.375rem] px-[2.5rem] py-[2.5rem] rounded-xl">
				<div class="flex gap-[4rem] content-center">
					<div>
						<Avatar src="" width="w-[2.5rem]" rounded="rounded-full" />
					</div>
					<p class="text-center">
						<b>
							John Doe
							<br />
							Calgary, Alberta
						</b>
					</p>
					<p class="place-self-center">
						<b>4.5</b>
					</p>
				</div>
				<div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
			<div class="bg-tertiary-500 flex flex-col gap-[1.31rem] w-[25rem] h-[14.375rem] px-[2.5rem] py-[2.5rem] rounded-xl">
				<div class="flex gap-[4rem] content-center">
					<div>
						<Avatar src="" width="w-[2.5rem]" rounded="rounded-full" />
					</div>
					<p class="text-center">
						<b>
							John Doe
							<br />
							Calgary, Alberta
						</b>
					</p>
					<p class="place-self-center">
						<b>4.5</b>
					</p>
				</div>
				<div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
		</div>
	</div>
</main>
