import React, { useState } from 'react'

function NewRoomGroup({ roomGroups, setRoomGroups, modalClose }) {
    const [newRoomGroup, setNewGroupName] = useState();

    function addNewGroup(event) {
        event.preventDefault();
        setRoomGroups([...roomGroups, { name: newRoomGroup }]);
        modalClose();
        setNewGroupName("");
    }

    return (
        <form action="" onSubmit={addNewGroup} className='d-flex flex-column align-items-start gap-4 m-3'>
            <input className='w-50 p-2' type="text" value={newRoomGroup} onChange={(e) => setNewGroupName(e.target.value)} placeholder='Enter New Room Group Name' />
            <button type="submit" className='add-new-btn'>Add to Groups</button>
        </form>
    )
}

export default NewRoomGroup