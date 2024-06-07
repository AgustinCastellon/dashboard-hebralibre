
import MovieList from './MovieList';
import { useContext } from 'react';
import { InitDataContext} from '../context/InitDataContext'
function Movie () {
        const { movies} = useContext(InitDataContext)
        return (
            <>
                 {/*<!-- MOVIES LIST -->*/}
                 <h1 className="h5 m-3 font-weight-bold text-gray-800">All the movies in the Database</h1>

                 {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body ">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped" id="dataTable" width="100%" cellSpacing="0">
                                <thead className='bg bg-success text-white'>
                                    <tr>
                                        <th>Id</th>
                                        <th>Titulo</th>
                                        <th>Calificación</th>
                                        <th>Premios</th>
                                        <th>Duración</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        movies?.data?.map((movie, index) => {
                                            return <MovieList  {...movie} key={index} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }


export default Movie;