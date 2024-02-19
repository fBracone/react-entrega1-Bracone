import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import CartHeader from "./CartHeader";
import EmpyCartMessage from "./EmptyCartMessage";
import CartBuy from "./CartBuy";

const Cart = () =>{
    const {totalPriceProducts, cartProducts, clear} = useContext(CartContext);
    const [totalPrice,setTotalPrice] = useState(totalPriceProducts());
    const [emptyCart, setEmptyCart] = useState(cartProducts.length==0);
     
    useEffect( ()=>{
        setTotalPrice(totalPriceProducts());
        if(cartProducts.length===0){
            setEmptyCart(true);
        }
    },[cartProducts])

    return(
        <div className="container mt-5">
            <div className="card border-primary shadow">
                <div className="card-body">
                    <CartHeader/>
                    {emptyCart ? <EmpyCartMessage/> :
                    cartProducts.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))}
                    {emptyCart? "" : <CartBuy totalPrice={totalPrice}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default Cart;