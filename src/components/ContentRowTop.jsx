import { useContext, useState, useEffect } from "react";
import ContentRowMovie from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import { InitDataContext } from "../context/InitDataContext";
import LastUserInDb from "./LastUserInDb";



// const lastMovie = {
//     id: 1,
//     image: 'mandalorian.jpg',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?'
// }
function ContentRowTop () {

    const {movies, genres, users} = useContext(InitDataContext)
    const [lastMovie, setLastMovie] = useState(null)
    const [lastUser, setLastUser] = useState(null)
    const [moviesQuantity, setMoviesQuantity] = useState(null)
    const [genresQuantity, setGenresQuantity] = useState(null)
    const [usersQuantity, setUsersQuantity] = useState(null)
    useEffect(() => {
        setLastMovie(movies?.data?.products[movies?.data?.products?.length -1])
        setLastUser(users?.users[users?.users?.length -1])
        setMoviesQuantity(movies?.data?.count)
        setGenresQuantity(genres?.count)
        setUsersQuantity(users?.users?.length)
    }, [movies, genres, users])
    console.log(lastMovie)
    const data = [
        {
            title: "Products in Data Base",
            color: "primary",
            icon: "fa-solid fa-box-open",
            quantity: moviesQuantity
        },
        {
            title: "Categories",
            color: "success",
            icon: "fa-tag",
            quantity: genresQuantity
        },
        {
            title: "Users quantity",
            color: "warning",
            icon: "fa-user",
            quantity: usersQuantity
        }
    ];

        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>

                {/* <!-- Content Row Movies--> */}
                <ContentRowMovie data={data} />
                {/* <!-- End Content Row Movies --> */}


                {/* <!-- Content Row Last Movie in Data Base --> */}
                <div className="row">
                    {/* <!-- Last Movie in DB --> */}
                    {lastMovie && < LastMovieInDb data = {lastMovie}/>}
                    {/* <!-- End content row last movie in Data Base --> */}

                    {/* <!-- Genres in DB --> */}
                    <div className="col">
                    <GenresInDb />
                    {lastUser && <LastUserInDb data = {lastUser} />}</div>
                </div>
            </div>
        );
    }

export default ContentRowTop;