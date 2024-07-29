import React, { useState } from 'react';
import { v4 } from 'uuid';

function NewRoom({ buildings, setBuildings, modalClose, roomGroups }) {
    const [room, setRoom] = useState({
        roomId: null,
        roomName: "",
        location: "",
        roomType: "",
        building: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setRoom({
            ...room,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newRoom = { ...room, roomId: v4() };

        const updatedBuildings = buildings.map(building => {
            if (building.name === newRoom.building) {
                return { ...building, rooms: [...building.rooms, newRoom] };
            }
            return building;
        });

        setBuildings(updatedBuildings);

        setRoom({
            roomId: null,
            roomName: '',
            location: '',
            roomType: '',
            building: ''
        });

        modalClose();
    }

    return (
        <form action="" onSubmit={handleSubmit} className='' id='room-modal'>
            <div className="input-group-room d-flex flex-column">
                <label htmlFor="room ">Name of the Room</label>
                <input id='room' name='roomName' type="text" onChange={handleChange} value={room.roomName} placeholder="Enter Room Name" required={true} />
            </div>
            <div className="input-group-room d-flex align-items-center ">
                <label htmlFor="room-type " className='me-5'>Room Type:</label>
                {
                    roomGroups.map((roomType, index) => {
                        return (
                            <>
                                <label htmlFor="room-type " className='ms-4'>{roomType.name}</label>
                                <input type="radio" name='roomType' value={roomType.name} onChange={handleChange} className='ms-1' required={true} />
                            </>

                        )
                    })
                }

            </div>
            <div className="input-group-room d-flex flex-column">
                <label htmlFor="building">Location</label>
                <select name="building" id="building" onChange={handleChange} required={true} value={room.building}>
                    <option >Select Building</option>
                    {
                        buildings.map((building, index) => {
                            return <option key={index} value={building.name}>{building.name}</option>
                        })
                    }
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
            <button type='submit' >Create Room</button>
        </form>
    )
}

export default NewRoom;