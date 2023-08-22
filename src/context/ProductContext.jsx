import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ProductContext = createContext()

export const useProduct = () => {
    const context = useContext(ProductContext)
    if(!context) throw new Error('no hay un Auth Provider');
    return context;
}

export function ProductProvider({children}) {  
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})

    

    return (
        <ProductContext.Provider value={{producto, loading, setLoading, setProducto}}>
            {children}
        </ProductContext.Provider>
    )
}

