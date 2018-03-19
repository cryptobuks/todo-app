export default (state = [], { type, id, title, total, typeValue, created }) => {
    switch (type) {
        case 'ADD_ACTIVITY':
            return [
                ...state,
                {
                    id,
                    total,
                    title,
                    typeValue,
                    created,
                },
            ];
        case 'REMOVE_ACTIVITY':
            return state.map(todo => (todo.id === action.id ? {} : todo));
        default:
            return state;
    }
};
