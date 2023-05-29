
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Contador from './components/Contador/Contador';
//import Promesas from './components/Promesas/Promesas';
//import Fetch from './components/Fetch/Fetch';


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos" />
      {
        //<Contador inicial={1} stock={10}/>
        //<Promesas/>
        //<Fetch/>
      }
      
    </>
  );
}

export default App;
