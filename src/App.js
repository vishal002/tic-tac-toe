import React from 'react';
import './App.css';
import Game from './Game/Game';

function App() {
  return (
    <div className="container">
      <div className="row">
          <div className="col-lg-6 col-sm-6">
              <Game />
          </div>
      </div>
    </div>
  );
}

export default App;
