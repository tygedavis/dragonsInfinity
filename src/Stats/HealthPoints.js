import './HealthPoints.css';
import { connect } from 'react-redux';

function HealthPoints(props){
    console.log('------->props', props);
    return(
        <div className='health-points-container'>
            <div className='health-points-circle'>
                <div className='current-health-points-container'>
                    <span className='health-points-indicator'>Current</span>
                    <span>{props.stats.currentHealthPoints} HP</span>
                </div>
                <div className='total-health-points-container'>
                    <span>{props.stats.totalHealthPoints} HP</span>
                    <span className='health-points-indicator'>Total</span>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        stats: state.stats
    };
}

export default connect(mapStateToProps)(HealthPoints);