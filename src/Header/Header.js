import Button from '../Button/Button';
import './Header.css';

export default function Header() {
    return(
        <div className='header'>
            <h1>Character Name: <span className='character-name'>Arminius</span></h1>
            <div className='header-buttons'>
                <Button
                    text='Player Account'
                />
                <Button
                    text='Character Info'
                />
            </div>
        </div>
    )
}