import React, { useState } from 'react'

function NewUser({ users, setUsers, closeModal }) {

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        role: '',
        rooms: "",
        lastLogin: '',
        id: '',
    })
    function handleInput(event) {
        setNewUser({ ...newUser, [event.target.name]: event.target.value });
    }
    function handleNewUser(e) {
        closeModal();
        e.preventDefault();
        setUsers([...users, newUser]);
        setNewUser({
            name: '',
            email: '',
            role: '',
            rooms: "",
            lastLogin: '',
            id: '',
        });

    }
    return (
        <form onSubmit={handleNewUser} className='d-flex flex-column  align-items-center '>
            <div className="users-form">
                <div className="column">
                    <div className='users-form__input'>
                        <label htmlFor="">Enter User Name:</label>
                        <input type="text" name='name' value={newUser.name} onChange={handleInput} placeholder='Enter User Name' required />
                    </div>
                    <div className='users-form__input'>
                        <label htmlFor="">Enter User Email:</label>
                        <input type="email" name='email' value={newUser.email} onChange={handleInput} placeholder='Enter User Email' required />
                    </div>
                    <div className='users-form__input'>
                        <label htmlFor="">Number of Rooms:</label>
                        <input type="number" name='rooms' value={newUser.rooms} onChange={handleInput} placeholder='Enter Number of Rooms' required />
                    </div>
                </div>
                <div className="column">
                    <div className='users-form__input'>
                        <label htmlFor="">Enter Role of the User:</label>
                        <input type="text" name='role' value={newUser.role} onChange={handleInput} placeholder='Enter User Role' required />
                    </div>
                    <div className='users-form__input'>
                        <label htmlFor="">Enter User ID:</label>
                        <input type="number" name='id' value={newUser.id} onChange={handleInput} placeholder='Enter User ID' required />
                    </div>
                    {/* <div className='users-form__input'>
                <label htmlFor="">Last Login</label>
                <input type="" name='lastLogin' value={newUser.lastLogin} onChange={handleInput} placeholder='Enter User Name' required />
              </div> */}

                </div>
            </div>
            <button className="form-submit" >Submit</button>
        </form>
    )
}

export default NewUser