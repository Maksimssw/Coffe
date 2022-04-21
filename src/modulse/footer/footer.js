import './footer.scss';
import cofe from '../img/Beans/cofe.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <>
            <footer className='footer'>
                <div className='container'>

                <nav className='footer_menu'>
                    <div className="footer_menu_list">
                        <div className='footer_menu_list-cofe'></div>
                        <Link to='/'>Coffee house</Link>
                    </div>
                    <li className="footer_menu_list"><Link to='/our_coffe'>Our coffee</Link></li>
                    <li className="footer_menu_list"><Link to='/pleasure'>Types</Link></li>
                </nav>

                <div className='logo'>
                    <div className='logo_line_left'></div>
                    <img src={cofe}/>
                    <div className='logo_line_right'></div>
                </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;