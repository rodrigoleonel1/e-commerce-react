import './Item.scss';
import { Link } from 'react-router-dom';

const Item = ({product}) =>{
    return(
        <li className='item'>
            <img src={product.img} alt= {product.name}/>
            <p>{product.name}</p>
            <div className='itemFooter'>
                <p className='itemPrice'>${product.price}</p>
                <Link to={`/detail/${product.id}`}><button className='itemBtn'>Ver detalles</button></Link>
            </div>
        </li>
    )
}

export default Item