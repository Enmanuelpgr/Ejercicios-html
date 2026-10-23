import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './componentes/PrimerComponentes';
import { SegundoComponente } from './componentes/SegundoComponentes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>Esto es un repaso con Enmanuel</p>

       <PrimerComponente/>
       <hr/>


       <SegundoComponente/>
      </header>
    </div>
  );
}

export default App;
