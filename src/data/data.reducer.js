export const dataReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return action.payload;
        default:
            return state;
    }
}