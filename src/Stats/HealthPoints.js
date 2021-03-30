import './HealthPoints.css';
import { connect } from 'react-redux';
import _ from 'lodash';
import store from '../redux/store';
import UpdateCurrentHealthModal from '../Modal/UpdateCurrentHealthModal';

function HealthPoints(props){
    function toggleUpdateCurrentHealthModal() {
        store.dispatch({ type: 'currentHealthPoints/toggleOpen', payload: !_.get(props, 'updateCurrentHealthModal') });
    };

    return(
        <div className='health-points-container'>
            <div className='health-points-circle' onClick={toggleUpdateCurrentHealthModal}>
                <div className='current-health-points-container'>
                    <span className='health-points-indicator'>Current</span>
                    <span>{props.stats.currentHealthPoints} HP</span>
                </div>
                <div className='total-health-points-container'>
                    <span>{props.stats.totalHealthPoints} HP</span>
                    <span className='health-points-indicator'>Total</span>
                </div>
            </div>
            <UpdateCurrentHealthModal
                toggleModal={toggleUpdateCurrentHealthModal}
            />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        stats: _.get(state, 'stats.healthPoints'),
        updateCurrentHealthModal: _.get(state, 'toggles.updateCurrentHealthModalOpen')
    };
}

export default connect(mapStateToProps)(HealthPoints);