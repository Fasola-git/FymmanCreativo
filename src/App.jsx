import AcercaDe from "./components/AcercaDe"
import Clientes from "./components/Clientes"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Servicios from "./components/Servicios"
function App() {

  return (
    <>
      <Header></Header>
      <Home></Home>
      <AcercaDe></AcercaDe>
      <Servicios></Servicios>
      <Clientes></Clientes>
      <Contacto></Contacto>
      <Footer></Footer>
    </>
  )
}

export default App
