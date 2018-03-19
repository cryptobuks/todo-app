import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from './components/Header';
import Home from './routes/Home';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        );
    }
}

export default connect()(App);
