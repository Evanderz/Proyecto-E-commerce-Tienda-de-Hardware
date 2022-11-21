import logo from './logo.svg';
import './App.css';

function App() {


  const boton = <button>boton</button>

  const nombre = 'Mauricio'

  const estilos = {

    color: "red",
    backgroundColor: "yellow",
    padding: 20

  }

  return (


    <div>
      <h1>HOLA MUNDO {nombre}</h1>
      <strong> style = {estilos} Este es un mensaje</strong>
      { boton }
      <li>Frutilla</li>
      <li>Banana</li>
      <li>Pera</li>
      <li>Durazno</li>
      <li>Manzana</li>
     
    </div>
  

  )
}

export default App;
