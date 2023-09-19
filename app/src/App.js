import './App.css';
import NameTitle from './NameTitle';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';

function App() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-4">
          <NameTitle />
          <Navbar />
        </div>
        <div className="col-8">
          <About />
          <Projects />
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default App;
