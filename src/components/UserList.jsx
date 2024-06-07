import PropTypes from 'prop-types';

function UserList(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.first_name}</td>
            <td>{props.last_name}</td>
            <td>{props.email}</td>
            <td>{props.Rol.description}</td>
        </tr>
    )
}

UserList.propTypes = {
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    Rol: PropTypes.string,
}

export default UserList;