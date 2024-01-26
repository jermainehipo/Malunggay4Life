import { writable } from "svelte/store";
import bottle from "$lib/Images/bottle.png";
import pouch from "$lib/Images/pouch.png";


export const productItems = writable<Product[]>([
    {
        id: 1,
        name: "Moringa Capsules - 120pcs",
        description: "120 pieces/capsules",
        price: 19.99,
        inStock: true,
        src: bottle,
        alt: "Moringa Capsule Bottle",
        slug: {
            url: "moringa-capsules-120",
            subtitle: "(120 pcs)",
            slugDesc1: 'Unlock the incredible benefits of Moringa with our Pure Organic Moringa Capsules. Sourced from the finest Moringa trees, these capsules are a convenient and natural way to incorporate the "Miracle Tree" into your daily routine.',
            slugDesc2: 'Elevate your health with the power of Moringa. Order your Pure Organic Moringa Capsules today and embark on a journey to a healthier, more vibrant you!',
        }
    },
    {
        id: 2,
        name: "Moringa Capsules - 60pcs",
        description: "60 pieces/capsules",
        price: 11.99,
        inStock: true,
        src: bottle,
        alt: "Moringa Capsule Bottle",
        slug: {
            url: "moringa-capsules-60",
            subtitle: "(60 pcs)",
            slugDesc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Commodo ullamcorper a lacus vestibulum sed arcu non.",
            slugDesc2: "Diam donec adipiscing tristique risus nec feugiat. Phasellus vestibulum lorem sed risus. Sed viverra tellus in hac habitasse. Volutpat sed cras ornare arcu dui vivamus arcu felis.",
        }
    },
    {
        id: 3,
        name: "Moringa Powder - 250g",
        description: "250 grams",
        price: 15.99,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: {
            url: "moringa-powder-250",
            subtitle: "(250 grams)",
            slugDesc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Commodo ullamcorper a lacus vestibulum sed arcu non.",
            slugDesc2: "Diam donec adipiscing tristique risus nec feugiat. Phasellus vestibulum lorem sed risus. Sed viverra tellus in hac habitasse. Volutpat sed cras ornare arcu dui vivamus arcu felis.",
        }
    },
    {
        id: 4,
        name: "Moringa Powder - 125g",
        description: "125 grams",
        price: 8.99,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: {
            url: "moringa-powder-125",
            subtitle: "(125 grams)",
            slugDesc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Commodo ullamcorper a lacus vestibulum sed arcu non.",
            slugDesc2: "Diam donec adipiscing tristique risus nec feugiat. Phasellus vestibulum lorem sed risus. Sed viverra tellus in hac habitasse. Volutpat sed cras ornare arcu dui vivamus arcu felis.",
        }
    },
]);