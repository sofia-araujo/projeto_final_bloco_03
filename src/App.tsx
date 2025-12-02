import { useState } from "react";
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";
import FormProduto from "./components/produtos/formproduto/FormProduto";
import ListarProdutos from "./components/produtos/listarprodutos/ListarProdutos";
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto";

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
      
      <div className='flex-1 w-full pt-16'>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListarCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListarProdutos />} />
              <Route path="/cadproduto" element={<FormProduto />} />
              <Route path="/editarproduto/:id" element={<FormProduto />} />
              <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
        </Routes>
      </div>
      <Footer/>
      </div>
     </BrowserRouter>
      
		</>
	)
}

export default App