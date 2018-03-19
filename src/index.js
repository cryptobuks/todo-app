import './configSvgSprite';
import './globalStyles';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import configStore from './configStore';
import Home from './routes/Home';
import Add from './routes/Add';

const store = configStore().store;
const history = configStore().history;

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={Add} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.querySelector('main')
);
