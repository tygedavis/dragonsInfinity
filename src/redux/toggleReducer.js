const initialState = {
    playerAccountModalOpen: false
}

export default function toggleReducer(state = initialState, action) {
    switch (action.type) {
        case 'playerAccount/toggleOpen': {
            console.log('------->1<--------');
            console.log('------->action', action);
            return {
                ...state,
                playerAccountModalOpen: action.payload
            }
        }
        default:
            return state
    }
}