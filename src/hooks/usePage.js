import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const usePage = (link, coffe) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        requireProducts();
    }, [])

    const requireProducts = () => {
        const res = coffe.map(item => {
            if(link == item.id){
                setProducts(item);
            } else{
                return;
            }
        })
        return res;
    }

    return {products}
}

export default usePage