import { useContext} from "react";
import { CartContext } from "../../context/CartContext";

const CheckoutTable =({totalPrice})=>{
    const { cartProducts} = useContext(CartContext);
    
    return (
        <div>
            <table className="table">
                <tbody>
                    {cartProducts.map(cartItem => (
                        <tr key={cartItem.id}>
                            <td className="align-middle" width= "40px"> 
                                <img src={cartItem.imgSrc} alt="" height='50px' />
                            </td>
                            <td className="align-middle ">
                                <h4>{cartItem.name}</h4> 
                            </td>
                            <td className="align-middle text-end" width= "300px">
                             <span className="fs-4 ">${cartItem.price} * {cartItem.quantity} =  ${cartItem.quantity * cartItem.price}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="row ">
                <div className="col flex-row text-end">
                     <span className="ms-4 fs-3 fw-bold align-bottom">TOTAL: ${totalPrice}</span>
                </div>
             </div>           
        </div>
        )
}

export default CheckoutTable;