let nextTodoId = 0;
export const addTodo = text => ({
    text,
    type: 'ADD_TODO',
    id: nextTodoId++,
    created: new Date().toLocaleString()
});

export const toggleTodo = id => ({
    id,
    type: 'TOGGLE_TODO',
});
