import { useState } from "react";
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

type MenuState = 'closed' | 'open';

function App() {
  // Estado para controlar se o Menu Mobile está aberto ou fechado
  const [menuState, setMenuState] = useState<MenuState>('closed');

  // Função para alternar o estado do Menu Mobile (abrir/fechar)
  const toggleMenu = (): void => {
    setMenuState(prevState => prevState === 'closed' ? 'open' : 'closed');
  };

  // Função para fechar o Menu Mobile (usada em eventos de navegação ou clique fora)
  const closeMenu = (): void => {
    setMenuState('closed');
  };

	return (
		<>
     <BrowserRouter>
     <div className="flex flex-col min-h-screen">
        <Navbar 
            menuState={menuState}
            onMenuToggle={toggleMenu}
            onMenuClose={closeMenu}/>
      
      <div className=''>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer/>
      </div>
     </BrowserRouter>
      
		</>
	)
}

export default App