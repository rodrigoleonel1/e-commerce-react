import { useState ,useEffect } from "react"
import { getProducts } from "../../asyncMock"
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
        getProducts(categoryId).then(products =>
            setProducts(products)
        ).finally(()=>{
            setLoading(false)
        })
    },[categoryId])

    if(loading){
        return(<Loader/>)
    }

    return (
        <div className="itemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer