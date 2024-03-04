declare namespace App{

}

// Includes all child product options/variations
declare class Product {
    id: string              // Stripe id
    search_id: number       // Id for variation lookup
    name: string            // Product name
    description: string     // Short description for cart page
    price: number           // Product price per item
    inStock: boolean        // In stock or not / availability
    src: string             // Image source
    alt: string             // Image alt
    slug: {                 // Extra information for product page, including slug url itself
        url: string         // Slug url
        subtitle: string    // Subtitle under product name
        slugDesc1: string   // Top description
        slugDesc2: string   // Bottom description
        options: Option[]   // Options available (if any) 
    }
}

declare class Option {
    label: string   // Variant name
    price: number   // Variant price
}

declare class CartItem {
    product: Product        // Product information
    quantity: number        // Number of a product in cart
    totalPrice: number      // Price of product x Quantity
}