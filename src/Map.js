import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

function Map() {
    let query = new URLSearchParams(useLocation().search);
    const device_id = query.get('device');
    const sensor_id = query.get('sensor');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const getLocation = async () => {
    try {
        let response = await fetch('http://35.197.106.255:3000/api/v1.1/lastMultiple', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"devid":device_id})
        });
        let json = await response.json();
        setLatitude(json.data.latitude);
        setLongitude(json.data.longitude);
    } catch (error) {
        console.error(error);
    }

    }
    useEffect(() => {
        getLocation()
    })

    return (
        <div className='Map'>
           <p>{latitude} {longitude}</p>
        </div>
    )
}

export default Map;
