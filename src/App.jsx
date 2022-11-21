import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { ItemListContainers } from './Components/ItemListContainers';

function App() {
  return (
    <>
      <div className="App">

        <NavBar />
        <ItemListContainers greeting='¡PROXIMAMENTE!' />



      </div>
      
    </>
  );
}



export default App;