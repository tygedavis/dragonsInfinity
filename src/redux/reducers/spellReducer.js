import { diceMapper } from '../../utils/mappers';

const initialState = {
    spells: [
        {name: 'Fire Storm', attackBonus: 3, numberOfDice: 2, typeOfDice: diceMapper.d16, generalBonus: 'int'}
    ]
}

export default function spellReducer(state = initialState, action) {
    switch (action.type) {
        case 'spellBook/addSpell': {
            return {
                ...state,
                spells: [
                    ...state.spells,
                    action.payload
                ]
            }
        }
        default:
            return state
    }
}