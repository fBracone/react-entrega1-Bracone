import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartBuy =({totalPrice})=>{

    const {clear} = useContext(CartContext);

    return (
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
    )
}

export default CartBuy;