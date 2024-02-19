import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';
import Error404 from '../Error404';
import { getDocuments } from '../../services/firebase';

const ItemListContainer = () =>{
    const [loading, setLoading] = useState(true);
    const [items, setItems]= useState ([]);
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true);
        getDocuments("items",id)
        .then(res => {
            setItems(res)
            setLoading(false)
        });              
    },[id]);

    return(
        <div className="container pt-3">
        {loading? <Loading/> : 
        items.length==0? 
        <Error404/> : <ItemList items={items}/>
        }
        </div>
    )
}

export default ItemListContainer;