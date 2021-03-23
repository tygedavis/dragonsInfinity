import './SecondarySkill.css';
import _ from 'lodash';
import classNames from 'classnames';

export default function SecondarySkill(props) {
    const proficiencyClassNames = classNames('proficiencyCirlcle', {
        'circle-filled': props.proficient
    });

    return (
        <div className='secondary-skill-container'>
            <span className={proficiencyClassNames}></span>
            <p>{props.name} <span>({_.upperFirst(props.genSkill)})</span></p>
        </div>
    )
}