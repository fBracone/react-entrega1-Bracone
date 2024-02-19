import { Link } from "react-router-dom";

const CartHeader =()=>{
    return(
        <div className="row">
            <div className="col align-items-start">
                <h2>Carrito de compras</h2>
            </div>
            <div className="col-3 text-end">
                <Link to={'/'}><button type="button" className="btn btn-danger">X</button></Link>
            </div>
        </div>
    )
}

export default CartHeader;