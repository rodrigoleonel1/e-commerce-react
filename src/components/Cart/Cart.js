import './Cart.scss'
import CartItem from '../CartItem/CartItem'
import { useContext, useEffect } from "react"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { BsFillCartXFill } from 'react-icons/bs'
import { FaTrashAlt, FaCheck  } from 'react-icons/fa'


const Cart = () => {

    useEffect(() =>{
        document.title = `Carrito | Sneakers Store` 
    }, [])

    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <div className='cartEmpty'>
                <BsFillCartXFill/>
                <h1>Tu carrito está vacío.</h1>
                <Link className='cartEmptyBtn' to='/'>Seguir Comprando</Link>
            </div>
        )
    }

    return (     
        <div className='cartContainer'>
            <h1 className='cartContainerTitle'>Mi carrito</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <div className='cartContainerInfo'>
                <p className='totalPrice'>Importe total: ${total}</p>
                <button onClick={() => clearCart()} className="clearCartBtn"><FaTrashAlt/> Vaciar carrito</button>
                <Link to='/checkout' className='checkoutBtn'><FaCheck/> Checkout</Link>
            </div>
        </div>
    )
}

export default Cart