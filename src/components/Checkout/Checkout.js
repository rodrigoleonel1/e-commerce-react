import './Checkout.scss'
import Loader from '../Loader/Loader'
import Form from '../Form/Form'
import Swal from 'sweetalert2'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    useEffect(() =>{
        document.title = `Checkout | Sneakers Store` // eslint-disable-next-line
    }, [])

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address:''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const createOrder = async () => {
        setLoading(true)
        try{
            
            const objOrder ={
                buyer: {formData},
                items: cart,
                total,
                date: new Date().toLocaleString()
            }

            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart?.quantity
    
                if(stockDb>= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push ({id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0){
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                toast.success('Orden generada con éxito.')
                clearCart()
                Swal.fire({
                    title:'Orden generada correctamente',
                    html:`
                    <p>ID de la orden: <b>${orderAdded.id}</b></p>
                    <p>Fecha y hora: ${objOrder.date}hs</p>
                    <p>Importe total: $${total}</p>
                    <p>¡Gracias por su compra!</p>`,
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#ff7d1a'});
                navigate("/cart");
            } else {
                navigate("/cart");
                toast.error('No se pudo completar la orden porque no hay suficiente stock de algunos productos.');
            }
        } catch (error){
            toast.error('No se pudo generar la orden de compra.')
            navigate("/");
        } finally{
            setLoading(false)
        }
    }

    if(loading){
        return <Loader/>
    }

    return (
        <div className="checkoutContainer">
            <Form {...formData} handleChange={handleChange} createOrder={createOrder}/>
        </div>
    )
}

export default Checkout