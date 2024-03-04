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


export const productItems = writable<Product[]>([
    {
        id: 1,
        stripe_id: "price_1OkJF8AafpXr9MOz28d5hK6a",
        name: "Moringa Capsules",
        description: "120 pieces/capsules",
        price: 25.95,
        inStock: true,
        src: bottle,
        alt: "Moringa Capsule Bottle",
        slug: moringaCapsuleSlug
    },
    {
        id: 2,
        stripe_id: "price_1Odg8tAafpXr9MOzYB7C8RvB",
        name: "Moringa Capsules - 60pcs",
        description: "60 pieces/capsules",
        price: 11.99,
        inStock: true,
        src: bottle,
        alt: "Moringa Capsule Bottle",
        slug: moringaCapsuleSlug
    },
    {
        id: 3,
        stripe_id: "price_1Odg9KAafpXr9MOzJsqP8onH",
        name: "Moringa Powder",
        description: "50 grams",
        price: 12.00,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: moringaPowderSlug
    },
    {
        id: 4,
        stripe_id: "price_1Odg9jAafpXr9MOzZt9KD1fO",
        name: "Moringa Powder - 125g",
        description: "100 grams",
        price: 23.00,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: moringaPowderSlug
    },
]);

export const productsVariations = writable<Product[]>([
    {
        id: 1,
        stripe_id: "price_1OkJF8AafpXr9MOz28d5hK6a",
        name: "Moringa Capsules",
        description: "120 pieces/capsules",
        price: 25.95,
        inStock: true,
        src: bottle,
        alt: "Moringa Capsule Bottle",
        slug: moringaCapsuleSlug
    },
    {
        id: 2,
        stripe_id: "price_1OqNwOAafpXr9MOzQpsZmrUs",
        name: "Moringa Powder",
        description: "50g",
        price: 12.00,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: moringaPowderSlug
    },
    {
        id: 3,
        stripe_id: "price_1Oj9fTAafpXr9MOzQ5ppGJ33",
        name: "Moringa Powder",
        description: "100g",
        price: 23.00,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: moringaPowderSlug
    },
    {
        id: 4,
        stripe_id: "price_1Okws4AafpXr9MOzKG7mSDQM",
        name: "Moringa Powder",
        description: "250g",
        price: 30.00,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: moringaPowderSlug
    },
    {
        id: 5,
        stripe_id: "price_1OkwtrAafpXr9MOztSqAYW2x",
        name: "Moringa Powder",
        description: "500g",
        price: 39.00,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: moringaPowderSlug
    },
    {
        id: 6,
        stripe_id: "price_1OkwuFAafpXr9MOzxmY2e99B",
        name: "Moringa Powder",
        description: "1kg",
        price: 53.00,
        inStock: true,
        src: pouch,
        alt: "Moringa Powder",
        slug: moringaPowderSlug
    },
]);