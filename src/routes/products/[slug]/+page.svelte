<script>
	// @ts-nocheck

	import Counter from "../../Counter.svelte";
	export let data;

    let numOfProduct = 1;
    let price = 1;

    $: price = (numOfProduct * data.pricePerItem).toFixed(2);

</script>

<main class="flex flex-col lg:flex-row w-[90rem] px-[2rem] md:px-[7rem] gap-[7.75rem] mt-[3.31rem] mb-[7.19rem]">
	<div class="flex flex-col gap-[1.25rem] max-w-[16rem] sm:max-w-[37.625rem]">
		<div class="flex flex-col gap-[2.81rem]">
			<div>
				<h2>{data.name}</h2>
				<h3>{data.subtitle}</h3>
			</div>
			<p>{data.description_1}</p>
			<p>{data.description_2}</p>
		</div>
		<Counter bind:value={numOfProduct}/>
		<button class="btn bg-primary-500 w-fit">
			Add to Cart <span class="w-[1.25rem]" />${price}
		</button>
	</div>
	<img src={data.image.src} alt={data.image.alt} class="w-full object-cover"/>
</main>
