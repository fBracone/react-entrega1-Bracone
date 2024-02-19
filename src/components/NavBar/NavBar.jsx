import Brand from "../Brand";
import CartWidget from "./CartWidget";
import NavList from "./NavList";


const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-3 border-primary shadow-sm" data-bs-theme="dark">
            <div className="container">
                <Brand/> 
                <NavList/>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;