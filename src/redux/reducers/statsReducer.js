const initialState = { //Eventually these numbers will be loaded in from a database
    currentHealthPoints: 150,
    totalHealthPoints: 160
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