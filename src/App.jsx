import './App.css'
import About from './components/About';
import Experience from './components/Experience';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import { OUTRO_TITLE, OUTRO_SUBTITLE } from './data';

function App() {

  return (
    <div className="container">
      <NavBar />
      <main className="main-content">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <div className="outro">
          <p>{OUTRO_TITLE}</p>
          <p>{OUTRO_SUBTITLE}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
