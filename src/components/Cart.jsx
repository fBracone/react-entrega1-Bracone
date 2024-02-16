import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import CartItemCount from "./CartItemCount";
import { Link } from "react-router-dom";

const Cart = () =>{
    const {totalPriceProducts, cartProducts, clear} = useContext(CartContext);
    const [totalPrice,setTotalPrice] = useState(totalPriceProducts());

    useEffect( ()=>{
        setTotalPrice(totalPriceProducts());
    },[cartProducts])

    return(
        <div className="container mt-5">
            <div className="card border-primary shadow">
                <div className="card-body">
                    <div className="row">
                        <div className="col align-items-start">
                            <h2>Carrito de compras</h2>
                        </div>
                        <div className="col-3 text-end">
                                <Link to={'/'}><button type="button" className="btn btn-danger">X</button></Link>
                        </div>
                    </div>
                    {cartProducts.length >0 ? 
                        cartProducts.map(cartItem => (
                            <div key={cartItem.id}>
                                <hr />
                                <div className="row mt-2">
                                    
                                    <div className="col-2 col-md-1">
                                        <img src={cartItem.imgSrc} alt="" height='50px' />
                                    </div>
                                    <div className="col">
                                        <h3>{cartItem.name}</h3>
                                    </div>
                                    <CartItemCount item = {cartItem}/>
                                    <div className="col-3  col-md-2 col-xxl-1 text-end">
                                        <span className="fs-4 fw-bold">${cartItem.quantity * cartItem.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    :<p className="text-center">el carrito esta vacio</p>
                    }
                    {cartProducts.length >0? 
                    <>
                        <hr />
                        <div className="row justify-content-center">
                            <div className="col-5 col-md-4 col-xl-3 text-end">
                                <p className="fs-3 fw-bold">TOTAL: ${totalPrice}</p>
                            </div>
                            <div className="col-3 col-md-2 col-xl-1 text-center">
                                <button type="button" className="btn btn-success" >
                                        Comprar
                                </button>
                            </div>
                            <div className="col-3 col-md-2 col-xl-1">
                                <Link to={'/'}>
                                    <button type="button" className="btn btn-danger" onClick={clear}>
                                        Cancelar
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                    : ""}
                </div>
            </div>
        </div>
    )
}
export default Cart;