import { useContext, useEffect, useState} from "react";
import { CartContext } from "../../context/CartContext";

const CartItemCount =({item})=>{
    const stock=item.stock;
    const { addItem, cartProducts} = useContext(CartContext);
    const [counter, setCounter] = useState(cartProducts.find((cartItem)=>cartItem.id === item.id).quantity);

    const incrementCount =()=>{
        if (counter<stock){
            setCounter(counter+1);
        }
    }

    const decrementCount =()=>{
        if (counter>1){
            setCounter(counter-1);
        }
    }

    useEffect(()=>{
        addItem(item, counter);
    },[counter])

    return (
        <>
            <div className="d-flex">
                <div className="input-group justify-content-center" role="group" aria-label="cantidad item">
                    <button type="button" className="btn btn-primary" onClick={decrementCount}>-</button>
                            <span className="input-group-text">{counter}</span>
                    <button type="button" className="btn btn-primary" onClick={incrementCount}>+</button>
                </div>
                <span className="mx-2 fw-light fs-6">({stock} disponibles)</span>
            </div>
        </>
    )
}

export default CartItemCount