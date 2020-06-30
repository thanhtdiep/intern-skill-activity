import React from 'react';
import logoMount from './logo/Icon-awesome-mountain.svg';
import logoFire from './logo/Icon-awesome-fire.svg';
import logoThermo from './logo/Icon-ionic-ios-thermometer.svg';
import logoBike from './logo/Icon-metro-directions-bike.svg';
import backgroundRect1 from './logo/Rectangle-135.svg';
import backgroundRect2 from './logo/Rectangle-136.svg';
import backgroundRect3 from './logo/Rectangle-137.svg';
import backgroundRect4 from './logo/Rectangle-207.svg';

import './App.css';

function IconButton(props) {
  return (
    <div className="container">
      <img src={props.background} />
      <button type="button" className="btn" style={{background: `url(` + props.icon + `) no-repeat`}}></button>
    </div>
  );
}

function Log(){
  console.log("Button pressed");
}

function App() {
  return (
    <div className="App">
      <IconButton icon={logoMount} background={backgroundRect2}/>
    </div>
  );
}

export default App;
