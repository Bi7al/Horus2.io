import React, { useState } from 'react';

function NewRoom({ buildings, setBuildings, modalClose, roomGroups }) {
    const [room, setRoom] = useState({
        roomId: '',
        roomName: "",
        location: "", // This will store the floor number
        roomType: "",
        building: "", // This will store the building name
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
        const newRoomId = crypto.randomUUID();

        // Use the newRoomId variable instead of room.roomId
        const updatedRoom = { ...room, roomId: newRoomId };
        //Find the building and floor to add the new room to
        const updatedBuildings = buildings.map(building => {
            if (building.name === room.building) {
                const updatedFloors = { ...building.floors };

                updatedFloors[room.location].push(updatedRoom);
                return { ...building, floors: updatedFloors };
            }
            return building;
        });
        console.log(updatedRoom)
        setBuildings(updatedBuildings);

        setRoom({
            roomId: '',
            roomName: '',
            location: '',
            roomType: '',
            building: '',
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

                            <label key={index} htmlFor="room-type " className='ms-4 d-flex align-items-center'>{roomType.name}
                                <input type="radio" name='roomType' value={roomType.name} onChange={handleChange} className='ms-1' required={true} />
                            </label>
                        )
                    })
                }
            </div>
            <div className="input-group-room d-flex flex-column">
                <label htmlFor="building">Building</label>
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
                <label htmlFor="floor">Floor</label>
                <select name="location" id="floor" onChange={handleChange} value={room.location} required={true}>
                    <option >Select Floor</option>
                    {
                        // Get the floors for the selected building
                        buildings.find(building => building.name === room.building)?.floors &&
                        Object.keys(buildings.find(building => building.name === room.building).floors).map((floor, index) => {
                            return <option key={index} value={floor}>Floor {index}</option>
                        })
                    }
                </select>
            </div>

            <button type='submit' >Create Room</button>
        </form>
    )
}

export default NewRoom;