import { error } from "@sveltejs/kit";
import { get } from "svelte/store";
import { productItems } from "../../../products";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const products = get(productItems);

	let productIndex = products.findIndex((item) => {
		return item.slug.url === params.slug;
	});
	return products[productIndex];
	error(404, "Not found");
}
