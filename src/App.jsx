import { BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import CartContextProvider from './context/CartContext.jsx'
import RoutesComponent from './routes/RoutesComponent.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="min-vh-100">
          <NavBar />
          <RoutesComponent/>
        </div>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
