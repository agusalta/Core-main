import { createContext, useState, useEffect } from "react"
import React from "react"

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState(() => {
    // Obtener el carrito almacenado en localStorage al cargar la página
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
    const [cartOpen, setCartOpen] = useState(false);

    const handleCartOpen = () => {
      setCartOpen(true)
    }
  
    const handleCartClose = () => {
      setCartOpen(false);
    };

    useEffect(() => {
      // Obtener el carrito almacenado en localStorage al cargar la página
      const storedCart = localStorage.getItem('cart')
      if (storedCart) {
        setCart(JSON.parse(storedCart))
      }
    }, [])

    useEffect(() => {
      // Actualizar el carrito almacenado en localStorage cada vez que cambie
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    
    const addToCart = (product) => {
      const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    
      if (existingProductIndex !== -1) {
        // El producto ya existe en el carrito, incrementar la cantidad
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].quantity += 1;
        setCart(updatedCart);
      } else {
        // Agregar el producto al carrito con cantidad inicial 1
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      }
    };

    const handleTotal = (cart) => {
      let total = 0;
  
      for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        const productTotal = product.price * product.quantity;
        total += productTotal;
      }
      
      if(total === 0 ) {
        return "No hay productos en el carrito"
      }

      const formattedTotal = total.toLocaleString("es-AR");
      return "Total: " + formattedTotal + " ARS";
    };

    const handleLength = (cart) => {
      let acum = 0

      for(let i = 0; i < cart.length; i++) {
        let product = cart[i]
        if(product.quantity !== 1) {
          acum += (product.quantity - 1)
        }
      }

      return (cart.length + acum)
    }

    const handleQuantity = (id) => {
      const productIndex = cart.findIndex((item) => item.id === id);
    
      if (productIndex !== -1) {
        return cart[productIndex].quantity;
      }
    
      return 0;
    }

    const removeFromCart = (productId) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }
    
    const clearCart = () => {
        setCart([])
    }

    const removeOne = (Product) => {
      const existingProductIndex = cart.findIndex((item) => item.id === Product.id);
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity -= 1;
      if (updatedCart[existingProductIndex].quantity <= 0) {
        removeFromCart(Product.id);
      } else {
        setCart(updatedCart);
      }
    }

    return (
        <CartContext.Provider value= {{ cart, handleQuantity, addToCart, clearCart, 
          removeFromCart, handleCartOpen, handleCartClose, cartOpen, removeOne, handleTotal, handleLength}}
        >
            {children}
        </CartContext.Provider>
    )
}
