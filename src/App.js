import adatok from './adatok';
import Galeria from './alap/Galeria';
import { useState } from "react";
import './App.css';

function App() {

  const [kLista, setkLista] = useState([]);
  function kattKez(adat) {
    const uLista = [...kLista];
    uLista.push(adat);
    setkLista([...uLista]);
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Képgaléria</h1>
      </header>
    <article>
      
      <Galeria lista={adatok} kattKez={kattKez} />
    </article>
    <aside>
      <h3>Kiválasztott könyvek:</h3>
      <Galeria lista={kLista} kattKez={kattKez} />
    </aside>
    <footer>Albert Orsolya</footer>
    </div>
  );
}

export default App;
