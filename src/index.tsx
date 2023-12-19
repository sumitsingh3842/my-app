import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { Auth0Provider } from '@auth0/auth0-react';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-e8ngvuo2ygnrkkuq.us.auth0.com"
    clientId="PNjOJHf22DLmXJ9wVAbxpNwfotMtqmVr"
    authorizationParams={{
      redirect_uri: "https://sumitsingh3842.github.io/my-app/dashboard"
    }}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
);
