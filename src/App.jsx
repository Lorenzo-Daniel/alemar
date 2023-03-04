import './SASS/app.scss'
import { HashRouter, Routes, Route } from "react-router-dom";
import 'animate.css'
import NavbarProvider from './context/NavbarContex';
import Home from './Pages/Home/Home'
import Navbar from './componentes/Navbar';
import Contacto from './Pages/Contacto';
import BoConcept from './BoConcept';
import FloatContact from './componentes/FloatContact';
import Footer from './componentes/Footer';
function App() {
  return (
    <div>
      <HashRouter>
        <NavbarProvider>
          <Navbar />
          <FloatContact/>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contacto' element={<Contacto/>} />
            <Route exact path='/marcas:' element={<BoConcept/>} />
          </Routes>
        </NavbarProvider>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
