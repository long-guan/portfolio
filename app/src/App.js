import './App.css';
import React from 'react';
import Portfolio from './Portfolio';
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <HashRouter>
        <Routes>
            <Route exact path="/" element={<Portfolio/>}></Route>
        </Routes>
      </HashRouter>
  );
}

export default App;
