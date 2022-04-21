import './grainsPage.scss';
import coffe from '../../img/About/cofe.svg';
import Header from '../../header/Header';
import grains from '../../coffe/coffe';
import usePage from '../../../hooks/usePage';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const GrainsPage = () => {

    const {idGrains} = useParams();
    const {products} = usePage(idGrains, grains);
    
    return(
        <>
            <Header/>
            <section className='beans'>
            <div className='container'>

                <div className='beans_wrapper'>

                    <div className='beans_wrapper-ph'><img src={products.img} alt={products.name}/></div>

                    <div className='beans_wrapper_text'>
                        <h2 className='beans_wrapper_text-title'>{products.about}</h2>
                        <div className='logo'>
                            <div className='logo_line_left'></div>
                            <img src={coffe} alt='coffe'/>
                            <div className='logo_line_right'></div>
                        </div>
                        <p className='beans_wrapper_text-extremity'>
                          <span>Country:</span> {products.name}
                        </p>
                        <p className='beans_wrapper_text-afraid'>
                          <span>Description:</span> {products.description}
                        </p>
                        <p className="beans_wrapper_text-price"> 
                            <span className='beans_wrapper_text-price-waid'>Price:</span>
                            <span className="beans_wrapper_text-price-text">{products.price}</span>
                        </p>
                        <Link to='/our_coffe'>Go back</Link>
                    </div>  

                </div>

            </div>
        </section>
        </>
    )
}


export default GrainsPage;