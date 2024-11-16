import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Events from './components/Events';
import Podcasts from './components/Podcasts';
import Navbar from './components/Navbar';
import Login from './components/Login';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar />
        <Events/>
      </div>
    },
    {
      path:"/podcasts",
      element:
      <div>
        <Navbar/>
        <Podcasts/>
      </div>
    },
    {
      path:"/login",
      element:
      <div>
        <Navbar/>
        <Login/>
      </div>
    }
  ]
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
