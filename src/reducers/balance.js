export default (state = 0, action) => {
    switch (action.type) {
        case 'ADD_BALANCE':
            return state + action.value;
        case 'CHANGE_BALANCE':
            return action.value;
        default:
            return state;
    }
};