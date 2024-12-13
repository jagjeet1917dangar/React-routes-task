import Navbar from './Components/Navbar.jsx'
import AboutUs from './Components/Aboutus.jsx'
import Website1 from './Components/Route01.jsx'
import Website2 from './Components/Route02.jsx'
import Website3 from './Components/Route03.jsx'
import Website4 from './Components/Route04.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><AboutUs /></>
    },

    {
      path: "/mymeals",
      element: <><Navbar /><Website1 /></>
    },

    {
      path: "/mocktails",
      element: <><Navbar /><Website2 /></>
    },

    {
      path:"/harrypotter",
      element:<><Navbar/><Website3/></>
    },

    {
      path:"/bank",
      element:<><Navbar/><Website4/></>
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
