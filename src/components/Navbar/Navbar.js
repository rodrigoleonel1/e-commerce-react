import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.scss'

const Navbar = () =>{
    return(
        <nav>
            <div className="logo">
                <Link to={'/'}><p>sneakers</p></Link>
            </div>
            <div className="navMenu">
                <Link to={'category/nike'}><button>Nike</button></Link>
                <Link to={'category/adidas'}><button>Adidas</button></Link>
                <Link to={'category/puma'}><button>Puma</button></Link>
                <Link to={'category/jordan'}><button>Jordan</button></Link>
            </div>
            <CartWidget/>                      
        </nav>
    )
}

export default Navbar