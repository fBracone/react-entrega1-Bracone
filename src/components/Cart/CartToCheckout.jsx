import { Link } from "react-router-dom"

const CartToCheckout =()=>{
    return(
        <div className="text-center">
            <hr />
            <Link to={"/checkout"}>
                <button type="button" className="btn btn-success fs-4" >Checkout</button>
            </Link>
        </div>

    )
}

export default CartToCheckout