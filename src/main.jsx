import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/formulario.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormularioRegistro  from "./pages/FormularioRegistro.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Login } from "./pages/Login.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
          <Route path="/FormularioRegistro" element={<FormularioRegistro/>}  />
          <Route path="/Dashboard" element={<Dashboard/>}  />
          <Route path="/" element={<Login/>}/>
        </Routes>  
  </BrowserRouter>
)
