import './styles/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Login from './pages/Login'
import Productos from './pages/Productos';
import Navbar from './components/Navbar/Navbar';
import Detalle from './pages/Detalle';
import Registro from './pages/Register';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext';
import About from './pages/About';
import Datos from './pages/Datos';
import Compra from './pages/Compra';
import { ProductProvider } from './context/ProductContext';
import Contacto from './pages/Contacto';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <ProductProvider>
            <Router>
              <Navbar/>
              <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/productos' element={<Productos />} />
                <Route path='/login' element={<Login />} />
                <Route path='/producto/:id' element={<Detalle />} />
                <Route path='/register' element={<Registro />} />
                <Route path='/about' element={<About />} />
                <Route path='/datos' element={<Datos />} />
                <Route path='/compra' element={<Compra />} />
                <Route path='/contacto' element={<Contacto/>} />
              </Routes>
            </Router>
          </ProductProvider>  
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
