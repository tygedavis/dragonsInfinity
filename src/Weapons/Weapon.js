import _ from 'lodash';

import './Weapon.css';

export default function Weapon(props) {
  return(
      <div className='weapon-container'>
          <p>{_.get(props, 'weapon.name')}</p>
          <p>{_.get(props, 'weapon.numberOfDice')}d{_.get(props, 'weapon.typeOfDice')}</p>
          {/*Todo: add a roll button here*/}
      </div>
  )
};