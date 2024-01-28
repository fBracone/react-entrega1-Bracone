import { Link } from "react-router-dom";

const Item =({item})=>{
    return(
        <div className="col-12 col-md-6 col-xl-4 mb-4 d-flex">
            <div className="card border-primary shadow">
                <img src={item.imgScr} className="card-img-top border-bottom border-1 border-secondary-subtle" alt={item.name}/>
                <div className="card-body text-bg-light">
                    <h5 className="card-title fs-3 ">{item.name}</h5>
                    <hr className="my-1"/>
                    <p className="mb-1">
                        <span className="fs-3 fw-bold text-primary ">${item.price}</span>
                    </p>
                    <p className="card-text">{item.description}</p>
                </div>
                <div className="card-footer text-bg-light text-center">
                <Link to={"/item/"+item.id}> <button className="btn btn-primary">Ver producto</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Item