import { get } from "svelte/store";
import { productItems } from "../products";

export const load = async ({ params }) => {
	
	const products = get(productItems);

    const reviewCards = [
        {
            name: "Jane Doe",
            initials: "JD",
            location: "Calgary, Alberta",
            rating: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            src: "",
        },
        {
            name: "John Doe",
            initials: "JD",
            location: "Calgary, Alberta",
            rating: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            src: "",
        },
        {
            name: "Jane Doe",
            initials: "JD",
            location: "Calgary, Alberta",
            rating: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            src: "",
        },
        {
            name: "John Doe",
            initials: "JD",
            location: "Calgary, Alberta",
            rating: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            src: "",
        },
        {
            name: "Jane Doe",
            initials: "JD",
            location: "Calgary, Alberta",
            rating: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            src: "",
        },
    ]

    return {
        products, reviewCards,
    };
};