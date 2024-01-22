import { error } from "@sveltejs/kit";
import bottle from "../../../lib/Images/bottle.png";

/** @type {import('./$types').PageLoad} */ 
export function load({ params }) {

	if (params.slug == "moringa-capsules") {
		return {
			id: 1,
			name: "Moringa Capsules", 
			subtitle: "(120 pieces)",
			description_1: 'Unlock the incredible benefits of Moringa with our Pure Organic Moringa Capsules. Sourced from the finest Moringa trees, these capsules are a convenient and natural way to incorporate the "Miracle Tree" into your daily routine.',
			description_2: 'Elevate your health with the power of Moringa. Order your Pure Organic Moringa Capsules today and embark on a journey to a healthier, more vibrant you!',
			pricePerItem: 19.99,
			image: {
                src: bottle,
                alt: "Moringa Capsule Bottle"
            },
		};
	}

	error(404, "Not found");
}
