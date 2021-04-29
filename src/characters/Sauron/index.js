import { ReactComponent as SauronSvg } from './sauron.svg';
import provideInterface from '../provideInterface';
import './styles.scss';

function Sauron(props) {
  return (
    <div className="Sauron Character__specific">
      <SauronSvg />
      {props.interface}
    </div>
  );
}

export default provideInterface(Sauron);
