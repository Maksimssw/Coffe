import './best.scss';
import bestTwo from '../img/Best/Best-1.png';
import presto from '../img/Best/Best-2.png';
import coffe from '../img/Best/Best-3.png';
import bestCoffe from '../coffe/best';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Best = () => {

    const [best, setBest] = useState([]);

    useEffect(() => {
        setBest(bestCoffe)
    }, [])

    const createBest = best.map(item => {
        return (
            <li className="best_wrapper_list">
                <Link to={`/${item.id}`}>
                    <div className='best_wrapper_list_block'>
                        <img src={item.img} alt={item.title}/>   
                    </div>
                    <h2 className="best_wrapper_list-title">{item.title}</h2>
                    <h3>{item.price}</h3>
                </Link>
            </li>
        )
    });

    return(
        <section className="best">
            <div className='container'>

                <h2 className='best-title'>Our best</h2>

                <ul className="best_wrapper">
                    {createBest}
                </ul>

            </div>
        </section>
    )
}

export default Best;