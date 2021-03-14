import './Stat.css';

export default function Stat(props){
    return(
        <div className='stat-container'>
            <span className='stat-name'>{props.text}</span>
            <span className='stat-total'>{props.total}</span>
        </div>
    )
}