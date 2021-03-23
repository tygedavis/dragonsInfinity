const initialState = {
    playerAccountModalOpen: false,
    addWeaponModalOpen: false
}

export default function toggleReducer(state = initialState, action) {
    switch (action.type) {
        case 'playerAccount/toggleOpen': {
            return {
                ...state,
                playerAccountModalOpen: action.payload
            }
        }
        case 'weapons/toggleOpen': {
            return {
                ...state,
                addWeaponModalOpen: action.payload
            }
        }
        default:
            return state
    }
}