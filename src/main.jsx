import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom';
import App from './App.jsx'
import './index.css';
import Users from './Components/Users/Users.jsx';
import Rooms from './Components/Rooms/Rooms.jsx';
import Automations from './Components/Automations/Automations.jsx';
import Devices from './Components/Devices/Devices.jsx';
import Log from './Components/LogComponent/LogComponent.jsx';
import DashboardComponent from './Components/Dashboard/Dashboard.jsx';
import Settings from './Components/Settings/Settings.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <DashboardComponent />,
        errorElement: <ErrorElement />
      },
      {
        path: "/Users",
        element: <Users />,
        errorElement: <ErrorElement />
      },
      {
        path: "/Rooms",
        element: <Rooms />,
        errorElement: <ErrorElement />
      }
      , {
        path: "/Automations",
        element: <Automations />,
        errorElement: <ErrorElement />
      },
      {
        path: "/Devices",
        element: <Devices />,
        errorElement: <ErrorElement />
      }, {
        path: "/Log",
        element: <Log />,
        errorElement: <ErrorElement />
      },
      {
        path: "/Settings",
        element: <Settings />,
        errorElement: <ErrorElement />
      }
    ],
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)


export function ErrorElement() {

  let error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>OOPs, We Ran Into An Error</h1>
      <p>
        <pre>{error.message}</pre>

      </p>
    </div>
  )

}
