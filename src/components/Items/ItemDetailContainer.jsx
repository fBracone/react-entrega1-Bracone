import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import Loading from "../Loading";
import { getOneDocument} from '../../services/firebase';

const ItemDetailContainer = () =>{
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    const [item,setItem] = useState([]);

    useEffect(()=>{
        getOneDocument("items",id)
        .then(res => {
            setItem(res)
            setLoading(false)
        });
    },[id])

    return(
        <div className="container mt-3">
            {loading? <Loading/> :     
            <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;