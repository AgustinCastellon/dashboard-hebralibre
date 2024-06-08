import PropTypes from 'prop-types'

function LastMovieInDb({ data }) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <h4>{data.name}</h4>
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '35rem' }} src={data.image} alt=" Star Wars - Mandalorian " />
                    </div>
                    <p>{data.description}</p>
                    <a className="btn btn-success" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
            </div>
        </div>
    )
}

LastMovieInDb.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
}

export default LastMovieInDb;