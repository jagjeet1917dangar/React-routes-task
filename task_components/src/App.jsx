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
import Books2 from './Components/Books2.jsx'
import Characters2 from './Components/Characters2.jsx'
import Houses2 from './Components/Houses2.jsx'
import Spells2 from './Components/Spells2.jsx'
import Italiano from './Components/Italiano.jsx'
import Books3 from './Components/Books3.jsx'
import Characters3 from './Components/Characters3.jsx'
import Houses3 from './Components/Houses3.jsx'
import Spells3 from './Components/Spells3.jsx'
import Books4 from './Components/Books4.jsx'
import Characters4 from './Components/Characters4.jsx'
import Houses4 from './Components/Houses4.jsx'
import Spells4 from './Components/Spells4.jsx'
import Portugues from './Components/Portugues.jsx'

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
      path:"/Italiano",
      element:<><Navbar/><Italiano/></>
    },
    {
      path:"/Portugues",
      element:<><Navbar/><Portugues/></>
    },
    {
      path:"/English/books",
      element:<><Navbar/><Books/></>
    },
    {
      path:"/English/characters",
      element:<><Navbar/><Characters/></>
    },
    {
      path:"/English/houses",
      element:<><Navbar/><Houses/></>
    },
    {
      path:"/English/spells",
      element:<><Navbar/><Spells/></>
    },
    {
      path:"/Espanol/books",
      element:<><Navbar/><Books1/></>
    },
    {
      path:"/Espanol/characters",
      element:<><Navbar/><Characters1/></>
    },
    {
      path:"/Espanol/houses",
      element:<><Navbar/><Houses1/></>
    },
    {
      path:"/Espanol/spells",
      element:<><Navbar/><Spells1/></>
    },
    {
      path:"/Francais/books",
      element:<><Navbar/><Books2/></>
    },
    {
      path:"/Francais/characters",
      element:<><Navbar/><Characters2/></>
    },
    {
      path:"/Francais/houses",
      element:<><Navbar/><Houses2/></>
    },
    {
      path:"/Francais/spells",
      element:<><Navbar/><Spells2/></>
    },
    {
      path:"/Italiano/books",
      element:<><Navbar/><Books3/></>
    },
    {
      path:"/Italiano/characters",
      element:<><Navbar/><Characters3/></>
    },
    {
      path:"/Italiano/houses",
      element:<><Navbar/><Houses3/></>
    },
    {
      path:"/Italiano/spells",
      element:<><Navbar/><Spells3/></>
    },
    {
      path:"/Portugues/books",
      element:<><Navbar/><Books4/></>
    },
    {
      path:"/Portugues/characters",
      element:<><Navbar/><Characters4/></>
    },
    {
      path:"/Portugues/houses",
      element:<><Navbar/><Houses4/></>
    },
    {
      path:"/Portugues/spells",
      element:<><Navbar/><Spells4/></>
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
