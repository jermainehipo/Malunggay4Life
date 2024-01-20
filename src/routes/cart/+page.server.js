import bottle from "../Images/bottle.png";


export const load = async ({ locals}) => {

    //Set page data
    const items = [
        {
            name: "Moringa Capsules - 120 pcs",
            description: "capsules",
            image: {
                src: bottle,
                alt: "Moringa Capsule Bottle"
            },
            pricePerItem: 19.99,
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

    return {
        items
    };
};