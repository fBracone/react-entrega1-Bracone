import { Link } from "react-router-dom";
const NavList = () =>{
    return(
        <>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> 
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/category/gorras"}>Gorras</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/category/rinoneras"}>Riñoneras</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/category/otros"}>Otras cosas</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavList;