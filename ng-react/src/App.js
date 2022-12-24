import react, { Fragment } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'react-bootstrap';
import Header from './components/include/header/header.js';
import Store from './components/pages/Store.js';
import Succes from './components/pages/Succes.js';
import Cancel from './components/pages/Cancel.js';
import CartProvider from './cartContext';



function App() {
  return (
    <CartProvider>
  <Container>
    <Header/>
  <BrowserRouter>
    <Routes>
      <Route index element={<Store/>}/> 
      <Route path="success" element={<Succes/>}/> 
      <Route path="cancel" element={<Cancel/>}/> 
    </Routes>
  </BrowserRouter>

  </Container>
  </CartProvider>
  );
}

export default App;
