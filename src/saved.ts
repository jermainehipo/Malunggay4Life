import { get } from "svelte/store"; 
import { persisted } from "svelte-persisted-store";
import { productItems } from "./products";


export const savedItems = persisted<CartItem[]>("savedItems", []);

// Add to saved items
export const addToSaved = (id: string, quantity: number) => {
    let items = get(savedItems);
    let itemPosition = items.findIndex(
        (item) => { return item.product.id == id}
    );

    if(itemPosition !== -1) {
        // Item is already in saved items, add to quantity of the item and add to totalPrice
        savedItems.update(() => {
            // Calculate new totalPrice
            let updatedItems = items.map((item) => {
                if (item.product.id === id) {
                    let totalPrice = (item.product.price * quantity);
                    return { ...item, quantity: item.quantity + quantity, totalPrice: item.totalPrice + totalPrice};
                };
                return item;
            })
            return updatedItems;
        });
    } else {
        // Item not in saved items, add object to saved items

        // Get product information
        let products = get(productItems);
        let productIndex = products.findIndex((item) => {
			return item.id === id;
		});
        let product = products[productIndex];

        // Calculate new totalPrice
        let totalPrice = (product.price * quantity);

        // Update
        savedItems.update(() => {
            return [ ...items, {product: product, quantity: quantity, totalPrice: totalPrice}];
        });
    }
}

// Remove from saved
export const removeFromSaved = (id: string, quantity: number) => {
    let items = get(savedItems);
    let itemPosition = items.findIndex(
        (item) => { return item.product.id == id}
    );

    // If item quantity is 1, remove item from array
    if (items[itemPosition]?.quantity - quantity <= 0) {
        items.splice(itemPosition, 1);
    }

    // Get product information
    let products = get(productItems);
    let productIndex = products.findIndex((item) => {
        return item.id === id;
    });
    let product = products[productIndex];

    // Update
    savedItems.update(() => {
        let updatedItems = items.map((item) => {
            if (item.product.id === id) {
                // Calculate new totalPrice
                let totalPrice = (product.price * (item.quantity - quantity));
                return { ...item, quantity: item.quantity - quantity, totalPrice: totalPrice};
            };
            return item;
        })
        return updatedItems;
    });
}