<script>
    import express from "express";
	import Stripe from 'stripe';
    import type { Request, Response } from "express";
    const app = express();
    const stripeKey = process.env.STRIPE_KEY;

    if (!stripeKey) { throw new Error("No Stripe Key")}

    const stripe = new Stripe(stripeKey, {
        apiVersion: "2023-10-16",
    })

    let name = "";

    app.get("/order/sucess", async(req: any, res: any) => {
        let { order, session_id } = req.query;
        const session = await stripe.checkout.sessions.retrieve(session_id);
        const customer = await stripe.customers.retrieve(session.customer);

        console.log(customer);
        name = customer.name;
    })
</script>

Success {name}