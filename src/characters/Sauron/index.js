import { ReactComponent as SauronSvg } from './sauron.svg';
import provideInterface from '../provideInterface';
import './styles.scss';

function Sauron() {
  return (
    <div className="Sauron">
      <SauronSvg />
    </div>
  );
}

export default provideInterface(Sauron);
