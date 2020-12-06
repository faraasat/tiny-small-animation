export const dataReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            // console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}