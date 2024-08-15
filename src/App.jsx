import Partearriba from './Components/Partearriba/Partearriba'
import Navbar from './Components/Navbar/Navbar'
import Principal from './Components/Principal/Principal'
import Pasos from './Components/Pasos/Pasos'
import Menu from './Components/Menu/Menu'
import Franjainfinita from './Components/FranjaInfinita/FranjaInfinita'
import Tabla from './Components/Tabla/Tabla'
import Descuento from './Components/Descuento/Descuento'
import Preguntas from './Components/Preguntas/Preguntas'
import Marcas from './Components/Marcas/Marcas'
import Partebaja from './Components/Partebaja/Partebaja'



const App = () => { 

  return (
    <div>
    <Partearriba/>
    <Navbar/>
    <Principal/>
    <Pasos/>
    <Menu/>
    <Franjainfinita/>
    <Tabla/>
    <Descuento/>
    <Preguntas/>
    <Marcas/>
    <Partebaja/>
    </div>
  )
}

export default App
