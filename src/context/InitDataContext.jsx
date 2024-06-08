import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios"
const InitDataContext = createContext();


function InitDataProvider({ children }) {
    const [data, setData] = useState({
        movies: null,
        genres: null,
        users: null
    });


    useEffect(() => {
        async function getData(){
            try{
                const movies = await axios.get('http://localhost:3000/api/products/');
                const genres = await axios.get('http://localhost:3000/api/categories');
                const users = await axios.get('http://localhost:3000/api/user');
                setData({ movies: movies, genres: genres.data, users: users.data});
            } catch(error){
                throw new Error(error)
            }
        }
        getData()
    }, []);

    

    return (
        <InitDataContext.Provider value={data}>
            {children}
        </InitDataContext.Provider>
    )

}

InitDataProvider.PropTypes = {
    children: PropTypes.element
}

export { InitDataContext, InitDataProvider };