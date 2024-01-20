import bottle from "../Images/bottle.png";

export const load = async ({ locals}) => {

    //Set page data
    const cartItems = [
        {
            id: 1,
            name: "Moringa Capsules - 120 pcs",
            description: "capsules",
            source: bottle,
            alt: "Moringa Capsule Bottle",
            pricePerItem: 19.99,
            numOfItem: 1,
            totalPrice: 19.99,
            inStock: true,
        },
        {
            id: 2,
            name: "Moringa Capsules - 60 pcs",
            description: "capsules",
            source: bottle,
            alt: "Moringa Capsule Bottle",
            pricePerItem: 9.99,
            numOfItem: 1,
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
            source: bottle,
            alt: "Moringa Capsule Bottle",
            pricePerItem: 19.99,
            numOfItem: 1,
            totalPrice: 19.99,
            inStock: true,
        }
    ]

    return {
        cartItems, savedItems,
    };
};