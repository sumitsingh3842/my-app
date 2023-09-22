import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import './index.css';
import Home from './screens/Home';
import DashBoard from './screens/DashBoard';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import {store} from './app/store'
import { useAuth0,Auth0Provider } from '@auth0/auth0-react';
import Profile from './screens/Profile';
import UserForm from './screens/UserForm';
import OrganisationForm from './screens/OrganisationForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "dashboard",
    element: <DashBoard />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "createuser",
    element: <UserForm />,
  },
  {
    path: '/organisation/create',
    element: <OrganisationForm />,
  },

]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-e8ngvuo2ygnrkkuq.us.auth0.com"
    clientId="PNjOJHf22DLmXJ9wVAbxpNwfotMtqmVr"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/dashboard"
    }}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
