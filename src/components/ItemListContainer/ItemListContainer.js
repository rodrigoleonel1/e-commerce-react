import { useState ,useEffect } from "react"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../services/firebase'
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.scss';

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId ? query(collection (db, 'products'), where('category', '==', categoryId)) : collection (db, 'products')
        getDocs(collectionRef).then(response =>{
            const productsAdapted = response.docs.map(doc =>{
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }).finally(() =>{
            setLoading(false)
        })
    },[categoryId])

    if(loading){
        return(<Loader/>)
    }

    return (
        <div className="itemListContainer">
            <h1>{greeting}<span>{`${categoryId || ''}`}</span></h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer