import './App.css';
import './css/home.css'
import './css/inicio.css'
import './css/nosotros.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='products' element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
