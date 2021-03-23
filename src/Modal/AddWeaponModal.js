import { useState, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './AddWeaponModal.css';
import store from '../redux/store';

function AddWeaponModal(props) {
    const defaultState = {
        name: '',
        typeOfDice: '',
        numberOfDice: '',
        addProficiencyBonus: '',
        generalBonus: ''
    }

    const [ weapon, setWeapon ] = useState(defaultState);



    const modalClassNames = classNames('add-weapon-modal', {
        'is-hiding': !props.addWeaponModalOpen
    });

    useEffect(() => {
        if (props.addWeaponModalOpen === false) {
            setWeapon(defaultState)
        }
    }, [props.addWeaponModalOpen])

    function onInputChange(e) {
        if (e.target.name === 'proficient') {
            e.target.value = true;
        }

        setWeapon({
            ...weapon,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit() {
        //Todo: validate inputs
        store.dispatch({ type: 'weapons/addWeapon', payload: weapon });
        props.toggleWeaponModal();
    }

    return (
        <div className={modalClassNames}>
            <div className='exit-button-container'>
                <button onClick={props.toggleWeaponModal}>
                    Exit
                </button>
            </div>
            <p>Add A Weapon</p>

            <div className='inputs-container'>
                <div className='input-container'>
                    <label htmlFor="Name">Weapon Name: </label>
                    <input
                        placeholder='Weapon Name'
                        value={weapon.name}
                        name='name'
                        type='text'
                        onChange={onInputChange}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="Type">What Dice: </label>
                    <input
                        placeholder='Number Sided Dice to Roll'
                        value={weapon.typeOfDice}
                        name='typeOfDice'
                        type='text'
                        onChange={onInputChange}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="Rolls">Number of Rolls: </label>
                    <input
                        placeholder='How Many Do You Roll?'
                        value={weapon.numberOfDice}
                        name='numberOfDice'
                        type='number'
                        onChange={onInputChange}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="Proficient">Add Proficiency Bonus? </label>
                    <input
                        value={weapon.addProficiencyBonus}
                        name='proficient'
                        type='checkbox'
                        onChange={onInputChange}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="generalBonus">Added Bonuses: </label>
                    <select name='generalBonus' onChange={onInputChange}>
                        <option value='' selected disabled hidden>Choose here</option>
                        <option value='str'>Strength</option>
                        <option value='dex'>Dexterity</option>
                        <option value='con'>Constitution</option>
                        <option value='wis'>Wisdom</option>
                        <option value='int'>Intelligence</option>
                        <option value='cha'>Charisma</option>
                    </select>
                </div>
            </div>

            <div className='submit-button-container'>
                <button onClick={handleSubmit}>
                    Add Weapon
                </button>
            </div>
        </div>
    )
};


function mapStateToProps(state) {
    return {
        addWeaponModalOpen: _.get(state, 'toggles.addWeaponModalOpen')
    };
}

export default connect(mapStateToProps)(AddWeaponModal);