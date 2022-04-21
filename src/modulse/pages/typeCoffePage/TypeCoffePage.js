import './typeCoffePage.scss';
import cofe from '../../img/About/cofe.svg';
import { Link } from 'react-router-dom';
import drinks from '../../coffe/drinks';
import usePage from '../../../hooks/usePage';
import { useParams } from 'react-router-dom';
import HeaderPleasure from '../../headerPleasure/HeaderPleasure';

const TypeCoffePage = () => {

    const {idDrinks} = useParams();
    const {products} = usePage(idDrinks, drinks);

    return(
        <>
            <HeaderPleasure/>
                <section className='beans'>
                <div className='container'>

                    <div className='beans_wrapper'>

                        <div className='beans_wrapper-ph'><img src={products.img} alt={products.name}/></div>

                        <div className='beans_wrapper_text'>
                            <h2 className='beans_wrapper_text-title'>{products.name}</h2>
                            <div className='logo'>
                                <div className='logo_line_left'></div>
                                <img src={cofe}/>
                                <div className='logo_line_right'></div>
                            </div>
                            <p className='beans_wrapper_text-afraid type'>
                                {products.text}
                            </p>
                            <p className="beans_wrapper_text-price"> 
                            </p>
                            <Link to='/pleasure'>Go back</Link>
                        </div>  

                    </div>

                </div>
            </section>    
        </>
    )
}


export default TypeCoffePage;