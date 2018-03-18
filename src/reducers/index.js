import { combineReducers } from 'redux';
import todos from './todos';
import userIdReducer from './userIdReducer';

export default combineReducers({
    todos,
    userIdReducer,
});
