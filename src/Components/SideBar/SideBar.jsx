import "./SideBar.css";
import React from "react";
import { Link } from "react-router-dom";
function SideBar() {
    return (
        <>
            <div className="Sidebar-header">
                <div className="SideBar-title">
                    <h2>Horus</h2>
                </div>
                <div className="Icon horus">
                </div>
            </div>
            <ul className="Sidebar-body">
                <li>
                    <div className="Icon Dashboard"></div>
                    <Link to={"/"}>Dashboard</Link>
                </li>
                <li>
                    <div className="Icon Rooms"></div>
                    <Link to={"Rooms"}>Rooms</Link>
                </li>
                <li>
                    <div className="Icon Device"></div>
                    <Link to={"Device"}>Devices</Link>
                </li>
                <li>
                    <div className="Icon Automation"></div>
                    <Link to={"Automation"}>Automations</Link>
                </li>
                <li>
                    <div className="Icon User"></div>
                    <Link to={"/Users"}>Users</Link>
                </li>
                <li>
                    <div className="Icon Log"></div>
                    <Link to={"Log"}>Logs</Link>
                </li>
                <li>
                    <div className="Icon Settings"></div>
                    <Link to={"Settings"}>Settings</Link>
                </li>
            </ul>

        </>

    )
}

export default SideBar