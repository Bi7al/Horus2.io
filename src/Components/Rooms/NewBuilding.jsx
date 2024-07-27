import React, { useState } from 'react'

function NewBuilding({ buildings, setBuildings, modalClose }) {
  const [newBuilding, setNewBuilding] = useState({
    name: '',
    rooms: [],
  }
  )
  function handleSubmit(e) {
    e.preventDefault();
    setBuildings([...buildings, newBuilding]);
    setNewBuilding({
      name: '',
      rooms: [],
    });
    modalClose();
  }
  return (
    <form action="" className='d-flex flex-column p-5 g-3' onSubmit={handleSubmit}>
      <label htmlFor="name">Building Name:</label>
      <input type="text" id="name" name="name" className='w-50 p-3' value={newBuilding.name} onChange={(e) => setNewBuilding({ ...newBuilding, name: e.target.value })} placeholder='Enter Building Name' required />
      <button className='building-form-clsbtn' type='submit'>Submit</button>
    </form>
  )
}

export default NewBuilding