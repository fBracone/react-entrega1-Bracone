import { BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import CartContextProvider from './components/context/CartContext.jsx'
import RoutesComponent from './components/RoutesComponent.jsx'

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <RoutesComponent/>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
