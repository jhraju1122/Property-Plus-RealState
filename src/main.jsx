import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/Errorpage/ErrorPage.jsx';
import AddProperties from './components/AddProperties/AddProperties.jsx';
import MyProfile from './components/My-profile/MyProfile.jsx';
import Wishlist from './components/Wishlist/Wishlist.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
   path: "/AddProperties",
   element: <AddProperties></AddProperties>,
  },
  {
   path: "/myProfile",
   element: <MyProfile></MyProfile>,
  },
  {
   path: "/wishlist",
   element: <Wishlist></Wishlist>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
      </StrictMode>,
)
