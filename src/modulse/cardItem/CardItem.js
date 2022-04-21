import './card-item.scss';
import { useState, useEffect, useCallback } from 'react';
import drinks from '../coffe/drinks';
import { Link } from 'react-router-dom';

const CardListItem = () =>{

    const [coffeDrinks, setCoffeDrinks] = useState([]);

    useEffect(() => {
        setCoffeDrinks(drinks);
    }, []);

    const createCard = useCallback(() => {
        const createCard = coffeDrinks.map(item => {
            return(
            <Link to={`/pleasure/${item.id}`} className='card-item' key={item.id}>
                <img src={item.img} alt="card"/>
                <h2 className='type_item'>{item.name}</h2>
                <span className='card-item-name'>Click to view the recipe</span>
                <span className='card-item-price'>Go over...</span>
            </Link> 
            )
        });
        return createCard;
    }, [coffeDrinks]);

    return(
        <>
            {createCard()}
        </>
    )
    
}

export default CardListItem;