import { diceMapper } from '../../utils/mappers';

const initialState = { //Eventually these numbers will be loaded in from a database
    weapons: [
        { name: 'Kick-butt Sword', attackBonus: 3, numberOfDice: 2, typeOfDice: diceMapper.d12, generalBonus: ['str'], addProficiencyBonus: true },
        { name: 'Friggin Throwing Stars', attackBonus: 3, numberOfDice: 1, typeOfDice: diceMapper.d20, generalBonus: ['int'], addProficiencyBonus: false }
    ]
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
        default:
            return state
    }
}