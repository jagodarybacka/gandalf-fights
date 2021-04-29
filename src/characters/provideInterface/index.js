import { ATTACK } from 'consts';
import './styles.scss';

const provideInterface = CharacterComponent => props => {
  const attackList = Object.entries(ATTACK).map(([ name, type ] ) => (
    <div
      className="Character__attack"
      key={name}
      onClick={() => props.use(type)}>
      {name}
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
