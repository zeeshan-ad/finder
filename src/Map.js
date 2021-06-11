import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import close from '@iconify/icons-mdi/close-box';
import './style.css';

function Map() {
    let query = new URLSearchParams(useLocation().search);
    const device_id = query.get('device');
    const sensor_id = query.get('sensor');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const getLocation = async () => {
    try {setInterval( async () => {
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
    }, 10000)
    } catch (error) {
        console.error(error);
    }

    }
    useEffect(() => {
        getLocation()
    })
    let props = {
        center: {
            lat: latitude,
            lng: longitude
        },
        zoom: 20
    };

    const [pin, setPin] = useState(false);

    const handlePin = () => {
        setPin(!pin);
    }

    const LocationPin = ({ text }) => (
    <div className="pin">
        <Icon onClick={handlePin} icon={locationIcon} className="pin-icon" />
        { pin ? 
        <div className="pin-box">
        <Icon onClick={handlePin} icon={close} className="close" />
        <p>{text}</p>
        </div> : ''}
    </div>
    );
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC0WU3Rt4PdNyLjia2qq-6384s_oL5D4xQ' }}
          center={props.center}
          zoom={props.zoom}
        >
          <LocationPin
            lat={latitude}
            lng={longitude}
            text={sensor_id}
          />
        </GoogleMapReact>
      </div>
    )
}

export default Map;
