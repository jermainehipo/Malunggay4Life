import express from "express";
import Stripe from 'stripe';
import type { Request, Response } from "express";
import { stripe } from "$lib/stripe"
const app = express();
const stripeKey = process.env.STRIPE_KEY;


let name = "";

app.get("/order/sucess", async(req: any, res: any) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    const customer = await stripe.customers.retrieve(session.customer);

    console.log(customer);
    res.send(`<html><body><h1>Thanks for your order, ${customer.name}!</h1></body></html>`);

})

app.listen(4242, () => console.log(`Listening on port ${4242}!`));
