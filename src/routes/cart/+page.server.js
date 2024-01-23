import bottle from "$lib/Images/bottle.png";

export const load = async ({ locals}) => {

    const savedItems = [
        {
            id: 1,
            name: "Moringa Capsules - 120 pcs",
            description: "capsules",
            src: bottle,
            alt: "Moringa Capsule Bottle",
            price: 19.99,
            quantity: 1,
            totalPrice: 19.99,
            inStock: true,
        }
    ]

    return {
        savedItems,
    };
};