import Spell from './Spell';
import _ from 'lodash';
import './Spellbook.css';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import store from '../redux/store';

function Spellbook(props) {
    // function toggleSpellModal(){
    //     const state = store.getState();
    //     store.dispatch({ type: 'spellBook/addSpell', payload: !_.get(state, 'toggles.addSpellModalOpen') });
    // }

    return (
        <div className="spellbook-container">
            <div className="spellbook-header">
                <div className="spell-header-spacing"></div>
                <p>Spells</p>
                <div className="spell-plus-container">
                    <IconContext.Provider value={{ className: 'spell-plus-icon' }}>
                        <HiOutlinePlusCircle/>
                    </IconContext.Provider>
                </div>
                <div className="spellbook-body">
                    {/* {props.spellbook.map((spell) => {
                        return (
                            <Spell
                                spell={spell}
                            />
                        );
                    })}         */}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        spellbook: _.get(state, 'spellbook.spellbook')
    };
}

export default connect(mapStateToProps)(Spellbook);