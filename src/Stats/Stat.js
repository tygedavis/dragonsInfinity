import './Stat.css';

export default function Stat(props){
    return(
        <div className='stat-container'>
            <span className='stat-name'>{props.text}</span>
            <span className='stat-total'>50</span>

            <div className='modifier-container'>
                <span className='stat-modifier'>+2</span>
            </div>
        </div>
    )
}