import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartHeader from "./CartHeader";
import EmpyCartMessage from "./EmptyCartMessage";
import CartTable from "./CartTable";
import CartToCheckout from "./CartToCheckout.jsx";

const Cart = () =>{
    const {totalPriceProducts, cartProducts} = useContext(CartContext);
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
                    {emptyCart ? <EmpyCartMessage/>:<CartTable totalPrice={totalPrice} />}
                    {emptyCart? "" : <CartToCheckout/>
                    }
                </div>
            </div>
        </div>
    )
}
export default Cart;