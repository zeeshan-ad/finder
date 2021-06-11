import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

function Map() {
    let query = new URLSearchParams(useLocation().search);
    const device_id = query.get('device');
    const sensor_id = query.get('sensor');

    useEffect(() =>{
        fetch('http://35.197.106.255:3000/api/v1.1/lastMultiple', {
        method: 'post',
        }).then(function(response){
        console.log(response)
        })
    })
    return (
        <div className='Map'>
           <p>{device_id} {sensor_id}</p>
        </div>
    )
}

export default Map;
