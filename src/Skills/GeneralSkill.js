import './GeneralSkill.css';

export default function GeneralSkill(props){
    return(
        <div className='skill-container'>
            <div className='modifier-container'>
                <span className='skill-modifier'>+2</span>
            </div>

            <span className='skill-total'>10</span>
            <span className='skill-name'>{props.text}</span>
        </div>
    )
}