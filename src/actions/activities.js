import v4 from 'uuid/v4';

export const addActivity = ({typeValue, total, title}) => ({
    total: parseInt(total),
    typeValue,
    title,
    type: 'ADD_ACTIVITY',
    id: v4(),
    created: new Date().toUTCString(),
});

export const removeActivity = (id) => ({
    id,
    type: 'REMOVE_ACTIVITY',
});
