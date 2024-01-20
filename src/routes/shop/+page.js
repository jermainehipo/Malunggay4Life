import bottle from "../../lib/Images/bottle.png";
export const load = async ({ params }) => {

    //Set page data
    const items = [
        {
            id: 1,
            name: "Moringa Capsules",
            image: {
                src: bottle,
                alt: "Moringa Capsule Bottle"
            },
            pricePerItem: 19.99,
            slug: "moringa-capsules"
        },
        {
            id: 2,
            name: "Moringa Capsules",
            image: {
                src: bottle,
                alt: "Moringa Capsule Bottle"
            },
            pricePerItem: 19.99,
            slug: "moringa-capsules"
        },
        {
            id: 3,
            name: "Moringa Capsules",
            image: {
                src: bottle,
                alt: "Moringa Capsule Bottle"
            },
            pricePerItem: 19.99,
            slug: "moringa-capsules"
        },
        {
            id: 4,
            name: "Moringa Capsules",
            image: {
                src: bottle,
                alt: "Moringa Capsule Bottle"
            },
            pricePerItem: 19.99,
            slug: "moringa-capsules"
        },
    ]

    return {
        items
    };
};