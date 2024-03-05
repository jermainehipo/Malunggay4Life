import { writable } from "svelte/store";
import bottle from "$lib/Images/bottle.png";
import pouch from "$lib/Images/pouch.png";

const moringaCapsuleSlug = {
    url: "moringa-capsules",
    subtitle: "(120 pcs)",
    slugDesc1: 'Unlock the incredible benefits of Moringa with our Pure Organic Moringa Capsules. Sourced from the finest Moringa trees, these capsules are a convenient and natural way to incorporate the "Miracle Tree" into your daily routine.',
    slugDesc2: 'Elevate your health with the power of Moringa. Order your Pure Organic Moringa Capsules today and embark on a journey to a healthier, more vibrant you!',
    options: [
        {
            id: 1,
            label: "120pcs",
            price: 25.95,
        },
    ]
}

const moringaPowderSlug = {
    url: "moringa-powder",
    subtitle: "(100 grams)",
    slugDesc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Commodo ullamcorper a lacus vestibulum sed arcu non.",
    slugDesc2: "Diam donec adipiscing tristique risus nec feugiat. Phasellus vestibulum lorem sed risus. Sed viverra tellus in hac habitasse. Volutpat sed cras ornare arcu dui vivamus arcu felis.",
    options: [
        {
            id: 2,
            label: "50g",
            price: 12.00,
        },
        {
            id: 3,
            label: "100g",
            price: 23.00,
        },
        {
            id: 4,
            label: "250g",
            price: 30.00,
        },
        {
            id: 5,
            label: "500g",
            price: 39.00,
        },
        {
            id: 6,
            label: "1kg",
            price: 53.00,
        },
    ]
}


export const displayProducts = writable<Product[]>([
    {
        id: "price_1OkJF8AafpXr9MOz28d5hK6a",
        search_id: 1,
        name: "Moringa Capsules",
        description: "120 capsules",
        price: 25.95,
        inStock: true,
        src: bottle,
        alt: "Moringa Capsule Bottle",
        slug: moringaCapsuleSlug
    },
    {
        id: "price_1Odg8tAafpXr9MOzYB7C8RvB",
        search_id: 0,
        name: "Placeholder Item",
        description: "Example",
        price: 11.99,
        inStock: true,
        src: bottle,
        alt: "Moringa Capsule Bottle",
        slug: moringaCapsuleSlug
    },
    {
        id: "price_1OqNwOAafpXr9MOzQpsZmrUs",
        search_id: 2,
        name: "Moringa Powder - 50g",
        description: "More sizes available ->",
        price: 12.00,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: moringaPowderSlug
    },
    {
        id: "price_1Odg9jAafpXr9MOzZt9KD1fO",
        search_id: 0,
        name: "Placeholder Item",
        description: "Example",
        price: 23.00,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: moringaPowderSlug
    },
]);

export const productItems = writable<Product[]>([
    {
        id: "price_1OkJF8AafpXr9MOz28d5hK6a",
        search_id: 1,
        name: "Moringa Capsules",
        description: "120 pieces/capsules",
        price: 25.95,
        inStock: true,
        src: bottle,
        alt: "Moringa Capsule Bottle",
        slug: moringaCapsuleSlug
    },
    {
        id: "price_1OqNwOAafpXr9MOzQpsZmrUs",
        search_id: 2,
        name: "Moringa Powder",
        description: "50g",
        price: 12.00,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: moringaPowderSlug
    },
    {
        id: "price_1Oj9fTAafpXr9MOzQ5ppGJ33",
        search_id: 3,
        name: "Moringa Powder",
        description: "100g",
        price: 23.00,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: moringaPowderSlug
    },
    {
        id: "price_1Okws4AafpXr9MOzKG7mSDQM",
        search_id: 4,
        name: "Moringa Powder",
        description: "250g",
        price: 30.00,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: moringaPowderSlug
    },
    {
        id: "price_1OkwtrAafpXr9MOztSqAYW2x",
        search_id: 5,
        name: "Moringa Powder",
        description: "500g",
        price: 39.00,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: moringaPowderSlug
    },
    {
        id: "price_1OkwuFAafpXr9MOzxmY2e99B",
        search_id: 6,
        name: "Moringa Powder",
        description: "1kg",
        price: 53.00,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: moringaPowderSlug
    },
]);