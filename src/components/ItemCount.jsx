import { useState, useEffect } from "react";

const ItemCount =({stock})=>{
    const [counter, setCounter] = useState();

    useEffect(()=>{
        setCounter(stock> 0 ? 1 : 0);
    }, [stock]);


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
        
    const onAdd =()=>{
        console.log(counter);
    }

    return (
        <div className="row justify-content-end">
            <div className="col-6 col-lg-3 col-xxl-2 text-center">
                    <div className="input-group justify-content-center " role="group" aria-label="cantidad item">
                        <button type="button" className="btn btn-primary" onClick={decrementCount}>-</button>
                        <span className="input-group-text">{counter}</span>
                        <button type="button" className="btn btn-primary" onClick={incrementCount}>+</button>
                    </div>
                    <span className="fw-light fs-6">({stock} disponibles)</span>
            </div>
            <div className="col-6 col-lg-3 text-center ">
            {stock>0? <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al Carrito</button> : "Sin stock"}
            </div>
        </div>
    )
}

export default ItemCount