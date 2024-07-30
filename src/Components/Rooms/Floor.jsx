import React from 'react'

function Floor({ floor, index, removeRoom }) {
    return (
        <div className='w-100 '>
            <p>Floor {index} Rooms: {floor.length}</p>
            <div className="floor__rooms mt-2">
                {
                    floor.map((room) => {
                        return (
                            <div key={room.roomId} className='room'>
                                <p> {room.roomName}</p>
                                <button onClick={() => removeRoom(room)} className='remove-room-btn'>remove</button>
                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default Floor