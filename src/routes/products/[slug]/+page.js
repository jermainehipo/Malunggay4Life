import { error } from "@sveltejs/kit";
import { get } from "svelte/store";
import { productItems } from "../../../products";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const approvedSlugs = ["moringa-powder-250", "moringa-powder-125"]
	const products = get(productItems);

	if (params.slug == "moringa-capsules-120") {
		let productIndex = products.findIndex((item) => {
			return item.slug.url === params.slug;
		});
		let product = products[productIndex];
		product.name = "Moringa Capsules"
		return products[productIndex];
	} else if (params.slug == "moringa-capsules-60") {
		let productIndex = products.findIndex((item) => {
			return item.slug.url === params.slug;
		});
		let product = products[productIndex];
		product.name = "Moringa Capsules"
		return products[productIndex];
	} else if (approvedSlugs.includes(params.slug)) {
		let productIndex = products.findIndex((item) => {
			return item.slug.url === params.slug;
		});
		return products[productIndex];
	}

	error(404, "Not found");
}
