import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

const Navbar = () =>{
    return(
        <nav>
            <div className="logo">
                <p>snk<span>Shop</span></p>
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