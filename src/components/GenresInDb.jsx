import { useContext } from 'react';
import { InitDataContext } from '../context/InitDataContext';

function GenresInDb () {
    const { genres } = useContext(InitDataContext)
    
        console.log('2. render')
        return (
            <div className="col-lg-12 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800" >Categories in Data Base</h5>
                    </div>
                    <div className={`card-body `}>
                        <div className="row">
                            {genres?.categories?.map((genre, index) => {
                                return (
                                    <div key={index} className="col-lg-6 mb-4">
                                        <div className="card bg-success text-white shadow">
                                            <div className="card-body">
                                                {genre.name}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
}


export default GenresInDb;