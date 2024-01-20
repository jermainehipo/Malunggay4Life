import bottle from "../lib/Images/bottle.png";
export const load = async ({ }) => {

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
        },
        {
            id: 2,
            name: "Moringa Capsules",
            image: {
                src: bottle,
                alt: "Moringa Capsule Bottle"
            },
            pricePerItem: 19.99,
        },
        {
            id: 3,
            name: "Moringa Capsules",
            image: {
                src: bottle,
                alt: "Moringa Capsule Bottle"
            },
            pricePerItem: 19.99,
        },
        {
            id: 4,
            name: "Moringa Capsules",
            image: {
                src: bottle,
                alt: "Moringa Capsule Bottle"
            },
            pricePerItem: 19.99,
        },
    ]

    return {
        items
    };
};