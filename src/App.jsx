import './App.css'
import Error from './componentes/Error'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import NavBar from './componentes/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Envios from './componentes/Envios'
import Contacto from './componentes/Contacto'

function App() {
  

  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/" element={<ItemListContainer mensaje='Bienvenidos a Akari Store!'/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/category/:type" element={<ItemListContainer/>} />
        <Route path="/envios" element={<Envios/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="*" element={<Error/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
