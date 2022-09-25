import './App.scss';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main>
        <ItemListContainer greeting ={'Bienvenidos a SNK Shop'}/>
      </main>
    </div>
  );
}

export default App;
