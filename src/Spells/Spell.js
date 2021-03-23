import _ from 'lodash';
import './Spell.css';

export default function Spell(props) {
    return(
        <div className="spell-container">
            <p className="spell-name">{_.get(props, 'spell.name')}</p>
            <div className="spell-roll-container">
                <button className="spell-roll-btn">Roll</button>
            </div>
        </div>
    )
}