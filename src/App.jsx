import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { IndexPage } from './pages/index';
import { AboutPage } from './pages/about';
import { ProductsPage } from './pages/products';
import { ProductPage } from './pages/product';
import { ModifyPage } from './pages/modify';
import { LoginPage } from './pages/login';
import { Example } from './components/NavPrueba';
import { ProductFormPage } from './pages/ProductFormPage';
import { useState } from 'react';
import { RegisterPage } from './pages/register';
import { BuyPage } from './pages/buy';

function App(){

  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      id:1,
      name:"Mauricio"
    })
  }
  const logout = () => setUser(null)
  
  return(
    <BrowserRouter>
        <Example/>
        <Routes>
            <Route path="/" element = {<Navigate to="/index" />} />
            <Route path="/index" element = {<IndexPage/>} />
            <Route path="/about" element = {<AboutPage/>} />
            <Route path="/products" element = {<ProductsPage/>} />   
            <Route path="/login" element = {<LoginPage/>} />
            <Route path="/productFormPage" element = {<ProductFormPage/>} />
            <Route path="/products/:id" element = {<ProductPage/>} />
            <Route path="/modify/:id" element = {<ModifyPage/>} />
            <Route path="/registro" element = {<RegisterPage/>} />
            <Route path="/comprar" element = {<BuyPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App