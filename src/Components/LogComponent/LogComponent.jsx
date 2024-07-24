import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import "./LogComponent.css";
function Log() {
    const [eventLogs, setEventLogs] = useState([
        {
            id: 1,
            timestamp: '2022-01-01 12:00:00',
            eventType: 'INFO',
            deviceName: 'Device 1',
            message: 'This is a sample log message'
        },
        {
            id: 2,
            timestamp: '2022-01-01 12:00:00',
            eventType: 'INFO',
            deviceName: 'Device 1',
            message: 'This is a sample log message'
        },
        {
            id: 3,
            timestamp: '2022-01-01 12:00:00',
            eventType: 'INFO',
            deviceName: 'Device 1',
            message: 'This is a sample log message'
        },
        {
            id: 4,
            timestamp: '2022-01-01 12:00:00',
            eventType: 'INFO',
            deviceName: 'Device 1',
            message: 'This is a sample log message'
        },
    ]);
    const [error, setError] = useState(null);

    // function fetchEventLogs() {
    //     try {
    //         axios.get('/api/event-logs').then(response => {
    //             setEventLogs(response.data);
    //         }).catch(error => {
    //             setError(error.message);
    //         });
    //     }
    // }

    // useEffect(function () {
    //     fetchEventLogs();
    // }, []);

    // if (error) {
    //     return (
    //         <div className="error-message">
    //             Error: {error}
    //         </div>
    //     );
    // }

    return (
        <div className="wrapper">
            <div className="logs-container">
                <table>
                    <thead>
                        <tr>
                            <th>Timestamp</th>
                            <th>Event Type</th>
                            <th>Device Name</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventLogs.map(function (log) {
                            return (
                                <tr key={log.id}>
                                    <td>{log.timestamp}</td>
                                    <td>{log.eventType}</td>
                                    <td>{log.deviceName}</td>
                                    <td>{log.message}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Log;