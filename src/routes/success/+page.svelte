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

Success {name}

{address?.city} {address?.country}
