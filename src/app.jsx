/* eslint-disable import/extensions */
import React, { useState } from 'react';
import 'bootstrap/scss/bootstrap.scss';
import Nav from './components/Nav';
import ReactCounterAsync from './components/ReactCounterAsync';

function App() {
  const [load, setLoad] = useState(false);
  const lazyLoadCounterComp = () => {
    setLoad(!load);
  };
  return (
    <div className="appContainer">
      <Nav />
      {load && <ReactCounterAsync />}
      <button type="button" onClick={() => { lazyLoadCounterComp(); }}>Load counter component</button>
    </div>
  );
}
export default App;
