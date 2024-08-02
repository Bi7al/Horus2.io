import React, { useState, useEffect, useRef } from 'react';
import "./Users.css"
import NewGroup from './NewGroup';
import NewUser from './NewUser';
import AddToGroup from './AddToGroup';

function UserRow({ user, handleDeleteUser, handleManageUser, handleSendLoginId }) {
  //const [showOptions, setShowOptions] = useState(false);



  return (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.rooms}</td>
      <td>{user.role}</td>
      <td>{user.lastLogin}</td>
      <td>{user.id}</td>
      <td className='options'>

        <button className='option-btn' onClick={() => handleDeleteUser(user.id)}>Delete User</button>
        <button className='option-btn' onClick={() => handleManageUser(user.id)}>Manage User</button>
        <button className='option-btn' onClick={() => handleSendLoginId(user.id)}>Send Login ID to User</button>

      </td>
    </tr>
  );
}

function GroupRow({ group, handleDeleteGroup, handleManageGroup, modalRenderer }) {
  return (
    <tr key={group.id}>
      <td>{group.name}</td>
      <td>{group.members?.length}</td>
      <td>{group.id}</td>
      <td className='options'>

        <button className='option-btn' onClick={() => handleDeleteGroup(group.id)}>Delete Group</button>
        <button className='option-btn' data-bs-toggle="modal" data-bs-target="#modal" onClick={() => modalRenderer("AddToGroup", group.id)}>Add Member</button>
        <button className='option-btn' onClick={() => handleManageGroup(group.id)}>Manage Group</button>

      </td>
    </tr>
  );
}


function Users() {
  const modalRef = useRef();
  const [modal, setModal] = useState(null)
  const [users, setUsers] = useState([

  ]);

  const [groups, setGroups] = useState([

  ]);


  function closeModal() {
    modalRef.current.click();
  }

  function modalRenderer(name, Id) { //obj= userObj | groupObj
    switch (name) {
      case "user":
        setModal(<NewUser users={users} setUsers={setUsers} closeModal={closeModal} />)
        break;
      case "group":
        setModal(< NewGroup groups={groups} setGroups={setGroups} closeModal={closeModal} />)
        break;
      case "AddToGroup":
        setModal(<AddToGroup users={users} groups={groups} setGroups={setGroups} closeModal={closeModal} groupId={Id} />)
        break;
      default:
        break;
    }
  }




  function handleDeleteUser(id) {
    if (window.confirm("Are you sure you want to delete this user?")) {

      setUsers(users.filter((user) => user.id !== id));
    }
  };

  function handleManageUser() {
    //Logic to Manage user
  };

  function handleSendLoginId() {
    // Call API to send login ID to user
    console.log("Send login ID to user");
  };
  function handleDeleteGroup(id) {
    if (window.confirm("Are you sure you want to delete this Group?")) {
      setGroups(groups.filter((group) => group.id !== id))
    }

  }
  function handleManageGroup() {
    //Logic to Manage group
  };

  return (
    <>
      <div className="management-container">
        <div className='d-flex justify-content-between'>
          <h1>Users</h1>
          <div className='mt-1'>
            <button className='add-btn' onClick={() => modalRenderer("user")} data-bs-toggle="modal" data-bs-target="#modal">Add User</button>
            <button className='add-btn' onClick={() => modalRenderer("group")} data-bs-toggle="modal" data-bs-target="#modal">Add Group</button></div>
        </div >
        <div className="table-container">

          {
            users.length > 0 ? (<table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>No. of Rooms</th>
                  <th>Role</th>
                  <th>Last Login</th>
                  <th>ID</th>
                  <th>Additional</th>
                </tr>
              </thead>
              <tbody>
                {users.map(function (user) {
                  return <UserRow key={user.id} user={user} handleDeleteUser={handleDeleteUser} handleManageUser={handleManageUser} handleSendLoginId={handleSendLoginId} />;
                })}
              </tbody>
            </table>) : <p className='no-entries'>Add New Users to view</p>
          }
        </div>
        <h1>Groups</h1>
        <div className="table-container">

          {
            groups.length > 0 ? (<table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Members</th>
                  <th>ID</th>
                  <th>Additional</th>
                </tr>
              </thead>
              <tbody>
                {groups.map(function (group) {
                  return <GroupRow key={group.id} group={group} handleDeleteGroup={handleDeleteGroup} handleManageGroup={handleManageGroup} modalRenderer={modalRenderer} />;
                })}
              </tbody>
            </table>) : <p className='no-entries'>Add New Groups to view</p>
          }
        </div>
      </div>



      {/* Modal */}
      <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="Modal for new group or User" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content p-1">
            {modal}
          </div>
          {/* Modal Close Button */}
          <button data-bs-dismiss="modal" ref={modalRef} hidden></button>
        </div>
      </div>


    </>
  );
}

export default Users;