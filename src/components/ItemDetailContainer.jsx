import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import itemsArray from '../fakeDB.json';
import ItemDetail from "./ItemDetail";

const errorId =   {
    "id": "",
    "name": "Producto Inexistente",
    "category": "",
    "description": "",
    "price": "",
    "stock": 0,
    "imgScr": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdnviQh7zw3cPSUP-BlniN2eoS3H9dRHUuw&usqp=CAU"
  };

const ItemDetailContainer = () =>{
    const {id} = useParams();

    const [item,setItem] = useState([]);
    useEffect(()=>{
        let product = itemsArray.find(item => item.id==id)
        const promise = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(product);
            },500);
        })
        promise.then(data =>{
            setItem(data);
        })
    }, [id]);

    if(item==undefined){
        setItem(errorId);
    }

    return(
        <div className="container mt-3">
        <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;