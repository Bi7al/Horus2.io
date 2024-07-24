import React, { useState, useEffect } from 'react';
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
    },
    {
      name: 'Name',
      email: 'nom-prenom@google.com',
      rooms: 1,
      role: 'Admin',
      lastLogin: '25/01/2024',
      id: '23702'
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

  return (
    <div className="management-container">
      <div className="table-container">
        <h1>Users</h1>
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

      <div className="table-container">
        <h1>Groups</h1>
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
  );
}

export default Users;