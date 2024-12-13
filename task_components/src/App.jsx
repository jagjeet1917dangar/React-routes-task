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
      path: "/Route01",
      element: <><Navbar /><Website1 /></>
    },

    {
      path: "/Route02",
      element: <><Navbar /><Website2 /></>
    },

    {
      path:"/Route03",
      element:<><Navbar/><Website3/></>
    },

    {
      path:"/Route04",
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
