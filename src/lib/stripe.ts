import Stripe from 'stripe';

const stripeKey = process.env.STRIPE_KEY;

if (!stripeKey) { throw new Error("No Stripe Key")}

export const stripe = new Stripe(stripeKey, {
    apiVersion: "2023-10-16",
})
