import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './screens/Home';
import DashBoard from './screens/DashBoard';
import { Provider } from 'react-redux'
import {store} from './app/store'
import Profile from './screens/Profile';
import Loading from './components/Loading/Loading';
import OrganisationDetails from './screens/OrganisationDetails';
import ChatBot from './screens/ChatBot';



function App() {
  const router = createBrowserRouter([
    {
      path: "my-app",
      element: <Home />,
    },
    {
      path: "my-app/dashboard",
      element: <DashBoard />,
    },
    {
      path: "my-app/profile",
      element: <Profile />,
    },
    {
      path: "my-app/project/:orgName/:orgId",
      element: <OrganisationDetails />,
    },
    {
      path: "my-app/create-chat-bot",
      element: <ChatBot />,
    }
  ]);
  return (
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
