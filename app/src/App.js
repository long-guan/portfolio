import './App.css';
import Portfolio from './Portfolio';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" render={<Portfolio />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
