import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.scss';
import Loader from "../Loader/Loader";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    useEffect(() => {
        getProduct(productId).then(product => {
            setProduct(product)
        }).finally(()=>{
            setLoading(false)
        })
    },[productId])

    if(loading){
        return(<Loader/>)
    }

    return(
        <div className='itemDetailContainer'>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer