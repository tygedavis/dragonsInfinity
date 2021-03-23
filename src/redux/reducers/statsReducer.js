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
        { name: 'Acrobatics', genSkill: 'dex', proficient: false },
        { name: 'Animal Handling', genSkill: 'wis', proficient: false },
        { name: 'Arcana', genSkill: 'int', proficient: false },
        { name: 'Athletics', genSkill: 'str', proficient: true },
        { name: 'Deception', genSkill: 'cha', proficient: false },
        { name: 'History', genSkill: 'int', proficient: false },
        { name: 'Insight', genSkill: 'wis', proficient: false },
        { name: 'Intimidation', genSkill: 'cha', proficient: false },
        { name: 'Investigation', genSkill: 'int', proficient: false },
        { name: 'Medicine', genSkill: 'wis', proficient: false },
        { name: 'Nature', genSkill: 'int', proficient: false },
        { name: 'Perception', genSkill: 'wis', proficient: false },
        { name: 'Performance', genSkill: 'cha', proficient: false },
        { name: 'Persuasion', genSkill: 'cha', proficient: false },
        { name: 'Religion', genSkill: 'int', proficient: false },
        { name: 'Slight of Hand', genSkill: 'dex', proficient: true },
        { name: 'Stealth', genSkill: 'dex', proficient: true },
        { name: 'Survival', genSkill: 'wis', proficient: false }
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