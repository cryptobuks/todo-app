import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Home from './routes/Home';

class App extends Component {
    render() {
        const { userIdReducer, onClick } = this.props;

        return (
            <div>
                <Header />
                <Home />
            </div>
        );
    }
}

export default App;
