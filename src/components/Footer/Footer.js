import './Footer.scss';
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className="footer">
            <a className='footerInfo' href='https://github.com/rodrigoleonel1/e-commerce-react' target={'_blank'} rel={'noreferrer'}>  Developed by Rodrigo Alarcón <BsGithub/> </a>
        </footer>
    )
}

export default Footer