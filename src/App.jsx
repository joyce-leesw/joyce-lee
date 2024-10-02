import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Outro from './components/Outro';
import Projects from './components/Projects';

function App() {

  return (
    <div className="container">
      <NavBar />
      <main className="main-content">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Outro />
      </main>
    </div>
  );
}

export default App;
