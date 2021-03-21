import Weapon from './Weapon';
import { connect } from 'react-redux';
import _ from 'lodash';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import AddWeaponModal from './AddWeaponModal';
import './Weapons.css';
import { IconContext } from 'react-icons';
import store from '../redux/store';

function Weapons(props) {
    function toggleWeaponModal(){
        const state = store.getState();
        store.dispatch({ type: 'weapons/toggleOpen', payload: !_.get(state, 'toggles.addWeaponModalOpen') });
    }

    return (
        <div className='weapons-container'>
            <AddWeaponModal
                toggleWeaponModal={toggleWeaponModal}
            />
            <div className='weapons-header'>
                <p> Weapons </p>
                <div
                    onClick={ toggleWeaponModal }
                >
                    <IconContext.Provider value={{ className: 'plus-icon' }}>
                        <HiOutlinePlusCircle/>
                    </IconContext.Provider>
                </div>
            </div>
            <div className='weapons-body'>
                {props.weapons.map((weapon) => {
                    return (
                        <Weapon
                            weapon={weapon}
                        />
                    );
                })}
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        weapons: _.get(state, 'weapons.weapons')
    };
}

export default connect(mapStateToProps)(Weapons);