import ItemList from './ItemList';
import itemsArray from '../fakeDB.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () =>{
    const [items, setItems]= useState ([]);
    const {id} = useParams();

    useEffect(() => {
        const fakeFetch = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? itemsArray.filter(item => item.category == id ) : itemsArray);

            }, 1000);
        })
        fakeFetch.then(data => {
            setItems(data);
        })
    }, [id]);


    return(
        <div className="container pt-3">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;