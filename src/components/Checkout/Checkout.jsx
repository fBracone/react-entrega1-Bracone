import { useContext, useState} from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm.jsx";
import CheckoutTable from "./CheckoutTable.jsx";
import {sendPurchase} from '../../services/firebase.jsx';


const Checkout =()=>{
    const {totalPriceProducts, cartProducts, contextBuyer, clear} = useContext(CartContext);
    const totalPrice = totalPriceProducts();
    const [orderId,setOrderId] = useState("");

    const checkout =()=>{
        const checkoutProducts = cartProducts.map(item =>({id:item.id , name:item.name, quantity:item.quantity, price:item.price}))
        const purchase ={buyer:contextBuyer, items:checkoutProducts, total:totalPriceProducts(), date: new Date()}
        sendPurchase(purchase).then((res)=> {clear(), setOrderId(res) });
    }

   return (
        <div className="container mt-5">
            <div className="card border-primary shadow">
                <div className="card-body">
                {orderId?   <div className="text-center">
                                <div className="alert alert-success" role="alert">
                                    <span className="fs-3">¡Gracias por tu compra!</span>
                                    <p>El ID de tu compra es <strong>{orderId}</strong></p>
                                </div>
                                <Link to={"/"} className="btn btn-primary" >Volver al Inicio</Link>
                            </div> 
                             :
                             <>
                                <CheckoutTable totalPrice={totalPrice}/>
                                <hr />
                                <div className="row">
                                    <h3>Ingresa tus datos</h3>
                                    <CheckoutForm/>
                                </div>
                                <div className="row text-center">
                                    <div className="col"><Link to={"/"} className="btn btn-primary" >Volver al inicio</Link></div> 
                                    {(contextBuyer.name!=""&&contextBuyer.email!="")? 
                                    <div className="col"> <button type="button" className="btn btn-success fs-4" onClick={checkout}>Comprar</button></div> 
                                    : ""}                            
                                </div>
                             </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Checkout;