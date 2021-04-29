import { ReactComponent as GandalfSvg } from './gandalf.svg';
import provideInterface from '../provideInterface';
import './styles.scss';

function Gandalf(props) {
  return (
    <div className="Gandalf Character__specific">
      <GandalfSvg />
      {props.interface}
    </div>
  );
}

export default provideInterface(Gandalf);
