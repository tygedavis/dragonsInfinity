import { connect } from 'react-redux';
import _ from 'lodash';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import './UpdateCurrentHealthModal.css';
import store from '../redux/store';

function UpdateCurrentHealthModal(props) {
    const defaultState = {
        healthPointDiff: '',
        gainOrLoss: 'lost'
    }

    const [ localState, setLocalState ] = useState(defaultState);

    useEffect(() => {
        if (props.updateCurrentHealthModal === false) {
            setLocalState(defaultState)
        }
    }, [props.updateCurrentHealthModal])

    function handleSubmit(){
        const currentHealthPoints = _.get(props, 'stats.currentHealthPoints');
        const totalHealthPoints = _.get(props, 'stats.totalHealthPoints');
        let newHealth = currentHealthPoints;
        if(localState.gainOrLoss === 'lost') {
            newHealth = newHealth - localState.healthPointDiff;

            if ((newHealth * -1) >= (totalHealthPoints * 2)) {
                alert('You have died');
            } else if (newHealth <= 0){
                alert('You have passed out');
            }
        } else {
            newHealth = newHealth + localState.healthPointDiff;

            if (newHealth >= totalHealthPoints) {
                newHealth = totalHealthPoints;
            }
        }

        store.dispatch({ type: 'healthPoints/updateCurrentHealth', payload: newHealth });
        props.toggleModal();
    }

    function onInputChange(e) {
        setLocalState({
                ...localState,
                [e.target.name]: e.target.value
            });
    }

    const modalClassNames = classNames('update-current-health-modal-container', {
        'is-hiding': !props.updateCurrentHealthModal
    });

    return (
        <div className={modalClassNames}>
            <div className='exit-button-container'>
                <button onClick={props.toggleModal}>
                    Exit
                </button>
            </div>
            <p>Update Your Health</p>

            <div className='inputs-container'>
                <div className='input-container'>
                    <label htmlFor="gainOrLoss">Lost Health: </label>
                    <input
                        value='lost'
                        name='gainOrLoss'
                        type='radio'
                        onChange={onInputChange}
                        checked
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="gainOrLoss">Gained Health: </label>
                    <input
                        value='gained'
                        name='gainOrLoss'
                        type='radio'
                        onChange={onInputChange}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="healthPointDiff">How Much: </label>
                    <input
                        placeholder='0'
                        value={localState.healthPointDiff}
                        name='healthPointDiff'
                        type='number'
                        onChange={onInputChange}
                    />
                </div>
            </div>

            <div className='submit-button-container'>
                <button onClick={handleSubmit}>
                    Done
                </button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        stats: _.get(state, 'stats.healthPoints'),
        updateCurrentHealthModal: _.get(state, 'toggles.updateCurrentHealthModalOpen')
    };
}

export default connect(mapStateToProps)(UpdateCurrentHealthModal);