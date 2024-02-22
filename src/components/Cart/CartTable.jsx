import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const CartTable =({totalPrice})=>{
    const {clear, cartProducts} = useContext(CartContext);
    
    return (
        <div>
            <table className="table">
                <tbody>
                    {cartProducts.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))}
                </tbody>
            </table>
            <div className="row ">
                <div className="col flex-row text-end">
                    <Link to={'/'}>
                        <button type="button" className="btn btn-danger" onClick={clear}>
                            Eliminar todo
                        </button>
                    </Link>
                     <span className="ms-4 fs-3 fw-bold align-bottom">TOTAL: ${totalPrice}</span>
                </div>
             </div>           
        </div>
        )
}

export default CartTable;