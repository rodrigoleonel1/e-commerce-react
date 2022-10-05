import Item from '../Item/Item';
import './ItemList.scss';

const ItemList = ( {products} ) => {
    return(
        <ul>
            { products.map(product =>(
                <Item key={product.id} product={product}/>
            ))}
        </ul>
    )
}

export default ItemList