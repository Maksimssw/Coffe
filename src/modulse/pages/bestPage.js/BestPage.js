import './bestPage.scss';
import cofe from '../../img/About/cofe.svg';
import bestCoffe from '../../coffe/best';
import { useParams } from 'react-router-dom';
import usePage from '../../../hooks/usePage';
import { Link } from 'react-router-dom';
import Header from '../../header/Header';

const BestPage = () => {

    const {idBest} = useParams();
    const {products} = usePage(idBest, bestCoffe); 

    return(
        <>
            <Header/>
            <section className='beans'>
            <div className='container'>

                <div className='beans_wrapper'>

                    <div className='beans_wrapper-ph'><img src={products.img} alt={products.name}/></div>

                    <div className='beans_wrapper_text'>
                        <h2 className='beans_wrapper_text-title'>{products.title}</h2>
                        <div className='logo'>
                            <div className='logo_line_left'></div>
                            <img src={cofe}/>
                            <div className='logo_line_right'></div>
                        </div>
                        <p className='beans_wrapper_text-extremity'>
                          <span>Country:</span> Brasil
                        </p>
                        <p className='beans_wrapper_text-afraid'>
                          {products.about}
                        </p>
                        <p className="beans_wrapper_text-price"> 
                            <span className='beans_wrapper_text-price-waid'>Price:</span>
                            <span className="beans_wrapper_text-price-text">{products.price}</span>
                        </p>
                        <Link to='/'>Go back</Link>
                    </div>  

                </div>

            </div>
        </section>
        </>
    )
}

export default BestPage;