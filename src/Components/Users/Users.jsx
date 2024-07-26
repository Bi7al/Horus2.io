import React, { useState, useEffect, useRef } from 'react';
import "./Users.css"
function UserRow(props) {
  return (
    <>
      <tr key={props.user.id} >
        <td>{props.user.name}</td>
        <td>{props.user.email}</td>
        <td>{props.user.rooms}</td>
        <td>{props.user.role}</td>
        <td>{props.user.lastLogin}</td>
        <td>{props.user.id}</td>
      </tr></>

  );
}

function GroupRow(props) {
  return (
    <tr key={props.group.id}>
      <td>{props.group.name}</td>
      <td>{props.group.members}</td>
      <td>{props.group.id}</td>
    </tr>
  );
}

function Users() {
  const modal1 = useRef(); //Stores Refrence to modal close btns and is auto clicked to close modal in form submit functions
  const modal2 = useRef();
  const [users, setUsers] = useState([
    {
      name: 'Name',
      email: 'nom-prenom@google.com',
      rooms: 1,
      role: 'User',
      lastLogin: '24/04/2024',
      id: '636f629'
    },
    {
      name: 'Name',
      email: 'nom-prenom@google.com',
      rooms: 1,
      role: 'Editor',
      lastLogin: 'Today',
      id: '636f630'
    }
  ]);

  const [groups, setGroups] = useState([
    {
      name: 'Room Manager',
      members: 1,
      id: '636f628'
    },
    {
      name: 'Editor',
      members: 1,
      id: '636f629'
    }
  ]);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: '',
    rooms: "",
    lastLogin: '',
    id: '',
  })


  const [newGroup, setNewGroup] = useState({
    name: '',
    members: '',
    id: '',
  })
  function handleInput(event) {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  }
  function handleNewUser(e) {
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
    modal1.current.click();

  }
  function handleInputGroup(event) {
    setNewGroup({ ...newGroup, [event.target.name]: event.target.value });
  }
  function handleNewGroup(e) {
    e.preventDefault();
    setGroups([...groups, newGroup]);
    setNewGroup({
      name: '',
      members: '',
      id: '',
    });
    modal2.current.click();
  }


  return (
    <>
      <div className="management-container">
        <div className='d-flex justify-content-between'>
          <h1>Users</h1>
          <div>
            <button data-bs-toggle="modal" data-bs-target="#NewUser">Add User</button>
            <button data-bs-toggle="modal" data-bs-target="#NewGroup">Add Group</button></div>
        </div >
        <div className="table-container">

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>No. of Rooms</th>
                <th>Role</th>
                <th>Last Login</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {users.map(function (user) {
                return <UserRow key={user.id} user={user} />;
              })}
            </tbody>
          </table>
        </div>
        <h1>Groups</h1>
        <div className="table-container">

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Members</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {groups.map(function (group) {
                return <GroupRow key={group.id} group={group} />;
              })}
            </tbody>
          </table>
        </div>
      </div>



      {/* Modal */}
      <div className="modal fade" id="NewUser" tabIndex="-1" role="dialog" aria-labelledby="New Automation Dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content ">
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
          </div>
          {/* Modal Close Button */}
          <button data-bs-dismiss="modal" ref={modal1} hidden></button>
        </div>
      </div>
      {/* MOdal For New Group */}
      <div className="modal fade" id="NewGroup" tabIndex="-1" role="dialog" aria-labelledby="New Automation Dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content ">
            <form onSubmit={handleNewGroup} className='d-flex flex-column  align-items-center '>
              <div className="users-form">
                <div className="column">

                  <div className='users-form__input'>
                    <label htmlFor="">Enter Group Name:</label>
                    <input type="text" name='name' value={newGroup.name} onChange={handleInputGroup} placeholder='Enter group Name' required />
                  </div>
                  <div className='users-form__input'>
                    <label htmlFor="">Number of Members:</label>
                    <input type="number" name='members' value={newGroup.members} onChange={handleInputGroup} placeholder='Enter Number of Members' required />
                  </div>
                </div>
                <div className="column">

                  <div className='users-form__input'>
                    <label htmlFor="">Enter Group ID:</label>
                    <input type="number" name='id' value={newGroup.id} onChange={handleInputGroup} placeholder='Enter Group ID' required />
                  </div>
                </div>
              </div>
              <button className="form-submit" >Submit</button>
            </form>
          </div>
        </div>
        {/* Modal Close Button */}
        <button data-bs-dismiss="modal" ref={modal2} hidden></button>
      </div>

    </>
  );
}

export default Users;