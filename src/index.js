import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Course from './pages/Course';
import Blogs from './pages/Blogs';
import BlogsDetails from './pages/BlogsDetails';
import Error404 from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRoutes = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'AboutUs',
    element:<AboutUs/>
  },
  {
    path:'Course',
    element:<Course/>
  },
  {
    path:'Blogs',
    element:<Blogs/>
  },
  {
    path:'/Blogs/:id',
    element:<BlogsDetails/>
  },
  {
    path:'*',
    element:<Error404/>
  }

])
root.render(
  <React.StrictMode>
     <RouterProvider router={allRoutes}/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
