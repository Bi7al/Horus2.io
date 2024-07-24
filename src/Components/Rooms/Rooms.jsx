import React, { useState } from 'react'
import './Rooms.css'
function Rooms() {
    const [room, setRoom] = useState(
        {
            roomName: "",
            location: "",
            roomType: "",
            building: ""
        }
    );
    const [building1, setBuilding1] = useState([]);
    const [building3, setBuilding3] = useState([]);
    const [building2, setBuilding2] = useState([]);
    function handleChange(e) {
        const { name, value } = e.target;
        setRoom({
            ...room,
            [name]: value
        });

    }
    function handleSubmit(event) {
        event.preventDefault()
        switch (room.building) {
            case "building1":
                setBuilding1([...building1, room])
                break;
            case "building2":
                setBuilding2([...building2, room])
                break;
            case "building3":
                setBuilding3([...building3, room])
                break;

            default:
                break;
        }
        setRoom({
            roomName: '',
            location: '',
            roomType: '',
            building: ''

        })
    }

    return (
        <>
            <div className='room-wrapper' id='room-parent'>
                <button data-bs-toggle="modal" data-bs-target="#new-device" className='new-device-btn'>Add New Room</button>
                <div className="buiding-group">
                    <div className="building">
                        <div className="building__name"><button className='collapsed' data-bs-toggle="collapse" data-bs-target="#building1"><h5>Building 1</h5>Adress {building1.length} Rooms</button></div>
                        <hr />
                        <div className="building__rooms collapse" id='building1'>
                            {
                                building1.map((room, index) => {
                                    return (
                                        <div className="room" key={index}>
                                            {room.roomName}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="building">
                        <div className="building__name"><button className='collapsed' data-bs-toggle="collapse" data-bs-target="#building2"><h5>Building 2 </h5>Adress {building2.length} Rooms</button></div>
                        <hr />
                        <div className="building__rooms collapse" id='building2'>
                            {building2.map((room, index) => {
                                return (
                                    <div className="room" key={index}>
                                        {room.roomName}
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="building">
                        <div className="building__name"><button className='collapsed' data-bs-toggle="collapse" data-bs-target="#building3"><h5>Building 3</h5>Adress {building3.length} Rooms</button></div>
                        <hr />
                        <div className="building__rooms collapse" id='building3'>
                            {
                                building3.map((room, index) => {
                                    return (
                                        <div className="room" key={index}>
                                            {room.roomName}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="room-types">
                    <div className="types-title">
                        <h5>Room Groups</h5>
                    </div>
                    <div className="types-group">
                        <h6>Meeting Rooms</h6>
                        <h6>Open Spaces</h6>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="new-device"
                tabIndex="-1"
                aria-labelledby="ADDNEWDEVICE"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className=" modal-content ">
                        <form action="" onSubmit={handleSubmit} className='' id='room-modal'>
                            <div className="input-group-room d-flex flex-column">
                                <label htmlFor="room ">Name of the Room</label>
                                <input id='room' name='roomName' type="text" onChange={handleChange} value={room.roomName} placeholder="Enter Room Name" required={true} />
                            </div>
                            <div className="input-group-room d-flex align-items-center ">
                                <label htmlFor="room-type " className='me-5'>Room Type:</label>
                                <label htmlFor="room-type " className='ms-4'>Meeting Room</label>
                                <input type="radio" name='roomType' value={"meeting"} onChange={handleChange} className='ms-1' required={true} />
                                <label htmlFor="room-type " className='ms-4'>Offices</label>
                                <input type="radio" name='roomType' value={"office"} onChange={handleChange} className='ms-1' required={true} />
                                <label htmlFor="room-type " className='ms-4'>OpenSpaces</label>
                                <input type="radio" name='roomType' value={"OpenSpaces"} onChange={handleChange} className='ms-1' required={true} />
                            </div>
                            <div className="input-group-room d-flex flex-column">
                                <label htmlFor="building">Location</label>
                                <select name="building" id="building" onChange={handleChange} required={true} value={room.building}>
                                    <option >Select Building</option>
                                    <option value="building1">Building 1</option>
                                    <option value="building2">Building 2</option>
                                    <option value="building3">Building 3</option>
                                </select>
                            </div>

                            <div className="input-group-room d-flex flex-column">
                                <label htmlFor="room ">Floor</label>
                                <select name="location" id="building" onChange={handleChange} value={room.location} required={true}>
                                    <option >Select Floor</option>
                                    <option value="Floor 1">Floor 1</option>
                                    <option value="Floor 2">Floor 2</option>
                                    <option value="Floor 3">Floor 3</option>
                                </select>
                            </div>
                            <button type='submit' data-bs-dismiss="modal">Book</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rooms;