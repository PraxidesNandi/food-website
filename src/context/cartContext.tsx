import { createContext, useState, ReactNode, useContext } from "react";

interface ICartContext {
    product: any[];  // Ensure product is an array
    addToCart: (cart: any) => void;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

interface ICartContextProvider {
    children: ReactNode;
}

export const CartContextProvider: React.FC<ICartContextProvider> = ({ children }) => {
    const [product, setProduct] = useState<any[]>([]);

    const addToCart = (cart: any) => {
        setProduct((prevState) => [...prevState, cart]);
    };

    return (
        <CartContext.Provider value={{ product, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

// ✅ Export the custom hook
export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartContextProvider");
    }
    return context;
};
