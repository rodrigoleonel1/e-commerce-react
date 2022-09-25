import CartWidget from '../CartWidget/CartWidget'
import './Navbar.scss'

const Navbar = () =>{
    return(
        <nav>
            <div className="logo">
                <p>sneakers<span>Store</span></p>
            </div>
            <div className="navMenu">
                <button>Nike</button>
                <button>Adidas</button>
                <button>Puma</button>
            </div>
            <div>
                <CartWidget/>
            </div>                        
        </nav>
    )
}

export default Navbar