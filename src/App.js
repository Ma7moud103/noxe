import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "./components/MainLayout/MainLayout"
import HomePage from "./components/HomePage/HomePage"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import MainContextProvider from "./Context/MainContext"
import TrendingMovies from "./components/TrendingMovies/TrendingMovies"
import TrendingTvShow from "./components/TrendingTvShow/TrendingTvShow"
import People from "./components/Poeple/Poeple"
export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children:
        [
          { path: "", element: <HomePage /> },
          { path: "home", element: <HomePage /> },
          { path: "register", element: <Register /> },
          { path: "login", element: <Login /> },
          { path: "trendingmovies", element: <TrendingMovies /> },
          { path: "trendingtvshow", element: <TrendingTvShow /> },
          { path: "people", element: <People /> },
        ]
    }

  ])
  return (
    <>

      <MainContextProvider>
        <RouterProvider router={routes} />
      </MainContextProvider>
    </>
  )
}