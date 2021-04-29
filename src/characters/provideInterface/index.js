import { ATTACK, ATTACK_ALIAS } from 'consts';
import './styles.scss';

const provideInterface = (CharacterComponent, id) => props => {
  const attackList = Object.entries(ATTACK).map(([ name, type ] ) => (
    <div
      className="Character__attack"
      key={name}
      onClick={() => props.use(type)}>
      {ATTACK_ALIAS[id][type]}
    </div>
  ));
  const interfaceElements = (
    <>
      <div>HP: {props.health}</div>
      <div className="Character__attack-list">{attackList}</div>
    </>
  );

  return (
    <div className="Character">
      <CharacterComponent interface={interfaceElements}/>
    </div>
  );
};

export default provideInterface;
