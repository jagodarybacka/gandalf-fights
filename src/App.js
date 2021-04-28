import { useState } from 'react';
import Gandalf from './characters/Gandalf';
import Sauron from './characters/Sauron';
import './App.scss';

function App() {
  const [ gandalf, setGandalf ] = useState({ health: 100 });
  const [ sauron, setSauron ] = useState({ health: 99 });

  return (
    <div className="App">
      <Gandalf {...gandalf} />
      <Sauron {...sauron} />
    </div>
  );
}

export default App;
