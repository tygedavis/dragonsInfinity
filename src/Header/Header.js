import Button from '../Button/Button';
import store from '../redux/store';
import _ from 'lodash';
import './Header.css';

export default function Header() {
    function togglePlayerAccountModal(){
        const state = store.getState();
        store.dispatch({ type: 'playerAccount/toggleOpen', payload: !_.get(state, 'toggles.playerAccountModalOpen') });
    }

    return(
        <div className='header'>
            <h1>Character Name: <span className='character-name'>Arminius</span></h1>
            <div className='header-buttons'>
                <Button
                    text='Player Account'
                    onClick={togglePlayerAccountModal}
                />
                <Button
                    text='Character Info'
                />
            </div>
        </div>
    )
}