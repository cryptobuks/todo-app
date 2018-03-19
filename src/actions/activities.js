import v4 from 'uuid/v4';

export const addActivity = (typeValue, total, title = 'no name') => ({
    total,
    typeValue,
    title,
    type: 'ADD_ACTIVITY',
    id: v4(),
    created: new Date().toLocaleString(),
});

export const removeActivity = id => ({
    id,
    type: 'REMOVE_ACTIVITY',
});
