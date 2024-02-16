import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './ItemListContainer.jsx'
import Error404 from './Error404.jsx'
import ItemDetailContainer from './ItemDetailContainer.jsx'
import Cart from './Cart.jsx'

const RoutesComponent = () =>{
    return(
        <Routes>
            <Route path={"/"} element={<ItemListContainer/>} /> 
            <Route path={"category/:id"} element={<ItemListContainer/>} /> 
            <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
            <Route path={"/cart"}element={<Cart/>} />   
            <Route path={"*"} element={<Error404/>} />   
        </Routes>
    )
}

export default RoutesComponent;