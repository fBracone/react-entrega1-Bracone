import { useState } from "react";

const ItemCount =({startCount,stock})=>{

    const [counter, setCounter] = useState(startCount);
    
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
        <div className="row">
            <div className="col">
                <div>
                    <div className="input-group" role="group" aria-label="cantidad item">
                        <button type="button" className="btn btn-primary" onClick={decrementCount}>-</button>
                        <span className="input-group-text">{counter}</span>
                        <button type="button" className="btn btn-primary" onClick={incrementCount}>+</button>
                    </div>
                    <span className="fw-light fs-6 ">de {stock} disponibles</span>
                </div>
            </div>
            <div className="col">
                <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount