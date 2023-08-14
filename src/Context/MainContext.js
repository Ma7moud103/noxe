import axios from "axios";
import { createContext, useEffect, useRef } from "react";
import { MainApi, api_key, options } from "../utl/api";

export const MainContext = createContext()
export default function MainContextProvider({ children }) {

    //fetch all movies
    const getMovies = async (catego, callback) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${catego}/week?api_key=${api_key}`, options)
        callback(data.results)
    }

    let searchInput = useRef()



    return <MainContext.Provider value={{ getMovies, searchInput }}>
        {children}
    </MainContext.Provider>
}

