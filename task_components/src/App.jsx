import Navbar from './Components/Navbar.jsx'
import AboutUs from './Components/Aboutus.jsx'
import Website1 from './Components/Route01.jsx'
import Website2 from './Components/Route02.jsx'
import Website3 from './Components/Route03.jsx'
import Website4 from './Components/Route04.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Recipeinfo from './Components/Recipeinfo.jsx'
import English from './Components/English.jsx'
import Books from './Components/Books.jsx'
import Espanol from './Components/Espanol.jsx'
import Francais from './Components/Francais.jsx'
import Characters from './Components/Characters.jsx'
import Houses from './Components/Houses.jsx'
import Spells from './Components/Spells.jsx'
import Books1 from './Components/Books1.jsx'
import Characters1 from './Components/Characters1.jsx'
import Houses1 from './Components/Houses1.jsx'
import Spells1 from './Components/Spells1.jsx'

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
    {
      path:"/:mealid",
      element:<><Navbar/><Recipeinfo/></>
    },
    {
      path:"/English",
      element:<><Navbar/><English/></>
    },
    {
      path:"/Espanol",
      element:<><Navbar/><Espanol/></>
    },
    {
      path:"/Francais",
      element:<><Navbar/><Francais/></>
    },
    {
      path:"/books",
      element:<><Navbar/><Books/></>
    },
    {
      path:"/characters",
      element:<><Navbar/><Characters/></>
    },
    {
      path:"/houses",
      element:<><Navbar/><Houses/></>
    },
    {
      path:"/spells",
      element:<><Navbar/><Spells/></>
    },
    {
      path:"/books1",
      element:<><Navbar/><Books1/></>
    },
    {
      path:"/characters1",
      element:<><Navbar/><Characters1/></>
    },
    {
      path:"/houses1",
      element:<><Navbar/><Houses1/></>
    },
    {
      path:"/spells1",
      element:<><Navbar/><Spells1/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
