import React, { useRef, useState } from 'react';
import './Rooms.css';
import NewRoom from './NewRoom';
import NewBuilding from './NewBuilding';
import NewRoomGroup from './NewRoomGroup';
import Floor from './Floor';

function Rooms() {
    const modalCls = useRef();
    const modalOpn = useRef()
    const [modal, setModal] = useState();
    const [buildings, setBuildings] = useState([

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
        setModal((prev) => {
            return null;
        })
        switch (event.target.name) {

            case "Room":
                if (buildings.length === 0 || roomGroups.length === 0) {
                    if (buildings.length === 0) {

                        setModal("! No Buildings to Add Room to")

                    } else {

                        setModal("No Room Group Available ")


                    }
                } else {
                    const hasFloors = buildings.some((building) => Object.keys(building.floors).length > 0);
                    if (!hasFloors) {

                        setModal("No Floors available to add a room");


                    } else {

                        setModal(<NewRoom buildings={buildings} setBuildings={setBuildings} roomGroups={roomGroups} modalClose={modalClose} />);

                    }
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
        modalOpn.current.click();
    }
    //Function TO add A Floor To Building
    function addFloor(buildingName) {
        const updatedBuildings = buildings.map((building) => {
            if (building.name == buildingName) {
                building.floors = {
                    ...building.floors, [`floor${building.floorCount++}`
                    ]: []
                }

            }
            return building;
        });
        setBuildings(updatedBuildings)
    }

    //Function Used to Close BootStrap Modal
    function modalClose() {
        if (modalCls.current) {
            modalCls.current.click();
        }
    }
    //Function to remove a Buidling
    function removeBuilding(buildingName) {
        if (window.confirm("Are you Sure And Want to Proceed Deleting " + buildingName))
            setBuildings(buildings.filter(building => building.name !== buildingName));
    }
    //Function to Remove A floor
    function removeFloor(buildingName, floorName, floorIndex) {
        if (window.confirm("Are you Sure And Want to Proceed Deleting " + floorName + " from " + buildingName)) {
            const updatedBuildings = buildings.map((building) => {
                if (building.name == buildingName) {
                    delete building.floors[floorName];
                    building.floorCount--;
                }
                return building;
            });
            setBuildings(updatedBuildings);

        }

    }

    //Function Used to remove A room 
    function removeRoom(targetRoom) {
        if (window.confirm("Are you Sure And Want to Proceed Deleting " + targetRoom.roomName)) {
            const buildingsWithRoomRemoved = buildings.map((building) => {
                if (building.name === targetRoom.building) {
                    Object.keys(building.floors).forEach((floorKey) => {
                        building.floors[floorKey] = building.floors[floorKey].filter((room) => room.roomId !== targetRoom.roomId);
                    });
                }
                return building;
            });
            setBuildings(buildingsWithRoomRemoved);
        }
    }


    function removeRoomGroup(groupName) {
        alert("Are you Sure And Want to Proceed Deleting " + groupName)
        setRoomGroups(roomGroups.filter(group => group.name !== groupName));
    }

    return (
        <>
            <div className='room-wrapper' id='room-parent'>
                <button name='Room' onClick={modalRender} className='add-new-btn'>Add New Room</button>
                <button name='Building' onClick={modalRender} className='add-new-btn ms-2'>Add New Buidling</button>
                <button name='RoomGroup' onClick={modalRender} className='add-new-btn ms-2'>Add New Room Group</button>
                <button ref={modalOpn} data-bs-toggle="modal" data-bs-target="#modal" hidden>modal toggle</button>
                <div className="buiding-group">

                    {
                        buildings.map((building, index) => {
                            return (
                                <div key={index} className="building">
                                    <div className="building__name"><button className='collapsed accordian-button' data-bs-toggle="collapse" data-bs-target={`#building${index}`}><h5>{building.name}</h5>Adress {building.address}<br /></button><button onClick={() => addFloor(building.name)} className='add-floor' data-bs-toggle="collapse" data-bs-target={`#building${index}`}>+ Add Floor</button>
                                    </div>
                                    <hr />
                                    <div className="building__floors  collapse  " id={`building${index}`}>
                                        {
                                            Object.keys(building.floors).map((key, index) => {
                                                return (
                                                    <div key={index}>
                                                        <Floor floor={building.floors[key]} index={index} removeRoom={removeRoom} />
                                                        <button className='remove-btn' onClick={() => { removeFloor(building.name, key, index) }}>Remove Floor {index}</button>
                                                    </div>

                                                )
                                            })


                                        }
                                    </div>
                                    <hr />
                                    <button className='remove-btn' onClick={() => removeBuilding(building.name)}>Remove Building</button>
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
