const style = "text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";

const NavList = () =>{
    return(
        <ul className="flex space-x-4">
                <li><button type="button" className={style}>1</button></li>
                <li><button type="button" className={style}>2</button></li>
                <li><button type="button" className={style}>3</button></li>
        </ul>
    )
}

export default NavList;