import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import './ItemDetailContainer.scss';
import Loader from "../Loader/Loader";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({setCart}) =>{

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    useEffect(() => {
        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(doc => {
            const data = doc.data()
            const productsAdapted = {id: doc.id, ...data}
            setProduct(productsAdapted)
        }).finally(()=>{
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