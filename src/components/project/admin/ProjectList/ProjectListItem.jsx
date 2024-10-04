import { Link } from "react-router-dom";

function ProjectListItem (props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td><Link to={`/admin/project/${props.id}/edit`}>Modifier</Link></td>
            <td onClick={ () => props.onDelete() }>Supprimer</td>
        </tr>
    )
};

export default ProjectListItem;