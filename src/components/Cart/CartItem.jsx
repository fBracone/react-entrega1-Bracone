import CartItemCount from "./CartItemCount";

const CartItem = ({item}) =>{
    return(
        <div key={item.id}>
            <hr />
            <div className="row mt-2">
                
                <div className="col-2 col-md-1">
                    <img src={item.imgSrc} alt="" height='50px' />
                </div>
                <div className="col">
                    <h3>{item.name}</h3>
                </div>
                <CartItemCount item = {item}/>
                <div className="col-3  col-md-2 col-xxl-1 text-end">
                    <span className="fs-4 fw-bold">${item.quantity * item.price}</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;