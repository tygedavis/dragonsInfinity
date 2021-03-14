const initialState = { //Eventually these numbers will be loaded in from a database
    healthPoints: {
        currentHealthPoints: 150,
        totalHealthPoints: 160
    },
    stats: [
        { name: 'Initiative', total: '+2' },
        { name: 'Speed', total: '40' },
        { name: 'Proficiency', total: '+5' },
        { name: 'Armor Class', total: '13' }
    ],
    generalSkills: [
        { id: 1, name: 'Strength', level: 10, modifier: 2 },
        { id: 2, name: 'Dexterity', level: 10, modifier: 2 },
        { id: 3, name: 'Constitution', level: 9, modifier: 2 },
        { id: 4, name: 'Wisdom', level: 4, modifier: 0 },
        { id: 5, name: 'Intelligence', level: 5, modifier: 0 },
        { id: 6, name: 'Charisma', level: 8, modifier: 1 }
    ],
    secondarySkills: [
        { name: 'Acrobatics', genSkill: 'dex', profficient: false },
        { name: 'Animal Handling', genSkill: 'wis', profficient: false },
        { name: 'Arcana', genSkill: 'int', profficient: false },
        { name: 'Athletics', genSkill: 'str', profficient: false },
        { name: 'Deception', genSkill: 'cha', profficient: false },
        { name: 'History', genSkill: 'int', profficient: false },
        { name: 'Insight', genSkill: 'wis', profficient: false },
        { name: 'Intimidation', genSkill: 'cha', profficient: false },
        { name: 'Investigation', genSkill: 'int', profficient: false },
        { name: 'Medicine', genSkill: 'wis', profficient: false },
        { name: 'Nature', genSkill: 'int', profficient: false },
        { name: 'Perception', genSkill: 'wis', profficient: false },
        { name: 'Performance', genSkill: 'cha', profficient: false },
        { name: 'Persuasion', genSkill: 'cha', profficient: false },
        { name: 'Religion', genSkill: 'int', profficient: false },
        { name: 'Slight of Hand', genSkill: 'dex', profficient: false },
        { name: 'Stealth', genSkill: 'dex', profficient: false },
        { name: 'Survival', genSkill: 'wis', profficient: false }
    ]
}

export default function statsReducer(state = initialState, action) {
    switch (action.type) {
        case 'healthPoints/updateHealth': {
            return {
                ...state,
                playerAccountModalOpen: action.payload
            }
        }
        default:
            return state
    }
}