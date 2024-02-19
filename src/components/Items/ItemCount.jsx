import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemCount =({item})=>{
    const stock=item.stock;
    const [counter, setCounter] = useState();
    const [addedToCart, setAddedtoCart] = useState(false);
    const {addItem,cartProducts,isInCart} = useContext(CartContext);

    useEffect(()=>{
        if(isInCart(item.id)){
            const quantity = cartProducts.find((cartItem)=>cartItem.id === item.id).quantity;
            setCounter(quantity)
            setAddedtoCart(true);
        }else{
            setCounter(stock> 0 ? 1 : 0);
        }
    }, [stock]);



    const incrementCount =()=>{
        if (counter<stock){
            setCounter(counter+1);
            setAddedtoCart(false);
        }

    }
    const decrementCount =()=>{
        if (counter>1){
            setCounter(counter-1);
            setAddedtoCart(false);
        }
    }
        
    const onAdd =()=>{
        addItem(item, counter); 
        setAddedtoCart(true);
    }

    return (
        <div className="row justify-content-end">
            <div className="col-6 col-lg-3 col-xxl-2 text-center">
            {stock>0?<>
                        <div className="input-group justify-content-center " role="group" aria-label="cantidad item">
                            <button type="button" className="btn btn-primary" onClick={decrementCount}>-</button>
                            <span className="input-group-text">{counter}</span>
                            <button type="button" className="btn btn-primary" onClick={incrementCount}>+</button>
                        </div>
                        <span className="fw-light fs-6">({stock} disponibles)</span>
                    </>
            :""}        
            </div>
            <div className="col-6 col-lg-3 text-center ">
                {stock>0?
                addedToCart? 
                <Link to={'/cart'}><button type="button" className="btn btn-success">Finaliza tu compra</button></Link> 
                : <button type="button" className="btn btn-primary" onClick={onAdd} >
                    {isInCart(item.id) ? "Modificar Carrito" : "Agregar al Carrito"}
                </button>
                : <span className="fs-5 fw-bold text-danger">Sin stock</span> 
                }
            </div>
        </div>
    )
}

export default ItemCount