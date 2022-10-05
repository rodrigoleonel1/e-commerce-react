import './ItemDetail.scss';
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({product}) =>{
    return(
        <div className='itemDetail'>
            <div className='imgDetailContainer'>
                <img src={product.img} alt= {product.name}/>
            </div>
            <div className='itemDescription'>
                <Link to={`/category/${product.category}`} ><h2>{product.category}</h2></Link>
                <h1>{product.name}</h1>
                {product.free_shipping ? <h3>${product.price}<span>ENVIO GRATIS</span></h3> : <h3>${product.price}</h3>}
                <p>{product.description}</p>
                <h4>Stock disponible: {product.stock}</h4>
                <ItemCount stock={product.stock}/>
            </div>
        </div>
    )
}

export default ItemDetail