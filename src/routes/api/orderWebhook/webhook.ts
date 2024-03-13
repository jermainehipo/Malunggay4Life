import { stripe } from "$lib/stripe";
import type { RequestHandler } from "@sveltejs/kit";

const endpointSecret = import.meta.env.VITE_STRIPE_KEY;

// POST /webhook

export const post: RequestHandler = async ({request}) => {
	let event: any;

	// Verify endpoint secret
	if (endpointSecret) {
		try {
			// Construct the event by verifying the signature using the raw body and secret if webhook signing is configured.
			event = stripe.webhooks.constructEvent(await request.text(), request.headers.get("stripe-signature") || "", endpointSecret);
		} catch (err: any) {
			console.log(`⚠️  Webhook signature verification failed.`, err.message);
			return new Response("", { status: 400 });
		}
	}

	// Handle the event
	switch (event.type) {
		case "checkout.session.completed": {
      const session = event.data.object;
      console.log("handling event");
      console.log("session", session);
      console.log("event.data", event.data);
			break;
		}
		default:
			console.log("Unhandled event type", event.type);
			return new Response("Unhandled event type", { status: 400 });
	}

	// Return a 200 response to acknowledge receipt of the event
	return new Response("", { status: 200 });
};
