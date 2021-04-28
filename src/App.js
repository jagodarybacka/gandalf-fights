import Gandalf from './characters/Gandalf';
import Sauron from './characters/Sauron';
import useGame from './state';
import './App.scss';

function App() {
  const [ state, dispatch ] = useGame();

  return (
    <div className="App">
      <Gandalf {...state.gandalf} />
      <Sauron {...state.sauron} />
    </div>
  );
}

export default App;
