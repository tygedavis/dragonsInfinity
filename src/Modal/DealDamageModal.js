import _ from 'lodash';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './DealDamageModal.css';
import store from '../redux/store';

function DealDamageModal(props) {
    const dealDamageModalClassnames = classNames('deal-damage-modal', {
        'is-hiding': !props.toggles.dealDamageRoll
    });

    return (
        <div className={dealDamageModalClassnames}>
            <p>You dealt {_.get(props, 'weapons.rollStats.totalDamageDealt')} damage!</p>
            <button
                onClick={() => store.dispatch({ type: 'dealDamageRoll/toggleOpen', payload: false })}
            >
                Ok
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        weapons: _.get(state, 'weapons'),
        generalSkills: _.get(state, 'stats.generalSkills'),
        stats: _.get(state, 'stats.stats'),
        toggles: _.get(state, 'toggles')
    };
}

export default connect(mapStateToProps)(DealDamageModal);