import { useState } from 'react';
import './card-item.scss';
import cardImg from '../img/Card/card.png';
import { Link } from 'react-router-dom';

const CardOurCoffe = (props) => {


    const data = props.data;

    const createCard = data.map(item => {
        return(
        <>
        <Link key={item.id} to={`/our_coffe/${item.id}`} className='card-item'>
            <img src={item.img} alt="card"/>
            <h2 className='card-item-title'>{item.about}</h2>
            <span className='card-item-name'>{item.name}</span>
            <span className='card-item-price'>{item.price}</span>
        </Link> 
        </>
        )
    });

    return(
        <>
            {createCard}
        </>
    )
    
}

export default CardOurCoffe;