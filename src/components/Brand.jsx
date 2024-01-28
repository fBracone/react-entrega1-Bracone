import { Link } from "react-router-dom";

const Brand = () =>{
    return(
        <>
            <Link className="navbar-brand" to={"/"}> <h1 className="text-white font-bold">TruchoStore</h1></Link>
        </>
    )
}

export default Brand;