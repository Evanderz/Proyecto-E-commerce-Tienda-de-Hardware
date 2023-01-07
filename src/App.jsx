import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Cart} from './Components/Cart';
import { ItemDetailContainers } from './Components/ItemDetailContainers';
import ItemList from './Components/ItemList';
import { ItemListContainers } from './Components/ItemListContainers';
import ItemListDetail from './Components/ItemListDetail';
import { NavBar } from './Components/NavBar';



function App() {
  return (
    

      <BrowserRouter>

        <NavBar />
        <Routes>

          <Route path='/' element={<ItemListContainers greeting={<ItemList />} />} />
          <Route path='/categorias/:categoria' element={<ItemList/>} />
          <Route path='/item/:id' element={<ItemDetailContainers detalle={<ItemListDetail />} />} />
          <Route path='/item/cart' element= {<Cart/>} />
      

        </Routes>

      </BrowserRouter>

    
  );
}

export default App;