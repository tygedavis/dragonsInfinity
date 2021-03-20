import _ from 'lodash';

import './Weapon.css';

export default function Weapon(props) {
  return(
      <div className='weapon-container'>
          <p className="weapon-name">{_.get(props, 'weapon.name')}</p>
          <p className="weapon-dice">{_.get(props, 'weapon.numberOfDice')}d{_.get(props, 'weapon.typeOfDice')}</p>
          <div className="weapon-roll-container">
            <button className="weapon-roll-btn">Roll</button>
          </div>
      </div>
  )
};