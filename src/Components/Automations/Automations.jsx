import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Automations.css';

// Component responsible for rendering a single automation item
function AutomationItem({ automation, onToggle, onRemove }) {
    return (
        <div className="automation-item">
            <h2>{automation.name}</h2>
            <label className="form-switch">
                <input
                    type="checkbox"
                    checked={automation.checked}
                    onChange={() => onToggle(automation.id)}
                />
                <i></i>
                <button className="remove-automation" onClick={() => onRemove(automation.id)}>
                    Remove
                </button>
            </label>
        </div>
    );
}

// Main component for managing automations
function Automations() {
    const [automations, setAutomations] = useState([
        { id: 1, name: 'Automation 1', checked: true },
        { id: 2, name: 'Automation 2', checked: false },
        { id: 3, name: 'Automation 3', checked: true },
    ]);

    const [newAutomation, setNewAutomation] = useState({
        name: '',
        checked: false,
        triggerEvent: '',
        triggerDate: '',
        triggerTime: '',
        triggerDevice: '',
        action: '',
    });

    const closeButtonRef = useRef(null);

    // Function to handle toggling the automation's checked state
    const handleToggle = (id) => {
        setAutomations((prevAutomations) =>
            prevAutomations.map((automation) =>
                automation.id === id ? { ...automation, checked: !automation.checked } : automation
            )
        );
    };

    // Function to handle changes in the new automation form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAutomation((prevAutomation) => ({
            ...prevAutomation,
            [name]: value,
            id: uuidv4(),
        }));
    };

    // Function to handle the submission of the new automation form
    const handleSubmit = (e) => {
        e.preventDefault();
        closeButtonRef.current.click();
        setAutomations((prevAutomations) => [...prevAutomations, newAutomation]);
        setNewAutomation({
            name: '',
            checked: false,
            triggerEvent: '',
            triggerDevice: '',
            triggerDate: '',
            triggerTime: '',
            action: '',
        });
    };

    // Function to handle the removal of an automation
    const handleRemove = (id) => {
        setAutomations((prevAutomations) => prevAutomations.filter((automation) => automation.id !== id));
    };

    return (
        <>
            <div className="automations-wrapper">
                <button className="add-automation-button" type="button" data-bs-toggle="modal" data-bs-target="#AutoInput">
                    + Create an Automation
                </button>
                <div className="automations-container">
                    <h1>Automations</h1>
                    <div className="automations-list">
                        {automations.map((automation) => (
                            <AutomationItem
                                key={automation.id}
                                automation={automation}
                                onToggle={handleToggle}
                                onRemove={handleRemove}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="modal fade" id="AutoInput" tabIndex="-1" role="dialog" aria-labelledby="New Automation Dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content" id="#modal-content">
                        <form onSubmit={handleSubmit} className="automation-form">
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
                            {
                                newAutomation.triggerEvent === "Calendar" &&
                                <div className="input-row">
                                    <div className='input-group'>
                                        <label htmlFor="triggerTime">Trigger Time:</label>
                                        <input
                                            type="time"
                                            id="triggerTime"
                                            name='triggerTime'
                                            value={newAutomation.triggerTime}
                                            onChange={handleChange}
                                            placeholder='Enter Trigger Time'
                                            required={true}
                                        />
                                    </div>
                                </div>
                            }
                            <div className="buttons">
                                <button type="submit" id='submit-button'>Save Automation</button>
                                <button data-bs-dismiss="modal" ref={closeButtonRef} type="button" id='submit-button'>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Automations;
