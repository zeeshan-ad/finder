import React, {useState} from 'react';
import './style.css';

function Home() {
  const [deviceId, setDeviceId] = useState('');
  const [sensorId, setSensorId] = useState('');
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(deviceId === '' || sensorId === ''){
      alert("Both Sensor Id and Device Id are required field.")
    }
     else{
      window.location.href = "http://localhost:3000/Map?device="+deviceId+"&sensor="+sensorId;
    }
  }

  return (
    <div className="Home">
        <form onSubmit={handleSubmit}>
        <h2>Choose Sensor</h2>
        <input type='text' name="sensor" value={sensorId} onChange={e => setSensorId(e.target.value)} placeholder='Sensor Id*' required/>
        <input type='text' name="device" value={deviceId} onChange={e => setDeviceId(e.target.value)} placeholder='Device Id*' required/>
        <input type="submit" value="SUBMIT"/>
        </form>
    </div>
  );
}

export default Home;
