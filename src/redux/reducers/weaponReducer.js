import { diceMapper } from '../../utils/mappers';

const initialState = { //Eventually these numbers will be loaded in from a database
    weapons: [
        { name: 'Kick-butt Sword', attackBonus: 3, numberOfDice: 2, typeOfDice: diceMapper.d12, generalBonus: 'str', addProficiencyBonus: true },
        { name: 'Friggin Throwing Stars', attackBonus: 3, numberOfDice: 1, typeOfDice: diceMapper.d20, generalBonus: 'int', addProficiencyBonus: false }
    ],
    rollStats: {
        attackHitsRoll: 0,
        didRollNaturalTwenty: false,
        totalDamageDealt: 0
    }
}

export default function weaponsReducer(state = initialState, action) {
    switch (action.type) {
        case 'weapons/addWeapon': {
            return {
                ...state,
                weapons: [
                    ...state.weapons,
                    action.payload
                ]
            }
        }
        case 'weapons/updateAttackHitsRoll': {
            return {
                ...state,
                rollStats: {
                    ...state.rollStats,
                    attackHitsRoll: action.payload
                }
            }
        }
        case 'weapons/updateTotalDamage': {
            return {
                ...state,
                rollStats: {
                    ...state.rollStats,
                    totalDamageDealt: action.payload
                }
            }
        }
        default:
            return state
    }
}