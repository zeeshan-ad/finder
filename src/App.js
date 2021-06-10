import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <form>
        <h2>Choose Sensor</h2>
        <input type='text' placeholder='Sensor Id*' required/>
        <input type='text' placeholder='Device Id*' required/>
        <input type="submit" value="SUBMIT"/>
        </form>
    </div>
  );
}

export default App;
