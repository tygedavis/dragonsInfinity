import _ from 'lodash';
import { connect } from 'react-redux';
import './PlayerAccountModal.css';

function PlayerAccountModal(props) {
    const { playerAccountModalOpen } = _.get(props, 'toggles');

    return (
        <div className={playerAccountModalOpen ? 'playerAccountModalContainer showing' : 'playerAccountModalContainer hiding'}>
            <span>Hi I'm the player account modal</span>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        toggles: state.toggles
    };
}

export default connect(mapStateToProps)(PlayerAccountModal);