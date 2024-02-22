import { useContext, useEffect, useState} from "react";
import { CartContext } from "../../context/CartContext";
import CartItemCount from "./CartItemCount";

const CartItem = ({item}) =>{
    const { removeItem} = useContext(CartContext);

    const onRemove =()=>{
        removeItem(item);
    }

    return(
        <tr>
            <td className="align-middle" width= "40px"> 
                <img src={item.imgSrc} alt="" height='50px' />
            </td>
            <td className="align-middle ">
                <h4>{item.name}</h4> 
            </td>
            <td className="align-middle" width= "250px">
                <CartItemCount item = {item}/>
            </td>
            <td className="align-middle " width= "120px">
                <span className="fs-4 ">${item.quantity * item.price}</span>
            </td>
            <td className="align-middle text-end" width= "40px">
                <button type="button" className="btn btn-danger" onClick={onRemove}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                </button>
            </td>
        </tr>
    )
}

export default CartItem;