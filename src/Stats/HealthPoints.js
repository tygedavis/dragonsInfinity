import './HealthPoints.css';

export default function HealthPoints(props){
    return(
        <div className='health-points-container'>
            <div className='health-points-circle'>
                <div className='current-health-points-container'>
                    <span className='health-points-indicator'>Current</span>
                    <span>150 HP</span>
                </div>
                <div className='total-health-points-container'>
                    <span>200 HP</span>
                    <span className='health-points-indicator'>Total</span>
                </div>
            </div>
        </div>
    )
}