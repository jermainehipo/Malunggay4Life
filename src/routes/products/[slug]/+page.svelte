<script lang="ts">
	import Counter from "$lib/components/Counter.svelte";

	export let data;

	let quantity = 1;
	let price = "";

	$: price = (quantity * data.price).toFixed(2);

</script>

<main class="flex flex-col lg:flex-row w-[90rem] px-[2rem] md:px-[7rem] gap-[7.75rem] mt-[3.31rem] mb-[7.19rem]">
	<div class="flex flex-col gap-[1.25rem] max-w-[16rem] sm:max-w-[37.625rem]">
		<div class="flex flex-col gap-[2.81rem]">
			<div>
				<h2>{data.name}</h2>
				<h3>{data.slug?.subtitle}</h3>
			</div>
			<p>{data.slug?.slugDesc1}</p>
			<p>{data.slug?.slugDesc2}</p>
		</div>
		<Counter id={data.id} bind:value={quantity} />
		<button class="btn bg-primary-500 w-fit">
			Add to Cart <span class="w-[1.25rem]" />${price}
		</button>
	</div>
	<img src={data.src} alt={data.alt} class="w-full object-cover" />
</main>
