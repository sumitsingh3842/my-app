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
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './screens/Profile';
import Loading from './components/Loading/Loading';
import OrganisationDetails from './screens/OrganisationDetails';
import ChatBot from './screens/ChatBot';



function App() {
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
      path: "project/:orgName/:orgId",
      element: <OrganisationDetails />,
    },
    {
      path: "create-chat-bot",
      element: <ChatBot />,
    }
  ]);
  
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
