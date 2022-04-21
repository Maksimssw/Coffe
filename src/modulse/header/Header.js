import './header.scss';
import '../app/app.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className='header header_our_coffe'> 

            <nav className='header_menu'>
                <div className="header_menu_list">
                    <div className='header_menu_list-cofe'></div>
                    <Link to='/' href="#">Coffee house</Link>
                </div>
                <li className="header_menu_list"><Link to='/our_coffe'>Our coffee</Link></li>
                <li className="header_menu_list"><Link to='/pleasure'>Types</Link></li>
            </nav>

            <div className='container'>

                <h1 className="header_title">Our Coffee</h1>

            </div>
        </header>
    )
}

export default Header;