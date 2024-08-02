import React, { useState } from 'react'

function NewGroup({ groups, setGroups, closeModal }) {
    const [newGroup, setNewGroup] = useState({
        name: '',
        members: [],
        id: '',
        newsAuth: {
            publishMessage: false,
            publishInvitation: false,
            moderateMessage: false,
        },
        adminAuth: {
            userManagement: false,
            roomManagement: false
        }
    })
    function handleNewsAuth(e) {
        const { name } = e.target;
        setNewGroup(prevState => ({
            ...prevState, newsAuth: { ...prevState.newsAuth, [name]: !prevState.newsAuth[name] }
        }))

    }
    function handleAdminAuth(e) {
        const { name } = e.target;
        setNewGroup(prevState => ({
            ...prevState, adminAuth: { ...prevState.adminAuth, [name]: !prevState.adminAuth[name] }
        }))


    }

    function handleInputGroup(event) {
        setNewGroup({ ...newGroup, [event.target.name]: event.target.value });
    }
    function handleNewGroup(e) {
        closeModal();
        e.preventDefault();
        console.log(newGroup)
        setGroups([...groups, newGroup]);
        setNewGroup({
            name: '',
            members: [],
            id: '',
            newsAuth: {
                publishMessage: false,
                publishInvitation: false,
                moderateMessage: false,
            },
            adminAuth: {
                userManagement: false,
                roomManagement: false
            }
        });

    }
    return (
        <form onSubmit={handleNewGroup} className='d-flex flex-column  align-items-center '>
            <div className="users-form">
                <div className="column">
                    <div className='users-form__input'>
                        <label htmlFor="groupname">Enter Group Name:</label>
                        <input type="text" id='groupname' name='name' value={newGroup.name} onChange={handleInputGroup} placeholder='Enter group Name' required />
                    </div>
                    <div className='users-form__input'>
                        <label htmlFor="">Group Authorizations:</label>
                        <label htmlFor="" className='auth'><b>News Feed</b></label>
                        <label htmlFor="messageAuth" className='auth-option'>
                            Publish A Message
                            <input type="checkbox" checked={newGroup.newsAuth.publishMessage} onChange={handleNewsAuth} name="publishMessage" id="messageAuth" />
                        </label>
                        <label htmlFor="invitationAuth" className='auth-option'>
                            Publish An Invitation
                            <input type="checkbox" checked={newGroup.newsAuth.publishInvitation} onChange={handleNewsAuth} name="publishInvitation" id="invitationAuth" />
                        </label>
                        <label htmlFor="modAuth" className='auth-option'>
                            Message Moderation
                            <input type="checkbox" checked={newGroup.newsAuth.moderateMessage} onChange={handleNewsAuth} name="moderateMessage" id="modAuth" />
                        </label>

                    </div>
                </div>
                <div className="column">
                    <div className='users-form__input'>
                        <label htmlFor="groupid">Enter Group ID:</label>
                        <input type="number" id='groupid' name='id' value={newGroup.id} onChange={handleInputGroup} placeholder='Enter Group ID' required />
                    </div>
                    <div className='users-form__input'>
                        <label htmlFor="">Group Authorizations:</label>
                        <label htmlFor="" className='auth'><b>Admin Interface</b></label>
                        <label htmlFor="user-management" className='auth-option'>
                            User Management
                            <input type="checkbox" checked={newGroup.adminAuth.userManagement} onChange={handleAdminAuth} name="userManagement" id="user-management" />
                        </label>
                        <label htmlFor="room-management" className='auth-option'>
                            Room Managment
                            <input type="checkbox" checked={newGroup.adminAuth.roomManagement} onChange={handleAdminAuth} name="roomManagement" id="room-management" />
                        </label>


                    </div>
                </div>
            </div>
            <button className="form-submit" >Submit</button>
        </form>
    )
}

export default NewGroup