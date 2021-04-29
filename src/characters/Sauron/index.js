import { ReactComponent as SauronSvg } from './sauron.svg';
import provideInterface from '../provideInterface';
import { ID } from 'consts';
import './styles.scss';

function Sauron(props) {
  return (
    <div className="Sauron Character__specific">
      <SauronSvg />
      {props.interface}
    </div>
  );
}

export default provideInterface(Sauron, ID.SAURON);
