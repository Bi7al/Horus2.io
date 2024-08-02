import React, { useState, useEffect } from 'react';
import './Settings.css';

function Settings() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [backupOptions, setBackupOptions] = useState({
    rooms: false,
    settings: false,
    devices: false,
    users: false,
    automations: false,
  });
  const [integrations, setIntegrations] = useState([
    { id: 'sonoff', name: 'Sonoff', logo: "Sonoff" },
    { id: 'horus', name: 'Horus', logo: "Sonoff" },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const lastBackup = '24/06/2024 14:00 PM';
  //   useEffect(() => {
  //     *Check for updates
  //     setUpdateAvailable(true);
  //   }, []);

  const handleBackupOptionChange = (option) => {
    setBackupOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  const handleIntegrationSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredIntegrations = integrations.filter((integration) =>
    integration.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="settings-container">
      <h2>Updates / Backup</h2>
      <div className="updates-body">
        <div className="update-status">
          <button><h6>Check for an update</h6></button>
          {updateAvailable ? 'Update available' : 'No update available'}
        </div>
        <div className="backup-options">
          <h5>Backup</h5>
          <label>
            <input
              type="checkbox"
              checked={backupOptions.rooms}
              onChange={() => handleBackupOptionChange('rooms')}
            />
            Rooms
          </label>
          <label>
            <input
              type="checkbox"
              checked={backupOptions.settings}
              onChange={() => handleBackupOptionChange('settings')}
            />
            Settings
          </label>
          <label>
            <input
              type="checkbox"
              checked={backupOptions.devices}
              onChange={() => handleBackupOptionChange('devices')}
            />
            Devices
          </label>
          <label>
            <input
              type="checkbox"
              checked={backupOptions.users}
              onChange={() => handleBackupOptionChange('users')}
            />
            Users
          </label>
          <label>
            <input
              type="checkbox"
              checked={backupOptions.automations}
              onChange={() => handleBackupOptionChange('automations')}
            />
            Automations
          </label>

        </div>
        <p>Last backup: {lastBackup}</p>
        <div className="integration-search">
          <h2>"Marketplace - Integrations"</h2>
          <div className='integrations'>
            <p>Alredy installed Integrations</p>
            <div className="integration-list">
              {filteredIntegrations.map((integration) => (
                <div key={integration.id} className='Integration-item'>     {/* //!Search Results will be displayed here */}
                  <img src={`./${integration.logo}.png`} alt={""} />
                </div>
              ))}
            </div>
            <div className="integration-search-input">
              <label htmlFor="searchintegration"></label>
              <input
                id='searchintegration'
                type="text"
                placeholder="Search for a new integration"
                value={searchQuery}
                onChange={handleIntegrationSearch}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;