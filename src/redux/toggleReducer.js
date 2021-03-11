const initialState = {
    playerAccountModalOpen: false
}

export default function toggleReducer(state = initialState, action) {
    switch (action.type) {
        case 'playerAccount/toggleOpen': {
            return {
                ...state,
                playerAccountModalOpen: action.payload
            }
        }
        default:
            return state
    }
}