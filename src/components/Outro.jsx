import { OUTRO_SUBTITLE, OUTRO_TITLE } from '../data';
import '../styles/Outro.css';

export default function Outro() {
  return (
    <div className="outro">
      <p>{OUTRO_TITLE}</p>
      <p>{OUTRO_SUBTITLE}</p>
    </div>
  );
}
