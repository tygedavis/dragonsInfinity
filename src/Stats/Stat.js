import './Stat.css';
import _ from 'lodash';

export default function Stat(props){
    return(
        <div className='stat-container'>
            <span className='stat-name'>{props.text}</span>
            <span className='stat-total'>{_.get(props, 'addedText')}{props.total}</span>
        </div>
    )
}