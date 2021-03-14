import './SecondarySkill.css';
import _ from 'lodash';

export default function SecondarySkill(props) {
    return (
        <div className='secondary-skill-container'>
            <p>{props.name} <span>({_.upperFirst(props.genSkill)})</span></p>
        </div>
    )
}