import './ItemCount.scss'
import cart from '../CartWidget/assets/cart.svg'
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd}) =>{
    
    const [quantity, setQuantity] = useState(initial)

    const incrementCount = () => {
        if (quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const decrementCount = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="itemCount">
            <div className="itemAmount">
                <button className='countBtn' onClick={decrementCount}>-</button>
                <p className='count'>{quantity}</p>
                <button className='countBtn' onClick={incrementCount}>+</button>
            </div>            
            <button className="addCart" onClick={()=> onAdd(quantity)}>
                <img src={cart} alt='cart'/>
                <p>Agregar al carrito</p>
            </button>
        </div>
    )
}

export default ItemCount