import React from 'react'

function newAutomation() {
    return (
        <form onSubmit={handleSubmit} className='automation-form'>
            <div className="input-row">
                <div className="input-group">
                    <label htmlFor="automation-name">Automation Name:</label>
                    <input type="text" id='automation-nme' name='name' value={newAutomation.name} placeholder='Enter Automation Name' required={true} onChange={handleChange} />
                </div>

                <div className='input-group'>
                    <label htmlFor="triggerEvent">Trigger event:</label>
                    <select
                        id="triggerEvent"
                        name="triggerEvent"
                        value={newAutomation.triggerEvent}
                        onChange={handleChange}
                        required={true}
                    >
                        <option value="" hidden={true}>Select Trigger Event</option>
                        <option value="Calendar">Calendar</option>
                        <option value="Device">Device</option>
                    </select>
                </div>
            </div>

            <div className="input-row">
                {newAutomation.triggerEvent === 'Device' && (
                    <div className='input-group'>
                        <label htmlFor="triggerDevice">Trigger Device:</label>
                        <select
                            id="triggerDevice"
                            name="triggerDevice"
                            value={newAutomation.triggerDevice}
                            onChange={handleChange}
                            required={true}
                        >
                            <option value="" hidden={true}>Select Trigger Device</option>
                            <option value="Device 1">Device 1</option>
                            <option value="Device 2">Device 2</option>
                        </select>
                    </div>
                )}
                {
                    newAutomation.triggerEvent === "Calendar" && (
                        <div className='input-group'>
                            <label htmlFor="triggerDate">Trigger date:</label>
                            <input
                                type="date"
                                id="triggerDate"
                                value={newAutomation.triggerDate}
                                placeholder='Select Date'
                                name='triggerDate'
                                onChange={handleChange}
                                required={true}
                            />
                        </div>
                    )
                }

                <div className='input-group'>
                    <label htmlFor="action">Action:</label>
                    <input
                        type="text"
                        id="action"
                        name='action'
                        value={newAutomation.action}
                        onChange={handleChange}
                        placeholder='Enter Action to perform'
                        required={true}
                    />
                </div>
            </div>

            <div className="buttons">
                <button type="submit" id='submit-button'>Save Automation</button>
                <button data-bs-dismiss="modal" ref={ClseBtn} type="button" id='submit-button'>Close</button>
            </div>
        </form>
    )
}

export default newAutomation