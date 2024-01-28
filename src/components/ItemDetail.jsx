import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";

const ItemDetail = ({item}) =>{
    return(
        <div className="card border-primary ">
            <div className="row g-0 ">
                <div className="col-md-4 d-flex">
                    <img src={item.imgScr} className="img-fluid rounded-start" alt={item.name}/>
                </div>
                <div className="col-md-8 d-flex flex-column">
                    <div className="card-body text-bg-light">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title fs-3 ">{item.name}</h5>
                            </div>
                            <div className="col-2 text-end">
                                <Link to={"/"}> <button className="btn btn-danger">X</button></Link>
                            </div>
                        </div>
                        <hr className="my-1"/>
                        <p className="mb-1">
                            <span className="fs-3 fw-bold text-primary ">${item.price}</span>
                        </p>
                        <p className="card-text">{item.description}</p>
                    </div>
                    <div className="card-footer text-bg-light " >
                        <ItemCount stock={item.stock} /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;