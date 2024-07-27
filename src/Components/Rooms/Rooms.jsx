import React, { useRef, useState } from 'react'
import './Rooms.css'
import NewRoom from './NewRoom';
import NewBuilding from './NewBuilding';
function Rooms() {
    const modalCls = useRef();
    const [modal, setModal] = useState();
    const [buildings, setBuildings] = useState([

    ])

    function modalRender(event) {
        switch (event.target.name) {
            case "Room":
                if (buildings.length === 0) {
                    setModal("! No Buildings to Add Room to")
                } else {
                    setModal(<NewRoom buildings={buildings} setBuildings={setBuildings} modalClose={modalClose} />);
                }
                break;
            case "Building":
                setModal(<NewBuilding buildings={buildings} setBuildings={setBuildings} modalClose={modalClose} />);
                break;
            default:
                console.log("Invalid modal type");
                break;
        }
    }

    function modalClose() {
        if (modalCls.current) {
            modalCls.current.click();
        }
    }

    function removeBuilding(buildingName) {
        const buildingIndex = buildings.findIndex(building => building.name === buildingName);
        if (buildingIndex !== -1) {
            setBuildings(buildings.filter(building => building.name !== buildingName));
        } else {
            console.log("Building not found");
        }
    }

    function removeRoom(targetRoom) {
        const result = buildings.map(building => {
            if (building.name === targetRoom.building) {
                building.rooms = building.rooms.filter(room => room.roomId !== targetRoom.roomId);
            }
            return building;
        })
        setBuildings(result);
    }
    return (
        <>
            <div className='room-wrapper' id='room-parent'>
                <button data-bs-toggle="modal" name='Room' data-bs-target="#new-room" onClick={modalRender} className='new-room-btn'>Add New Room</button>
                <button data-bs-toggle="modal" name='Building' data-bs-target="#new-room" onClick={modalRender} className='new-room-btn ms-2'>Add New Buidling</button>
                <div className="buiding-group">

                    {
                        buildings.map((building, index) => {
                            return (
                                <div key={index} className="building">
                                    <div className="building__name"><button className='collapsed' data-bs-toggle="collapse" data-bs-target={`#building${index}`}><h5>{building.name}</h5>Adress {building.rooms.length} Rooms</button>
                                    </div>
                                    <hr />
                                    <div className="building__rooms collapse" id={`building${index}`}>
                                        {
                                            building.rooms.map((room, index) => {
                                                return (
                                                    <div className="room" key={index}>
                                                        {room.roomName}
                                                        <button onClick={() => removeRoom(room)} >X</button>
                                                    </div>
                                                )
                                            })

                                        }
                                    </div>
                                    <button className='building-remove-btn' onClick={() => removeBuilding(building.name)}>Remove Building</button>
                                </div>)
                        })
                    }
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
            </div >
            <div
                className="modal fade"
                id="new-room"
                tabIndex="-1"
                aria-labelledby="ADDNEWRoom"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className=" modal-content p-1 new-room-form">
                        {modal}
                    </div>
                </div>
                <button ref={modalCls} data-bs-dismiss="modal" hidden></button>
            </div>
        </>
    )
}

export default Rooms;
