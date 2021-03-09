import { useState } from 'react';
import Button from '../Button/Button';
import './Header.css';

export default function Header() {

    const [playerAccountModal, setPlayerAccountModal] = useState(false);

    function togglePlayerAccountModal(){
        setPlayerAccountModal(!playerAccountModal)
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