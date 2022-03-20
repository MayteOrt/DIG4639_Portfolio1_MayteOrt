import './App.css';
import Example from './Example/index';
import Sentence from './Sentence/Com';
import Interest from './Interest/Game';

function App() {
  return (
    <div className="App" >
      <Example name="Mayte" program="React"/>
      <Interest game="Genshin Impact"/>
      <Sentence genre="horror" show="Inventing Anna" />
    </div>
  );
}

export default App;

