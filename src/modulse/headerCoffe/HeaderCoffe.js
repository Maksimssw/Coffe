import './header.scss';
import cofe from '../img/coffe_logo.svg';
import { Link } from 'react-router-dom';

const HeaderCoffe = () => {
    return(
        <header className='header header_coffe'> 

            <nav className='header_menu'>
                <div className="header_menu_list">
                    <div className='header_menu_list-cofe'></div>
                    <Link to='/' href="#">Coffee house</Link>
                </div>
                <li className="header_menu_list"><Link to='/our_coffe'>Our coffee</Link></li>
                <li className="header_menu_list"><Link to='/pleasure'>Types</Link></li>
            </nav>

            <div className='container'>

                <h1 className="header_title">Everything You Love About Coffee</h1>

                <div className='logo'>
                    <div className='logo_line_left white'></div>
                    <img src={cofe}/>
                    <div className='logo_line_right white'></div>
                </div>

                <h2 className="header-subtitle">We makes every day full of energy and taste</h2>
                <h2 className="header-want">Want to try our beans?</h2>

                <button className="header-button">
                    <Link to='/our_coffe'>More</Link>
                </button>

            </div>
        </header>
    )
}

export default HeaderCoffe;