declare namespace App{

}

declare class Product {
    id: string
    name: string
    description: string
    price: string
    quantity: number
    totalPrice: number
    inStock: boolean
}

declare class CartItem {
    id: string
    quantity: number
}