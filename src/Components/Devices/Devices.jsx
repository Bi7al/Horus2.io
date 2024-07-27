import React, { useState } from 'react';
import "./Devices.css"

function Devices() {
    // Initialize devices state with initial devices
    //Can also Use Multiple states for multiple device types
    const [devices, setDevices] = useState({
        Lights: {
            count: 6,
            type: 'Lamps',
            devices: [
                { id: 1, name: 'Living Room Lamp' },
                { id: 2, name: 'Kitchen Lamp' },
                { id: 3, name: 'Bedroom Lamp' },


            ],
        },
        Heaters: {
            count: 2,
            type: 'Heaters',
            devices: [
                { id: 1, name: 'Living Room Heater' },
                { id: 2, name: 'Bedroom Heater' },
            ],
        },
        AirQuality: {
            type: '',
            devices: [],
        },
    });
    //* PLACE HOLDER CODE SECTION
    //! Initialize new device input state
    // const [newDevice, setNewDevice] = useState('');

    // Function to add a new device
    const addDevice = () => {
        //!Left As placeholder
        // // Check if input is not empty
        // if (newDevice.trim() !== '') {
        //     // Extract type and count from input
        //     const type = newDevice.split(' ')[0];
        //     const count = parseInt(newDevice.split(' ')[1]);

        //     // Update devices state with new device
        //     setDevices((prevDevices) => ({
        //         ...prevDevices,
        //         [type.toLowerCase()]: {
        //             count,
        //             type,
        //             devices: [],
        //         },
        //     }));

        //     // Reset new device input
        //     setNewDevice('');
        // }
    };

    // Function to assign device to room
    function assignDeviceToRoom(deviceId, roomId) {
        //!Place holder code
        // Update devices state with assigned room
        // setDevices((prevDevices) => {
        //     const deviceType = Object.keys(prevDevices).find((type) => prevDevices[type].devices.find((device) => device.id === deviceId));
        //     const deviceIndex = prevDevices[deviceType].devices.findIndex((device) => device.id === deviceId);
        //     prevDevices[deviceType].devices[deviceIndex].room = roomId;
        //     return prevDevices;
        // });
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
                        <div className="header">
                            <button className={`collapsed ${key} header`} type="button" data-bs-toggle="collapse" data-bs-target={`#${key}`} aria-expanded="true">
                                <h5>{key}</h5>
                            </button>
                        </div>
                        <div className="accordianItem">
                            <div id={key} className="collapse">
                                <div className="accordion-body">
                                    {devices[key].type && (
                                        <p>
                                            <strong> {devices[key].type}: {devices[key].count}</strong>
                                        </p>
                                    )}
                                    <ul className='device-listing'>
                                        {devices[key].devices.map((device, index) => (
                                            <li key={index} >
                                                <button className='device-btn mb-1' onClick={() => console.log(`Device ${device.name} clicked!`)}>{device.name}</button>
                                                <select className='opt-btn' value={device.room} onChange={(e) => assignDeviceToRoom(device.id, e.target.value)}>
                                                    <option value="">Assign to room</option>
                                                    <option value="Living Room">Living Room</option>
                                                    <option value="Kitchen">Kitchen</option>
                                                    <option value="Bedroom">Bedroom</option>
                                                </select>
                                                <button className='ms-1 ps-1 border-0 opt-btn' onClick={(e) => console.log(e.target)}>Do Something</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Devices;