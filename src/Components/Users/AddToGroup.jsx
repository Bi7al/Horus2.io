import React, { useRef, useState } from 'react'

function AddToGroup({ users, groups, setGroups, closeModal, groupId }) {
    const [selectedUser, setSelectedUser] = useState({
        name: '',
        email: '',
        role: '',
        rooms: "",
        lastLogin: '',
        id: '',
    });
    function addToGroup(event) {
        event.preventDefault();
        const targetGroup = groups.find(group => (group.id == groupId));
        const hasUser = targetGroup.members.some((member) => member.id == selectedUser.id);
        console.log(hasUser)
        if (hasUser) {
            alert("User is already in the group " + targetGroup.name);
        }
        else {
            // the logic to add the user to the group
            const newGroups = groups.map((group) => {
                if (group.id === groupId) {
                    return { ...group, members: [...group.members, selectedUser] };
                }
                return group;
            });
            setGroups(newGroups);

        }
        setSelectedUser({
            name: '',
            email: '',
            role: '',
            rooms: "",
            lastLogin: '',
            id: '',
        })
        closeModal();

    }
    function handleChange(e) {
        const targetUser = users.find((user) => user.id == e.target.value);
        setSelectedUser(targetUser);
    }
    return (
        <form action="" className='d-flex justify-content-between w-100 p-5 '>
            <select className='w-50' required={true} onChange={handleChange} value={selectedUser.id} >
                <option value={null} >Select User</option>
                {
                    users.map((user, index) => {
                        return <option key={index} value={user.id}>{user.name}</option>
                    })
                }
            </select>
            <button className='btn btn-primary' onClick={addToGroup}>ADD</button>
        </form >
    )
}

export default AddToGroup