import React, { useState, useEffect } from 'react';
import "./Devices.css"
function Devices() {
    // Initialize devices state with initial devices
    const [devices, setDevices] = useState({
        Lights: {
            count: 6,
            type: 'Lamps',
        },
        Heaters: {
            count: 2,
            type: 'Heaters',
        },
        AirQuality: {
            type: '',
        },
    });

    // Initialize new device input state
    const [newDevice, setNewDevice] = useState('');

    // Function to add a new device
    const addDevice = () => {
        // Check if input is not empty
        if (newDevice.trim() !== '') {
            // Extract type and count from input
            const type = newDevice.split(' ')[0];
            const count = parseInt(newDevice.split(' ')[1]);

            // Update devices state with new device
            setDevices((prevDevices) => ({
                ...prevDevices,
                [type.toLowerCase()]: {
                    count,
                    type,
                },
            }));

            // Reset new device input
            setNewDevice('');
        }
    };

    return (
        <div className="device-wrapper">
            <h1>List of devices</h1>
            <div className="addbtn">
                <button>Add a Device</button>
            </div>
            {/* Render device list */}
            <div className="device-list-container">
                {Object.keys(devices).map((key, index) => (
                    <div className="devices" key={index}>
                        <div className="header ">
                            <button className={`collapsed ${key} header`} type="button" data-bs-toggle="collapse" data-bs-target={`#${key}`} aria-expanded="true" >
                                <h5>{key}</h5>
                            </button>
                        </div>
                        <div className="accordianItem " >

                            <div id={key} className="collapse" >

                                <div className="accordion-body">
                                    {devices[key].type &&
                                        <p>
                                            <strong> {devices[key].type}: {devices[key].count}</strong>

                                        </p>}
                                </div>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
            {/* Render new device input */}
            {/* < div className="new-device-input" >
                <input
                    type="text"
                    value={newDevice}
                    onChange={(e) => setNewDevice(e.target.value)}
                    placeholder="Add a new device"
                />
                <button onClick={addDevice}>Add a device</button>
            </div> */}
        </div >
    );
}

export default Devices;