import Weapon from './Weapon';
import { connect } from 'react-redux';
import _ from 'lodash';

import './Weapons.css'

function Weapons(props) {
    return (
        <div className='weapons-container'>
            <div className='weapons-header'>
                <p> Weapons </p>
            </div>
            <div className='weapons-body'>
                {props.weapons.map((weapon) => {
                    return (
                        <Weapon
                            weapon={weapon}
                        />
                    )
                })}
            </div>
        </div>
    );
};

function mapStateToProps(state){
    return {
        weapons: _.get(state, 'weapons.weapons')
    };
}

export default connect(mapStateToProps)(Weapons);