import Brand from "./Brand";
import CartWidget from "./CartWidget";
import NavList from "./NavList";

const NavBar = () => {
    return(
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">  
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-stretch justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Brand/>
                        </div>
                        <div className="ml-6 block">
                            <NavList/>
                            
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 static inset-auto ml-6 pr-0">
                            <CartWidget/>
                        </div> 
                    </div> 
                </div>          
            </div>
        </nav>
    )
}

export default NavBar;