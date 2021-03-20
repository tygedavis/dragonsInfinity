import { diceMapper } from '../../utils/mappers';

const initialState = { //Eventually these numbers will be loaded in from a database
    weapons: [
        { name: 'Kick-butt Sword', attackBonus: 3, numberOfDice: 2, typeOfDice: diceMapper.d12, generalBonus: ['str'], addProficiencyBonus: true },
        { name: 'Friggin Throwing Stars', attackBonus: 3, numberOfDice: 1, typeOfDice: diceMapper.d20, generalBonus: ['int'], addProficiencyBonus: false },
        { name: 'Something else thats lethal', attackBonus: 3, numberOfDice: 1, typeOfDice: diceMapper.d6, generalBonus: [], addProficiencyBonus: false },
        { name: 'Example 4', attackBonus: 3, numberOfDice: 1, typeOfDice: diceMapper.d4, generalBonus: [], addProficiencyBonus: false }
    ]
}

export default function weaponsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}