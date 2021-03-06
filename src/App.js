import './App.css';
import { connect } from 'react-redux';
import Header from './Header/Header';
import GeneralStats from './Stats/GeneralStats';
import GeneralSkills from './Skills/GeneralSkills';
import PlayerAccountModal from './Modal/PlayerAccountModal';
import Weapon from './Weapons/Weapons';
import Spellbook from './Spells/Spellbook';

function App(props) {
  return (
    <div className="App">
        <div className='app-header'>
            <Header/>
        </div>
        <div className='app-body'>
            <div className='body-container-1'>
                <GeneralStats/>
                <GeneralSkills/>
                <Weapon/>
            </div>
            <div className='body-container-2'>
                <Spellbook/>
            </div>
        </div>
        <PlayerAccountModal/>
    </div>
  );
}

function mapStateToProps(state) {
    return {
        toggles: state.toggles
    };
}

export default connect(mapStateToProps)(App);