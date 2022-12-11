import './App.css';
import { NavBar } from './Components/NavBar';
import { ItemListContainers } from './Components/ItemListContainers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemList from './Components/ItemList';
import ItemListDetail from './Components/ItemListDetail';
import {ItemDetailContainers} from './Components/ItemDetailContainers';
import ItemDetail from './Components/ItemDetail';

function App() {
  return (


    <BrowserRouter>
      <NavBar />
      <Routes>
     
      <Route path='/' element={<ItemListContainers greeting={<ItemList/>}/>}/>
      <Route path='/categorias/:categoria' element={<ItemList/>}/>
     {/*  <Route path='/item/:id' element={<ItemDetailContainers l={<ItemListDetail/>}/>}/> */}
      <Route path='/item/:id' element={<ItemDetailContainers detalle={<ItemListDetail/>}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;