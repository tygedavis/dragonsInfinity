import HealthPoints from './HealthPoints';
import Stat from './Stat';

import './GeneralStats.css';

const statArray = [
    'Initiative',
    'Speed',
    'Proficiency',
    'Armor Class'
]

export default function GeneralStats(){
    return(
        <div className='general-stats-container'>
            <HealthPoints/>
            {statArray.map((statValue) => {
                return(
                    <Stat
                        text={statValue}
                    />
                )
            })}
        </div>
    )
}