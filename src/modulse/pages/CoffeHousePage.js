import grains from "../coffe/coffe";

import Header from '../header/Header';
import Beans from "../beans/beans";
import Search from '../card/card';

const CoffeHousePage = () =>{

    return(
        <>
            <Header/>
            <Beans/>
            <Search coffe={grains}/>
        </>
    )

}

export default CoffeHousePage;