import Gandalf from './characters/Gandalf';
import Sauron from './characters/Sauron';
import { useState, useEffect } from 'react';
import { getAttackEffects, getWinnerName, keepInRange } from './utils';
import './App.scss';

const INITIAL_HEALTH = 100;
const INITIAL_ATTACKS = { gandalf: null, sauron: null };

function App() {
  const [ chosenAttacks, setChoosenAttacks ] = useState(INITIAL_ATTACKS);
  const [ gandalfHp, setGandalfHp ] = useState(INITIAL_HEALTH);
  const [ sauronHp, setSauronHp ] = useState(INITIAL_HEALTH);
  const [ hasWinner, setHasWinner ] = useState(false);

  const setChoosenAttack = character => attack => {
    setChoosenAttacks(prevState => ({
      ...prevState,
      [character]: attack
    }));
  };


  useEffect(() => {
    const { gandalf, sauron } = chosenAttacks;

    if (gandalf && sauron) {
      const effect = getAttackEffects(gandalf, sauron);

      setGandalfHp(prev => keepInRange(prev + effect.gandalf, 0, INITIAL_HEALTH));
      setSauronHp(prev => keepInRange(prev + effect.sauron, 0, INITIAL_HEALTH));
      setChoosenAttacks(INITIAL_ATTACKS);
    }
  }, [chosenAttacks]);

  useEffect(() => setHasWinner(!gandalfHp || !sauronHp), [ gandalfHp, sauronHp ]);


  const infoSection = hasWinner ? (
    <div>{getWinnerName(gandalfHp, sauronHp)}</div>
  ) : (
    <>
      <div>Gandalf attacks with {chosenAttacks.gandalf ?? 'nothing'}</div>
      <div>Sauron attacks with {chosenAttacks.sauron ?? 'nothing'}</div>
    </>
  );

  return (
    <div className="App">
      { infoSection }
      <Gandalf
        health={gandalfHp}
        use={setChoosenAttack('gandalf')} />
      <Sauron
        health={sauronHp}
        use={setChoosenAttack('sauron')} />
    </div>
  );
}

export default App;
