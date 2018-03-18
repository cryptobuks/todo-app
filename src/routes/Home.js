import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';

import { addTodo } from '../actions/todos';
import Todo from '../components/Todo';
import AddTodo from '../components/AddTodo';

import Header from '../components/Header';
import Box from '../components/Box';
import Tabs, { Tab } from '../components/Tabs';
import TabContainer from '../components/Tabs/TabContainer';
import ListItem from '../components/ListItem';

const Body = styled.div`
    background-color: #fff;
    color: #232840;
    color: #213a5a;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
`;

const BalanceWrapper = styled.div`
    text-align: center;
    margin-bottom: 72px;
`;

const Title = styled.h1`
    color: #d6dbe4;
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    text-transform: uppercase;
    line-height: 1.2;
`;

const Balance = styled.div`
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 8px;
    color: #213a5a;
`;

const Potracheno = styled.div`
    display: inline-block;
    background-color: #feecf1;
    border-radius: 10px;
    padding: 0 25px;
    color: #fc4377;
    font-weight: 500;
    margin-top: 15px;
    font-size: 24px;
    line-height: 52px;
    height: 52px;
    white-space: nowrap;
`;

const BoxWrapper = styled.div`
    max-width: 100%;
    padding-left: 56px;
    margin-bottom: 10px;
`;

const BoxInner = styled.div`
    overflow-y: hidden;
`;

const BoxRow = styled.div`
    display: flex;
    margin: 0 -10px;
    box-sizing: border-box;
`;

const BoxCol = styled.div`
    flex: 0 0 41.7%;
    padding: 0 10px;
    box-sizing: border-box;
`;

const List = styled.div``;

class Home extends Component {
    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({
            value,
        });
    };
    handleChangeIndex = value => {
        this.setState({
            value,
        });
    };
    render() {
        return (
            <div>
                <BalanceWrapper>
                    <Title>Total banlace</Title>
                    <Balance>$32,058.98</Balance>
                    <Potracheno>-$2890,35</Potracheno>
                </BalanceWrapper>
                <BoxWrapper>
                    <BoxInner>
                        <BoxRow>
                            <BoxCol>
                                <Box />
                            </BoxCol>
                            <BoxCol>
                                <Box bg="#6c6fff" />
                            </BoxCol>
                            <BoxCol>
                                <Box bg="#7a82ac" />
                            </BoxCol>
                        </BoxRow>
                    </BoxInner>
                </BoxWrapper>
                <Tabs value={this.state.value} onChange={this.handleChange}>
                    <Tab active="true" iconName="bell" label="Activities" />
                    <Tab iconName="bar-chart-2" label="Statistics" />
                    <Tab iconName="list" label="Summary" />
                </Tabs>
                <SwipeableViews axis="x" index={this.state.value} onChangeIndex={this.handleChangeIndex}>
                    <TabContainer>
                        <List>
                            <ListItem
                                type="spend"
                                title="iTunes Gift Card #22338"
                                created="Today, 13:45"
                                amount="$198.25"
                            />
                            <ListItem
                                type="income"
                                title="iTunes Gift Card #22338"
                                created="Today, 13:45"
                                amount="$198.25"
                            />
                        </List>
                    </TabContainer>
                    <TabContainer><List>
                            <ListItem
                                type="spend"
                                title="iTunes Gift Card #22338"
                                created="Today, 13:45"
                                amount="$198.25"
                            />
                            <ListItem
                                type="income"
                                title="iTunes Gift Card #22338"
                                created="Today, 13:45"
                                amount="$198.25"
                            />
                        </List></TabContainer>
                    <TabContainer></TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

export default Home;
