import _ from 'lodash';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './AddWeaponModal.css';

function AddWeaponModal(props) {
    const modalClassNames = classNames('add-weapon-modal', {
        'is-hiding': !props.addWeaponModalOpen
    });

    return (
        <div className={modalClassNames}>
            <div className='exit-button-container'>
                <button onClick={props.toggleWeaponModal}>
                    Exit
                </button>
            </div>
            <p>Hi I'm a modal</p>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        addWeaponModalOpen: _.get(state, 'toggles.addWeaponModalOpen')
    };
}

export default connect(mapStateToProps)(AddWeaponModal);