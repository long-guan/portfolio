import './App.css';
import NameTitle from './NameTitle';
import Navbar from './Navbar';
import Body from './Body';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <NameTitle />
          <Navbar />
        </div>
        <div className="col">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
