import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.scss'

const Navbar = () =>{
    return(
        <nav>
            <div className="logo">
                <Link to={'/'}><p>sneakers</p></Link>
            </div>
            <div className="navMenu">
                <NavLink to={'category/nike'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Nike</NavLink>
                <NavLink to={'category/adidas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Adidas</NavLink>
                <NavLink to={'category/puma'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Puma</NavLink>
            </div>
            <CartWidget/>                      
        </nav>
    )
}

export default Navbar