import bottle from "$lib/Images/bottle.png";
export const load = async ({ params }) => {

    //Set page data
    const products = [
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
    ]

    return {
        products, reviewCards,
    };
};