import React, { useRef, useState } from 'react';
import "./Devices.css"

function Devices() {
    // Initialize devices state with initial devices
    //Can also Use Multiple states for multiple device types
    const [devices, setDevices] = useState({
        Lights: {

            type: 'Lamps',
            devices: [
                { id: 1, name: 'Living Room Lamp' },
                { id: 2, name: 'Kitchen Lamp' },
                { id: 3, name: 'Bedroom Lamp' },


            ],
            count: 3,
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

    const [newDevice, setNewDevice] = useState({
        id: 0,
        deviceName: '',
        deviceType: '',
    });
    function onChange(e) {
        setNewDevice({ ...newDevice, [e.target.name]: e.target.value });
    }
    const ClseBtn = useRef();



    // Function to add a new device
    function addNewDevice(event) {
        event.preventDefault();
        setNewDevice((prev) => {
            return { ...prev, id: new Date().getTime() }
        })
        setDevices((prev) => ({
            ...prev,
            [newDevice.deviceType]: {
                ...prev[newDevice.deviceType],
                devices: [...prev[newDevice.deviceType].devices, {
                    id: newDevice.id,
                    name: newDevice.deviceName
                }],
                count: prev[newDevice.deviceType].count + 1
            },

        }))
        setNewDevice({
            id: 0,
            deviceName: '',
            deviceType: '',
        });
        ClseBtn.current.click();

    };

    // Function to assign device to room
    function assignDeviceToRoom(deviceId, roomId) {

    };

    return (
        <>
            <div className="device-wrapper">
                <h1>List of devices</h1>
                <div className="addbtn">
                    <button data-bs-toggle="modal" data-bs-target='#input-modal-new-device'>Add a Device</button>
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


            {/* MOdal to add a new Device */}
            <div className="modal fade" id="input-modal-new-device" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content p-3 height w-75">
                        <form action="" onSubmit={addNewDevice}>
                            <div className="device-type-input mb-3">
                                Select Device type: {
                                    Object.keys(devices).map((key, index) => {
                                        return (
                                            <div key={index} className="option-device-type ">
                                                <input type="radio" id='heater' name='deviceType' value={key} onChange={onChange} required />
                                                <label htmlFor="heater">{key}</label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="device-name-input">
                                <label htmlFor="device-name" className='text-muted'>Enter Name for the Device:</label>
                                <input type="text" className='p-1 w-50' id="device-name" name="deviceName" value={newDevice.deviceName} onChange={onChange} placeholder="Enter Device Name" required />
                            </div>
                            <button className='new-device-submit-btn'>Submit</button>
                            <button hidden data-bs-dismiss="modal" ref={ClseBtn}></button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Devices;