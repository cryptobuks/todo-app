import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './App';

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

render(<App />, document.querySelector('main'));
