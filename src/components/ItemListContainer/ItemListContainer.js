import './ItemListContainer.scss';
import Loader from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";
import { useState ,useEffect } from "react"
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { getProducts } from "../../services/firebase/firestore";

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProducts(categoryId).then(products =>{
            setProducts(products)
        }).catch(error =>{
            toast.error(`${error}`)
        }).finally(() =>{
            setLoading(false)
        })},[categoryId])

    useEffect(() =>{
        if(categoryId){
            document.title = `${categoryId.toUpperCase()} | Sneakers Store`
        } else{
            document.title = `Sneakers Store`
        }
    }, [categoryId])

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