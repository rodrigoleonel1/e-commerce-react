import './ItemCount.scss'
import cart from '../CartWidget/assets/cart.svg'
import { useState } from 'react'

const ItemCount = ({stock}) =>{
    
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }
    const decrementCount = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return(
        <div className="itemCount">
            <div className="itemAmount">
                <button className='countBtn' onClick={decrementCount}>-</button>
                <p className='count'>{count}</p>
                <button className='countBtn' onClick={incrementCount}>+</button>
            </div>            
            <button className="addCart">
                <img src={cart} alt='cart'/>
                <p>Agregar al carrito</p>
            </button>
        </div>
    )
}

export default ItemCount