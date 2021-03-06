const initialState = {
    playerAccountModalOpen: false,
    addWeaponModalOpen: false,
    rollDidHitModalOpen: false,
    dealDamageRoll: false,
    updateCurrentHealthModalOpen: false
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
        case 'rollDidHitModal/toggleOpen': {
            return {
                ...state,
                rollDidHitModalOpen: action.payload
            }
        }
        case 'dealDamageRoll/toggleOpen': {
            return {
                ...state,
                dealDamageRoll: action.payload
            }
        }
        case 'currentHealthPoints/toggleOpen': {
            return {
                ...state,
                updateCurrentHealthModalOpen: action.payload
            }
        }
        default:
            return state
    }
}