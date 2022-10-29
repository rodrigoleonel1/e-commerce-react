import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import cart from './assets/cart.svg'
import './CartWidget.scss'


const CartWidget = () =>{

    const{ getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return(
        <Link to={'/cart'} className="cart">
            <img src={cart} alt='cart'/>
            <span>{totalQuantity}</span>
        </Link>
    )
}

export default CartWidget