import bottle from "$lib/images/bottle.png";

export const load = async ({ locals}) => {

    //Set page data
    const cartItems = [
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
        },
        {
            id: 2,
            name: "Moringa Capsules - 60 pcs",
            description: "capsules",
            src: bottle,
            alt: "Moringa Capsule Bottle",
            price: 9.99,
            quantity: 1,
            totalPrice: 9.99,
            inStock: true,
        },
        // {
        //     name: "",
        //     description: "",
        //     src: ,
        //     pricePerItem: ,
        //     inStock: ,
        // },
    ]

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
        cartItems, savedItems,
    };
};