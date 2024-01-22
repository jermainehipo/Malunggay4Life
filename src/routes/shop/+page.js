import bottle from "$lib/images/bottle.png";
export const load = async ({ params }) => {

    //Set page data
    const products = [
        {
            id: 1,
            name: "Moringa Capsules",
            src: bottle,
            alt: "Moringa Capsule Bottle",
            price: 19.99,
            slug: "moringa-capsules"
        },
        {
            id: 2,
            name: "Moringa Capsules",
            src: bottle,
            alt: "Moringa Capsule Bottle",
            price: 19.99,
            slug: "moringa-capsules"
        },
        {
            id: 3,
            name: "Moringa Capsules",
            src: bottle,
            alt: "Moringa Capsule Bottle",
            price: 19.99,
            slug: "moringa-capsules"
        },
        {
            id: 4,
            name: "Moringa Capsules",
            src: bottle,
            alt: "Moringa Capsule Bottle",
            price: 19.99,
            slug: "moringa-capsules"
        },
    ]

    return {
        products
    };
};