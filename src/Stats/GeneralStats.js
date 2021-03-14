import HealthPoints from './HealthPoints';
import Stat from './Stat';
import _ from 'lodash';
import './GeneralStats.css';
import { connect } from 'react-redux';

function GeneralStats(props){
    return(
        <div className='general-stats-container'>
            <HealthPoints/>
            {props.stats.map((statValue) => {
                return(
                    <Stat
                        text={statValue.name}
                        total={statValue.total}
                    />
                )
            })}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        stats: _.get(state, 'stats.stats')
    };
}

export default connect(mapStateToProps)(GeneralStats);