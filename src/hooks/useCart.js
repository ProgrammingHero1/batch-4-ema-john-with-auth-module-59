import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = products => {
    const [cart, setCart] = useState([]);

    useEffect(() => {

        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }

    }, [products]);

    return [cart, setCart];
}

export default useCart;