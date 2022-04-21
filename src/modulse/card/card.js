import { useEffect, useState } from "react";
import Look from "../look/look";
import './search.scss';
import CardOurCoffe from "../cardOurCoffe/CardOurCoffe";
import Buttons from '../buttons/buttons';

const Search = (props) => {

    const [data, setData] = useState([props.coffe]);
    const [look, setLook] = useState('');
    const [itemCoffe, setItemCoffe] = useState('All');

    const onInput = (name) =>{
        setLook(name);
    }

    useEffect(() => {
        setData(props.coffe);
    }, [])

    const onName = (items, look) =>{
        if(look === ''){
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(look) > -1
        })
    }

    const onItemCoffe = (item) => {
        setItemCoffe(item);
    }

    const onFilterCardCoffe = (data) => {

        if(itemCoffe === 'All'){
            return data;
        } else{
            return data.filter(item => {
                return itemCoffe === item.name;
            }) 
        }
    }

    const filter =  onFilterCardCoffe(onName(data, look));

    return(
        <>
        <section className="search">
        <div className="container">

            <Look 
                onInput={onInput}/>
            <Buttons onItemCoffe={onItemCoffe}/>

        </div>
        </section>
        <section className="card">
            <div className="container">
                <CardOurCoffe data={filter}/>
            </div>
        </section>
        </>
    )
    
}

export default Search;