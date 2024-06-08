import PropTypes from 'prop-types';
import '../assets/styles.css'
function MovieList(props) {
    return (
        <tr >
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.category}</td> 
            <td><img className="img-fluid img-table" src={props.image}/></td> 
        </tr>
    )
}

MovieList.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string
}

export default MovieList;