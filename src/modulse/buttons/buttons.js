import './buttons.scss';
import { useState, useEffect, useCallback } from 'react';
import coffeNames from '../coffe/coffeNames';

const Buttons = (props) => {

    const {onItemCoffe} = props

    const [listCoffe, setListCoffe] = useState([]);
    const [itemCoffe, setItemCoffe] = useState('Brazil');

    useEffect(() => {
        setListCoffe(coffeNames)
    }, [])

    const createList = useCallback(() => {
        const createListCoffe = listCoffe.map((item, i) => {
            return (
                <>
                    <option selected={item === `${itemCoffe}` ? 'selected' : null} key={i}>{item.name}</option>
                </>
            )
        });

        return createListCoffe
    }, [listCoffe])

    const broadcast = (e) => {
        let item = e.target.value;

        onItemCoffe(item);
    }

    return(
        <div className="buttons_wrapper">
            <h3 className="buttons_wrapper-filter">Or filter</h3>
            <select onChange={e => broadcast(e)}>
                <option>All</option>
                {createList()}
            </select>
        </div>
    )
    
}

export default Buttons;