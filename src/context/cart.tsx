import { createContext, useState, ReactNode, useEffect } from "react";

// Define the type for a product in the cart
interface Product {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

// Define the type for your context
export interface MyContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
    count: number;
    totalPrice: number;
}

export const MyContext = createContext<MyContextType | null>(null);

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [count, setCount] = useState<number>(0);

    // Add product to cart or increment its quantity
    const addToCart = (product: Product) => {
        setCount((prevCount) => prevCount + 1);
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Update the quantity of a product
    const updateQuantity = (id: number, quantity: number) => {
        if (quantity < 1) return; // Prevent quantity below 1
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    // Clear the cart
    const clearCart = () => {
        setCart([]);
        setCount(0);
    };

    // Calculate total price of the cart
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    // Persist cart in localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            setCart(parsedCart);
            setCount(parsedCart.reduce((sum: number, item: Product) => sum + item.quantity, 0));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <MyContext.Provider
            value={{
                cart,
                addToCart,
                updateQuantity,
                clearCart,
                count,
                totalPrice,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

