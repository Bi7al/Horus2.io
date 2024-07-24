import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "../../Components/Automations/Automations.css";

function AutomationItem({ automation, onChange }) {

    return (
        <div className="automation-item">
            <h2>{automation.name}</h2>
            <label className="form-switch">
                <input type="checkbox" />
                <i></i>
                Modify
            </label>
        </div>
    );
}

function Automations() {
    const [automations, setAutomations] = useState([
        {
            id: 1,
            name: "Automation 1",
            checked: true,
        },
        {
            id: 2,
            name: "Automation 2",
            checked: false,

        }, {
            id: 3,
            name: "Automation 3",
            checked: true,

        }

    ]);

    const [newAutomation, setAutomation] = useState({
        name: "",
        checked: false,
        triggerEvent: "",
        triggerDevice: "",
        action: "",

    });
    const ClseBtn = useRef();

    const handleCheck = (id) => {
        setAutomations(automations.map(automation => {
            if (automation.id === id) {
                return { ...automation, checked: !automation.checked }
            }
            return automation;
        }));
    }




    function handleChange(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setAutomation({
            ...newAutomation,
            [fieldName]: fieldValue, id: uuidv4()
        });


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        ClseBtn.current.click();
        setAutomations([...automations, newAutomation]);
        setAutomation((prev) => {
            return {
                name: "",
                checked: false,
                triggerEvent: "",
                triggerDevice: "",
                action: "",
            }
        });

    }
    return (
        <>
            <div className="automations-wrapper">
                <button type='button' data-bs-toggle="modal" data-bs-target="#AutoInput">+ Create an Automation</button>
                <div className="automations-container">
                    <h1>Automations</h1>
                    <div className="automations-list">
                        {automations.map((autoName) => {
                            return (
                                <AutomationItem
                                    key={autoName.id}
                                    automation={autoName}
                                    onChange={handleCheck}

                                />
                            )
                        })}
                    </div>
                </div>
            </div>


            <div className="modal fade" id="AutoInput" tabIndex="-1" role="dialog" aria-labelledby="New Automation Dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content" id='#modal-content'>
                        <form onSubmit={handleSubmit}>
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
                                        <label htmlFor="triggerDevice">Trigger device:</label>
                                        <input
                                            type="text"
                                            id="triggerDevice"
                                            value={newAutomation.triggerDevice}
                                            placeholder='Enter Device Name'
                                            name='triggerDevice'
                                            onChange={handleChange}
                                            required={true}
                                        />
                                    </div>
                                )}

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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Automations;