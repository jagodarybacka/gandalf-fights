import { ReactComponent as GandalfSvg } from './gandalf.svg';
import provideInterface from '../provideInterface';
import './styles.scss';

function Gandalf() {
  return (
    <div className="Gandalf">
      <GandalfSvg />
    </div>
  );
}

export default provideInterface(Gandalf);
