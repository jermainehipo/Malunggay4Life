declare namespace App{

}

// Information Product object, not used directly for cart but is used in reference to add Cart objects
declare class Product {
    id: string              // Stripe id
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
    }
}

declare class CartItem {
    product: Product        // Product information
    quantity: number        // Number of a product in cart
    totalPrice: number      // Price of product x Quantity
}