import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, free_shipping, name, img, category, description, price, stock}) =>{

    useEffect(() =>{
        document.title = `${name} | Sneakers Store` // eslint-disable-next-line
    }, [])

    const [quantityToAdd, setQuantityToAdd] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
        const productToAdd = {
            id, img, name, price, quantity
        }
        addItem(productToAdd)
    }

    const productAddedQuantity = getProductQuantity(id)

    return(
        <div className='itemDetail'>
            <div className='imgDetailContainer'>
                <img src={img} alt= {name}/>
            </div>
            <div className='itemDescription'>
                <Link to={`/category/${category}`} ><h2>{category}</h2></Link>
                <h1>{name}</h1>
                {free_shipping ? <h3>${price}<span>ENVIO GRATIS</span></h3> : <h3>${price}</h3>}
                <p>{description}</p>
                <h4>Stock disponible: {stock}</h4>
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productAddedQuantity} />
                    ) : (
                        <div className='buyOptionsContainer'>
                            <Link className='buyOptions' to='/cart'>Finalizar compra</Link>
                            <Link className='buyOptions' to='/'>Seguir Comprando</Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail