import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import { injectGlobal } from 'styled-components';
import svg4everybody from 'svg4everybody';

import reducers from './reducers';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
    var __svg__ = {
        path: './svg/*.svg',
        name: 'svgsprite.svg'
    };
} else {
    var __svg__ = {
        path: './svg/*.svg',
        name: 'svgsprite.[hash].svg'
    };
}

require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);
svg4everybody();

injectGlobal([
    `
    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 1rem;
        line-height: 1.5;
        color: #111;
    }

    input {
        color: #495057;
        outline: 0;

        &:focus {
            box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
        }
    }
    `,
]);

const store = createStore(reducers);

store.subscribe(() => {
    console.log(store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('main')
);
