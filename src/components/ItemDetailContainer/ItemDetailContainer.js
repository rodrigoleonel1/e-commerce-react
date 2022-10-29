import './ItemDetailContainer.scss';
import Loader from "../Loader/Loader";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { getProductsById } from '../../services/firebase/firestore';

const ItemDetailContainer = ({setCart}) =>{

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    useEffect(() => {
        setLoading(true)
        getProductsById(productId).then(product =>{
            setProduct(product)
        }).catch(error =>{
            toast.error(`${error}`)
        }).finally(() =>{
            setLoading(false)
        })
    },[productId])

    if(loading){
        return(<Loader/>)
    }

    return(
        <div className='itemDetailContainer'>
            <ItemDetail {...product} setCart={setCart}/>
        </div>
    )
}

export default ItemDetailContainer