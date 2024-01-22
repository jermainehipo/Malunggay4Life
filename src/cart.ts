import { writable, get } from "svelte/store";


export const cartItems = writable<CartItem[]>([]);

// Add to cart
export const addToCart = (id: number, quantity: number) => {
    let items = get(cartItems);
    let itemPosition = items.findIndex(
        (item) => { return item.id == id}
    );

    if(itemPosition !== -1) {
        // Item is already in cart, add to quantity of the item
        cartItems.update(() => {
            let updatedItems = items.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + quantity};
                };
                return item;
            })
            return updatedItems;
        });
    } else {
        // Item not in cart, add object to cart
        cartItems.update(() => {
            return [ ...items, {id: id, quantity: quantity}];
        });
    }
}

// Remove from cart
export const removeFromCart = (id: number, quantity: number) => {
    let items = get(cartItems);
    let itemPosition = items.findIndex(
        (item) => { return item.id == id}
    );

    // If item quantity is 1, remove item from array
    if (items[itemPosition]?.quantity - quantity <= 0) {
        items.splice(itemPosition, 1);
    }

    cartItems.update(() => {
        let updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - quantity};
            };
            return item;
        })
        return updatedItems;
    });
}