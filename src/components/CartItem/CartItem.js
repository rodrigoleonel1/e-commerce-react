import './CartItem.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const CartItem = ({ id, name, quantity, price, img }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div className='cartItemCard'>
            <Link className='cartItemImg' to={`/detail/${id}`}>
                <img src={img} alt= {name}/>
            </Link>
            <div className="cartItemContent">
                <Link className="cartItemTitle" to={`/detail/${id}`}>
                    {name}
                </Link>
                <p>
                    Cantidad: {quantity}
                </p>
                <p>
                    Precio x Unidad: ${price}
                </p>
                <p className="cartItemInfo">
                     Subtotal: ${price * quantity}
                </p>
            </div>         
            <button className='cartItemButton' onClick={() => handleRemove(id)}>
                <FaTrashAlt/>
            </button>
        </div>
    )
}

export default CartItem