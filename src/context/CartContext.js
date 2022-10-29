import { useState, useEffect, createContext } from 'react'
import { toast } from 'react-toastify';
export const CartContext = createContext()

export const CartContextProvider = ({ children }) =>{

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
            toast.success('Producto agregado al carrito.');
        } else {
            const cartUpdated = cart.map(prod => {
            if(prod.id === productToAdd.id) {
                const productUpdated = {
                    ...prod, quantity: productToAdd.quantity
                }
                return productUpdated
            } else {
                return prod
            }
          })
          setCart(cartUpdated)
          toast.success('Producto agregado al carrito.');
        }
    }
    
    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }
    
    const removeItem = (id) =>{
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
        toast.error('Producto eliminado del carrito.');
    }

    useEffect(() => {
        setTotalQuantity(getTotalQuantity) // eslint-disable-next-line
    }, [cart])

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    useEffect(() => {
        setTotal(getTotal) // eslint-disable-next-line
    }, [cart])

    const getTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })

        return accu
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)
        return product?.quantity
    }

    const clearCart = () => {
        setCart([])
        toast.info('Ahora tu carrito se encuentra vacío.');
    }

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, getProductQuantity, getTotalQuantity, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    )
}