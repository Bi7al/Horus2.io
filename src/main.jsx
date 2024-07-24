import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom';
import App from './App.jsx'
import './index.css';
import Users from './Components/Users/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/Users",
        element: <Users />,
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
