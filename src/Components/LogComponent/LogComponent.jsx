import React, { useState, useEffect } from 'react';
import './LogComponent.css';

function LogComponent() {
    // State to hold event logs
    const [eventLogs, setEventLogs] = useState([
        {
            id: 1,
            timestamp: '2022-01-01 12:00:00',
            eventType: 'INFO',
            deviceName: 'Device 1',
            message: 'This is a sample log message',
        },
        {
            id: 2,
            timestamp: '2022-01-01 12:00:00',
            eventType: 'INFO',
            deviceName: 'Device 1',
            message: 'This is a sample log message',
        },
        {
            id: 3,
            timestamp: '2022-01-01 12:00:00',
            eventType: 'INFO',
            deviceName: 'Device 1',
            message: 'This is a sample log message',
        },
        {
            id: 4,
            timestamp: '2022-01-01 12:00:00',
            eventType: 'INFO',
            deviceName: 'Device 1',
            message: 'This is a sample log message',
        },
    ]);

    // State to hold any potential errors
    const [error, setError] = useState(null);

    // Uncomment this code block to fetch event logs from an API
    // useEffect(() => {
    //   const fetchEventLogs = async () => {
    //     try {
    //       const response = await axios.get('/api/event-logs');
    //       setEventLogs(response.data);
    //     } catch (error) {
    //       setError(error.message);
    //     }
    //   };

    //   fetchEventLogs();
    // }, []);

    // Render error message if there's an error
    if (error) {
        return (
            <div className="error-message">
                Error: {error}
            </div>
        );
    }

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
                        {eventLogs.map((log) => (
                            <tr key={log.id}>
                                <td>{log.timestamp}</td>
                                <td>{log.eventType}</td>
                                <td>{log.deviceName}</td>
                                <td>{log.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LogComponent;
