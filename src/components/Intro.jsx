import { INTRO_NAME, INTRO_SUBTITLE, INTRO_TITLE } from '../data';
import '../styles/Intro.css';

export default function Intro() {
  return (
    <section id="home" className="intro">
      <h4>{INTRO_TITLE}</h4>
      <h1>{INTRO_NAME}</h1>
      <h3>{INTRO_SUBTITLE}</h3>
    </section>
  );
}
