import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AcercaDe from "./components/AcercaDe"
import Clientes from "./components/Clientes"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Servicios from "./components/Servicios"
import Nosotros from './components/Nosotros'
function App() {

  return (
    <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route exact path="/" element={
          <>
            <Home></Home>
            <AcercaDe></AcercaDe>
            <Servicios></Servicios>
            <Clientes></Clientes>
            <Contacto></Contacto>
          </>
          }/>
          <Route exact path="/Nosotros" element={<Nosotros></Nosotros>}/>
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
