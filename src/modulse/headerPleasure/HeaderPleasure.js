import './header-pleasure.scss';
import '../app/app.scss';
import { Link } from 'react-router-dom';

const HeaderPleasure = () => {
    return(
        <header className='header header_pleasure'> 

            <nav className='header_menu'>
                <div className="header_menu_list">
                    <div className='header_menu_list-cofe'></div>
                    <Link to='/' href="#">Coffee house</Link>
                </div>
                <li className="header_menu_list"><Link to='/our_coffe'>Our coffee</Link></li>
                <li className="header_menu_list"><Link to='/pleasure'>Types</Link></li>
            </nav>

            <div className='container'>

                <h1 className="header_title">Types and recipes of coffee drinks</h1>

            </div>
        </header>
    )
}

export default HeaderPleasure;