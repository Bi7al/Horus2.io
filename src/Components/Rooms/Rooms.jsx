import React, { useRef, useState } from 'react';
import './Rooms.css';
import NewRoom from './NewRoom';
import NewBuilding from './NewBuilding';
import NewRoomGroup from './NewRoomGroup';

function Rooms() {
    const modalCls = useRef();
    const [modal, setModal] = useState();
    const [buildings, setBuildings] = useState([
        /*
        Base Template
        {
        name:"",
        rooms:[]
        }
        */
    ]);

    const [roomGroups, setRoomGroups] = useState([
        {
            name: "Meeting Rooms",
        },
        {
            name: "Open Spaces",
        }
    ]);

    //Changes Content of Modal Dynamically
    function modalRender(event) {
        switch (event.target.name) {
            case "Room":
                if (buildings.length == 0 || roomGroups.length == 0) {
                    if (buildings.length == 0) {
                        setModal("! No Buildings to Add Room to")
                    }
                    else {
                        setModal("No Room Group Available ")
                    }
                } else {
                    setModal(<NewRoom buildings={buildings} setBuildings={setBuildings} roomGroups={roomGroups} modalClose={modalClose} />);
                }
                break;
            case "Building":
                setModal(<NewBuilding buildings={buildings} setBuildings={setBuildings} modalClose={modalClose} />);
                break;
            case "RoomGroup":
                setModal(<NewRoomGroup roomGroups={roomGroups} setRoomGroups={setRoomGroups} modalClose={modalClose} />);
                break;
            default:
                console.log("Invalid modal type");
                break;
        }
    }

    //Function Used to Close BootStrap Modal
    function modalClose() {
        if (modalCls.current) {
            modalCls.current.click();
        }
    }

    function removeBuilding(buildingName) {
        alert("Are you Sure And Want to Proceed Deleting " + buildingName)
        setBuildings(buildings.filter(building => building.name !== buildingName));
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

    function removeRoomGroup(groupName) {
        alert("Are you Sure And Want to Proceed Deleting " + groupName)
        setRoomGroups(roomGroups.filter(group => group.name !== groupName));
    }

    return (
        <>
            <div className='room-wrapper' id='room-parent'>
                <button data-bs-toggle="modal" name='Room' data-bs-target="#modal" onClick={modalRender} className='add-new-btn'>Add New Room</button>
                <button data-bs-toggle="modal" name='Building' data-bs-target="#modal" onClick={modalRender} className='add-new-btn ms-2'>Add New Buidling</button>
                <button data-bs-toggle="modal" name='RoomGroup' data-bs-target="#modal" onClick={modalRender} className='add-new-btn ms-2'>Add New Room Group</button>
                <div className="buiding-group">

                    {
                        buildings.map((building, index) => {
                            return (
                                <div key={index} className="building">
                                    <div className="building__name"><button className='collapsed' data-bs-toggle="collapse" data-bs-target={`#building${index}`}><h5>{building.name}</h5>Adress {building.address}<br />Rooms: {building.rooms.length}</button>
                                    </div>
                                    <hr />
                                    <div className="building__rooms collapse" id={`building${index}`}>
                                        {
                                            building.rooms.map((room, index) => {
                                                return (
                                                    <div className="room " key={index}>
                                                        {room.roomName}
                                                        <button className='remove-room-btn' onClick={() => removeRoom(room)} >Remove</button>
                                                    </div>
                                                )
                                            })

                                        }
                                    </div>
                                    <hr />
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
                        {
                            roomGroups.map((group, index) => {
                                return (
                                    <div key={index} className='room-group'>
                                        <h6>{group.name}</h6>
                                        <button className='remove-room-group-btn' onClick={() => removeRoomGroup(group.name)}>Remove</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
            <div
                className="modal fade"
                id="modal"
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
