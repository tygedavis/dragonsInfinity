import _ from 'lodash';
import { connect } from 'react-redux';
import store from '../redux/store';
import './Weapon.css';
import RollDidHitModal from '../Modal/RollDidHitModal';
import DealDamageModal from '../Modal/DealDamageModal';

function Weapon(props) {
    function rollIfAttackHits(addProficiencyBonus, proficiencyBonus){
        let currentNumber = 0;

        const randomNumber = Math.random()*(20-0)
        const randomWholeNumber = Math.ceil(randomNumber);

        if(randomWholeNumber === 20){
            //Todo: Find out what to do in event of a natural 20
            //Send this to dispatch to handle
            console.log('***Rolled a nat 20***');
        }

        currentNumber += randomWholeNumber

        if (addProficiencyBonus) {
            currentNumber = currentNumber + proficiencyBonus;
        }

        //Todo: Find out if anything else gets added to this roll

        return currentNumber;
    }

    function rollDamage(randomNumberMax, numberOfRandomNumbers, generalSkillBonus) {
        let totalDamageDealt = 0;
        let i = 0;

        do {
            i++;
            const randomNumber = Math.random()*(randomNumberMax-0)
            const randomWholeNumber = Math.ceil(randomNumber);

            totalDamageDealt = totalDamageDealt + randomWholeNumber;
        } while (i <= numberOfRandomNumbers);

        totalDamageDealt = totalDamageDealt + generalSkillBonus.modifier;

        store.dispatch({ type: 'weapons/updateTotalDamage', payload: totalDamageDealt });
    }

    function doAttackRoll() {
        const weaponInfo = _.find(props.weapons, { name: _.get(props, 'weapon.name') })
        const randomNumberMax = _.get(weaponInfo, 'typeOfDice');
        const numberOfRandomNumbers = _.get(weaponInfo, 'numberOfDice');
        const generalSkillBonus = _.find(props.generalSkills, { shortName: _.get(weaponInfo, 'generalBonus') });
        const proficiencyBonus = _.find(props.stats, { name: 'Proficiency' }).total

        const attackHitsRoll = rollIfAttackHits(weaponInfo.addProficiencyBonus, proficiencyBonus);
        const totalDamageDealt = rollDamage(randomNumberMax, numberOfRandomNumbers, generalSkillBonus);


        store.dispatch({ type: 'rollDidHitModal/toggleOpen', payload: !_.get(props, 'toggles.rollDidHitModalOpen') });
        store.dispatch({ type: 'weapons/updateAttackHitsRoll', payload: attackHitsRoll });
    }

    return(
      <div className='weapon-container'>
          <RollDidHitModal />
          <DealDamageModal />
          <p className="weapon-name">{_.get(props, 'weapon.name')}</p>
          <p className="weapon-dice">{_.get(props, 'weapon.numberOfDice')}d{_.get(props, 'weapon.typeOfDice')}</p>
          <div className="weapon-roll-container">
            <button
                className="weapon-roll-btn"
                onClick={doAttackRoll}
            >
                Roll
            </button>
          </div>
      </div>
    )
};

function mapStateToProps(state) {
    return {
        weapons: _.get(state, 'weapons.weapons'),
        generalSkills: _.get(state, 'stats.generalSkills'),
        stats: _.get(state, 'stats.stats'),
        toggles: _.get(state, 'toggles')
    };
}

export default connect(mapStateToProps)(Weapon);