<script lang="ts">
	import { stripe } from "$lib/stripe";
	import { onMount } from "svelte";

	interface Address {
		line1: string;
		city: string;
		state: string;
		postal_code: string;
		country: string;
	}

	let name: string = "";
	let address: Address | null = null;
	let session_id = "";

	let freeShippingCost = 0;

	onMount(async () => {
		const params = new URLSearchParams(window.location.search);
		session_id = params.get("session_id") || "";
		if (!session_id) {
			return;
		}

		const session = await stripe.checkout.sessions.retrieve(session_id);
		if (session?.shipping_details) {
			name = session.shipping_details.name || "";
			address = (session.shipping_details.address as Address) || null;
		}
	});
</script>

<main class="container max-w-[90rem] mb-[7.75rem] px-[1rem] lg:px-[2rem] xl:px-[7.62rem] mt-[4rem]">
	<h1 class="text-center">Thank you for your order!</h1>
	<h2 class="text-center text-[32px]">We'll email you as soon as it ships.</h2>

	<!-- Order summary box -->
	<div class="border p-[3rem] mt-[3.31rem] mb-[7.19rem">
		<div class="flex justify-center">
			<div class="flex gap-[1.5rem]">
				<div class="flex flex-col place-items-center w-[7rem]">
					<div class="bg-primary-200 text-primary-500 rounded-[12rem] px-[0.9rem] py-[0.8rem] w-[3rem] h-[3rem]">
						<i class="fa-solid fa-check fa-xl"></i>
					</div>
					<p>Order placed</p>
				</div>
				<div class="w-[9rem] mx-[-3rem] hidden md:block">
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					width="100%" viewBox="0 0 336 112" enable-background="new 0 0 336 112" xml:space="preserve">
						<path fill="#000000" opacity="1.000000" stroke="none" 
							d="
						M337.000000,25.625000 
							C318.750641,22.761562 300.326752,22.296143 281.844818,22.145172 
							C238.469589,21.790861 199.447449,34.973827 163.597717,58.889107 
							C147.958313,69.322128 132.171768,79.630363 114.719086,86.949051 
							C89.930748,97.343910 64.126617,100.295662 37.494995,97.621498 
							C31.209265,96.990334 24.949516,96.271805 18.701412,95.374329 
							C16.903206,95.116028 15.118025,95.020615 13.908137,92.986061 
							C15.572608,91.290413 17.295021,91.995247 19.026136,92.259544 
							C45.203529,96.256050 71.275627,97.130539 97.104324,89.765839 
							C118.553551,83.649879 137.227539,72.076889 155.649719,60.051758 
							C178.901718,44.873936 202.905319,31.287935 230.262344,24.955351 
							C254.711349,19.295904 279.457367,17.394028 304.545319,19.454935 
							C315.138336,20.325121 325.754852,20.763191 336.615356,22.853075 
							C337.000000,23.750000 337.000000,24.500000 337.000000,25.625000 
						z"/>
					</svg>
				</div>
				<div class="flex flex-col place-items-center w-[7rem]">
					<div class="bg-[#D9DED8] text-[#606060] rounded-[12rem] px-[0.6rem] py-[0.75rem] w-[3rem] h-[3rem]">
						<i class="fa-solid fa-gears fa-xl"></i>
					</div>
					<p>Processing</p>
				</div>
				<div class="w-[9rem] mx-[-3rem] hidden md:block">
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					width="100%" viewBox="0 0 336 112" enable-background="new 0 0 336 112" xml:space="preserve">
						<path fill="#000000" opacity="1.000000" stroke="none" 
							d="
						M337.000000,25.625000 
							C318.750641,22.761562 300.326752,22.296143 281.844818,22.145172 
							C238.469589,21.790861 199.447449,34.973827 163.597717,58.889107 
							C147.958313,69.322128 132.171768,79.630363 114.719086,86.949051 
							C89.930748,97.343910 64.126617,100.295662 37.494995,97.621498 
							C31.209265,96.990334 24.949516,96.271805 18.701412,95.374329 
							C16.903206,95.116028 15.118025,95.020615 13.908137,92.986061 
							C15.572608,91.290413 17.295021,91.995247 19.026136,92.259544 
							C45.203529,96.256050 71.275627,97.130539 97.104324,89.765839 
							C118.553551,83.649879 137.227539,72.076889 155.649719,60.051758 
							C178.901718,44.873936 202.905319,31.287935 230.262344,24.955351 
							C254.711349,19.295904 279.457367,17.394028 304.545319,19.454935 
							C315.138336,20.325121 325.754852,20.763191 336.615356,22.853075 
							C337.000000,23.750000 337.000000,24.500000 337.000000,25.625000 
						z"/>
					</svg>
				</div>
				<div class="flex flex-col place-items-center w-[7rem]">
					<div class="bg-[#D9DED8] text-[#606060] rounded-[12rem] px-[0.6rem] py-[0.8rem] w-[3rem] h-[3rem]">
						<i class="fa-solid fa-truck-fast fa-xl"></i>
					</div>
					<p>Shipped</p>
				</div>
				<div class="w-[9rem] mx-[-3rem] hidden md:block">
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					width="100%" viewBox="0 0 336 112" enable-background="new 0 0 336 112" xml:space="preserve">
						<path fill="#000000" opacity="1.000000" stroke="none" 
							d="
						M337.000000,25.625000 
							C318.750641,22.761562 300.326752,22.296143 281.844818,22.145172 
							C238.469589,21.790861 199.447449,34.973827 163.597717,58.889107 
							C147.958313,69.322128 132.171768,79.630363 114.719086,86.949051 
							C89.930748,97.343910 64.126617,100.295662 37.494995,97.621498 
							C31.209265,96.990334 24.949516,96.271805 18.701412,95.374329 
							C16.903206,95.116028 15.118025,95.020615 13.908137,92.986061 
							C15.572608,91.290413 17.295021,91.995247 19.026136,92.259544 
							C45.203529,96.256050 71.275627,97.130539 97.104324,89.765839 
							C118.553551,83.649879 137.227539,72.076889 155.649719,60.051758 
							C178.901718,44.873936 202.905319,31.287935 230.262344,24.955351 
							C254.711349,19.295904 279.457367,17.394028 304.545319,19.454935 
							C315.138336,20.325121 325.754852,20.763191 336.615356,22.853075 
							C337.000000,23.750000 337.000000,24.500000 337.000000,25.625000 
						z"/>
					</svg>
				</div>
				<div class="flex flex-col place-items-center w-[7rem]">
					<div class="bg-[#D9DED8] text-[#606060] rounded-[12rem] px-[0.95rem] py-[0.75rem] w-[3rem] h-[3rem]">
						<i class="fa-solid fa-flag fa-xl"></i>
					</div>
					<p>Delivered</p>
				</div>
			</div>
		</div>
		<div class="flex gap-[3rem] mt-[4rem]">
			<div>
				<p>Order summary</p>
				<div class="grid grid-cols-[12rem_minmax(3.75rem,_1fr)] sm:grid-cols-[16rem_minmax(3.75rem,_1fr)] border-b-2 border-gray-500 pb-[0.5rem] mt-[1rem]">
					<p><b>Subtotal (Items {name})</b></p>
					<p><b>${name}</b></p>
					<p>Shipping</p>
					{#if freeShippingCost > 0}
						<p>TBD</p>
					{:else}
						<p><b>FREE</b></p>
					{/if}
					<p>Tax</p>
					<p>TBD</p>
				</div>
				<div class="grid grid-cols-[12rem_minmax(3.75rem,_1fr)] sm:grid-cols-[16rem_minmax(3.75rem,_1fr)] my-[0.5rem]">
					<p>Estimated Total</p>
					<p>${name}</p>
				</div>
			</div>
			<div>
				<p>Order placed</p>
				<div class="mt-[1rem]">
					<p>Regular Shipping</p>
					<p>Arrives by Monday, January 1</p>
					<p>Order #1234567890</p>
				</div>
			</div>
			<div>
				<p>Shipping address</p>
				<div class="mt-[1rem]">
					<p class="font-bold">John Doe</p>
					<p>8440 109th St NW</p>
					<p>Edmonton, Alberta Canada</p>
					<p>johndoe2340@gmail.com</p>
				</div>
			</div>
			<div>
				<p>Billing address</p>
				<div class="mt-[1rem]">
					<p class="font-bold">John Doe</p>
					<p>8440 109th St NW</p>
					<p>Edmonton, Alberta Canada</p>
					<p>johndoe2340@gmail.com</p>
				</div>
			</div>
		</div>
	</div>
</main>



<!-- {name}

{address?.city} {address?.country} -->

<style>
	.arrow {
		width: 100px;
		border-top: 1px solid black;
	}

</style>