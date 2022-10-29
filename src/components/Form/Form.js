import './Form.scss'

const Form = ( { name, email, phone, address, handleChange, createOrder } ) => {

    return (     
        <div className='formContainer'>
            <h1>Formulario de Checkout</h1>
            <p>Ingrese sus datos que se piden a continuacion en los campos correspondientes, con ellos podremos crear la orden de compra y usted podra visualizarla un vez sea generada</p>
            <form className='checkoutForm' onSubmit={createOrder}>
            <input type='text' name='name' placeholder='Ingrese su nombre' value={name} onChange={handleChange} required/>
            <input type='email' name='email' placeholder='Ingrese su mail' value={email} onChange={handleChange} required/>
            <input type='number' name='phone'placeholder='Ingrese su celular' value={phone} onChange={handleChange} required/>
            <input type='text' name='address' placeholder='Ingrese su domicilio' value={address} onChange={handleChange} required/>
            <button type='submit' className='checkoutBtn'>Finalizar compra</button>  
            </form> 
        </div>
    )
}

export default Form

