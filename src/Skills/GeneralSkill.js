import './GeneralSkill.css';

export default function GeneralSkill(props){
    return(
        <div className='skill-container'>
            <div className='modifier-container' key={props.id}>
                <span className='skill-modifier'>+{props.modifier}</span>
            </div>

            <span className='skill-total'>{props.level}</span>
            <span className='skill-name'>{props.name}</span>
        </div>
    )
}