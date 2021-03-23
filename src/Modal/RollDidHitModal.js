import _ from 'lodash';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './RollDidHitModal.css';
import store from '../redux/store';

function RollDidHitModal(props) {
    const rollDidHitModalClassnames = classNames('roll-did-hit-modal', {
        'is-hiding': !props.toggles.rollDidHitModalOpen
    });

    function handleHit() {
        store.dispatch({ type: 'rollDidHitModal/toggleOpen', payload: false });
        store.dispatch({ type: 'weapons/updateAttackHitsRoll', payload: 0 });
        store.dispatch({ type: 'dealDamageRoll/toggleOpen', payload: true });
    }

    function handleMiss(){
        store.dispatch({ type: 'weapons/updateAttackHitsRoll', payload: 0 });
        store.dispatch({ type: 'rollDidHitModal/toggleOpen', rollDidHitModalOpen: false });
    }

    return (
        <div className={rollDidHitModalClassnames}>
            <p>You rolled a {props.rollStats.attackHitsRoll}</p>
            <button
                onClick={handleHit}
            >
                Hit
            </button>
            <button
                onClick={handleMiss}
            >
                Miss
            </button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        toggles: _.get(state, 'toggles'),
        rollStats: _.get(state, 'weapons.rollStats')
    };
}

export default connect(mapStateToProps)(RollDidHitModal);