import { Routes, Route } from 'react-router-dom'
import ItemListContainer from '../components/Items/ItemListContainer.jsx'
import Error404 from '../components/Error404.jsx'
import ItemDetailContainer from '../components/Items/ItemDetailContainer.jsx'
import Cart from '../components/Cart/Cart.jsx'
import Checkout from '../components/Checkout/Checkout.jsx'

const RoutesComponent = () =>{
    return(
        <Routes>
            <Route path={"/"} element={<ItemListContainer/>} /> 
            <Route path={"category/:id"} element={<ItemListContainer/>} /> 
            <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
            <Route path={"/cart"}element={<Cart/>} />
            <Route path={"/checkout"}element={<Checkout/>} />    
            <Route path={"*"} element={<Error404/>} />   
        </Routes>
    )
}

export default RoutesComponent;