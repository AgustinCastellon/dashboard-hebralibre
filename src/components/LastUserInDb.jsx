import PropTypes from 'prop-types'
import '../assets/styles.css'
function LastUserInDb({ data }) {
    return (
        <div className="col-lg-12 mb-4 prueba">
            <div className="card shadow     ">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800" >Last user In Data Base</h5>
                </div>
                <div className="card-body ">
                    <div className="card mb-4" >
                        <div className="row g-0">
                            <div className="col-md-4 ">
                                <img src={data.imageUrl} className="img-fluid rounded-start img-user border border-success" alt="..." />
                            </div>
                            <div className="col-md-8 ">
                                <ul className="list-group list-group-flush ">
                                    <li className="list-group-item border-bottom border-success">ID: {data.id}</li>
                                    <li className="list-group-item border-bottom border-success">Nombre: {data.first_name}</li>
                                    <li className="list-group-item border-bottom border-success">Apellido: {data.last_name}</li>
                                    <li className="list-group-item border-bottom border-success">Email: {data.email}</li>
                                    <li className="list-group-item border-top border-success">Roll: {data.Rol.description}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <table className="table  table-bordered">
                        <thead>
                            <tr  className='bg-success text-white'>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Email</th>
                                <th scope="col">Roll</th>
                                <th scope="col">Tipo de Usuario</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{data.id}</th>
                                <td>{data.first_name}</td>
                                <td>{data.last_name}</td>
                                <td>{data.email}</td>
                                <td>{data.Rol.name}</td>
                                <td>{data.Rol.description}</td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
            </div>
        </div>
    )
}

LastUserInDb.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        Rol: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }).isRequired
    })
}

export default LastUserInDb;