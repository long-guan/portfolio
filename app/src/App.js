import './App.css';
import Portfolio from './Portfolio';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Portfolio />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
