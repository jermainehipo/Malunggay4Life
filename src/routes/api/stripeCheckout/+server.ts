import type { RequestHandler } from "./$types";
import dotenv from "dotenv";

dotenv.config();

import Stripe from 'stripe';

const stripeKey = process.env.STRIPE_KEY;

if (!stripeKey) { throw new Error("No Stripe Key")}

const stripe = new Stripe(stripeKey, {
    apiVersion: "2023-10-16",
})


// localhost:5173/api/stripeCheckout

// POST /stripeCheckout data: items
// return -> url created by Stripe for our user to use

export const POST: RequestHandler = async ({request}) => {
    
    const data = await request.json();
    const items = data.items;

    // Change all items to have id as price instead for Stripe
    let lineItems : any = [];
    items.forEach((item: any) => {
        lineItems.push({price: item.product.id, quantity: item.quantity});
    })

    // Creates Stripe checkout session/URL
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        billing_address_collection: "auto",
        shipping_address_collection: {
            allowed_countries: ["CA", "US"],
        },
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
        
    })

    return new Response(
        // Front end will get this url to redirect
        JSON.stringify({ url: session.url }),
        {
            status: 200,
            headers: { "content-type": "application/json"}
        }
    )
}