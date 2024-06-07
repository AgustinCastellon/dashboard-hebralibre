import UserList from './UserList';
import { useContext } from 'react';
import { InitDataContext} from '../context/InitDataContext'
function User () {
        const { users } = useContext(InitDataContext)
        
        
        return (
            <>
                 {/*<!-- userS LIST -->*/}
                 <h1 className="h5 m-3 font-weight-bold text-gray-800">All the users in the Database</h1>

                 {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body ">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped " id="dataTable" width="100%" cellSpacing="0">
                                <thead className='bg bg-success text-white'>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Email</th>
                                        <th>Roll</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users?.users?.map((user, index) => {
                                            return <UserList  {...user} key={index} />
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


export default User;