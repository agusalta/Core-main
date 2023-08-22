import { useContext } from 'react'
import { CartContext } from './CartContext'

export const useCart = () => {
    const cart = useContext(CartContext)

    if(cart === undefined) {
        throw new Error('useCart tiene que estar dentro de un CartProvider')
    }

    return cart
}