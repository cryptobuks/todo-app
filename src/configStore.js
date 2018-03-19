import { createStore, combineReducers,  applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import throttle from 'lodash/throttle';

import reducers from './reducers';
import { loadState, saveState } from './localStorage';


const configStore = () => {
    const history = createHistory();
    const middleware = routerMiddleware(history);
    const persistedState = loadState();
    const store = createStore(
        combineReducers({
            ...reducers,
            router: routerReducer
        }),
        persistedState,
        applyMiddleware(middleware)
    );

    store.subscribe(
        throttle(() => {
            saveState({
                activities: store.getState().activities,
            });
            console.log(store.getState());
        }, 1000)
    );

    return { store, history };
};

export default configStore;
