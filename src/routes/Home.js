import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';

import { removeActivity } from '../actions/activities';

import Box from '../components/Box';
import Button from '../components/Button';
import Chart from '../components/Chart';
import Header from '../components/Header';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import TabContainer from '../components/Tabs/TabContainer';
import Tabs, { Tab } from '../components/Tabs';

import { changeBalance } from '../actions/balance';

const SelectIcon = styled(Icon)`
    width: 25px;
    height: 25px;
    color: #a8b2bc;
    margin-right: 10px;
`;

const Select = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    border: 2px solid #a8b2bc;
    font-size: 22px;
    font-weight: 500;
    color: #213a5a;
    padding: 15px 60px 15px 25px;
    box-sizing: border-box;
`;

const SelectArrow = styled(Icon)`
    position: absolute;
    top: 50%;
    right: 20px;
    height: 25px;
    width: 25px;
    transform: translateY(-50%);
    color: #a8b2bc;
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

const Difference = styled.div`
    display: inline-block;
    background-color: ${props =>
        props.type === 'income' ? 'rgba(67, 230, 169, .3)' : 'rgba(252, 67, 119, .3)'};
    border-radius: 10px;
    padding: 0 25px;
    color: ${props => (props.type === 'income' ? '#43e6a9' : '#fc4377')};
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

const List = styled.div`
    position: relative;
    height: 100%;
`;

const EmptyList = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 22px;
    color: #213a5a;
    font-weight: 500;
`;

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
    onClick = id => {
        this.props.dispatch(removeActivity(id));
    };
    handleSubmitBalance = event => {
        if (event.key === 'Enter') {
            event.preventDefault();

            this.props.dispatch(changeBalance(event.target.innerText));
        }
    };
    render() {
        const { activities, currentBalance, difference, expenses, revenues } = this.props;

        return (
            <div>
                <Header>
                    <Button href="/add" iconName="plus" />
                    <Select>
                        <SelectIcon iconName="calendar" />
                        2017
                        <SelectArrow iconName="chevron-down" />
                    </Select>
                </Header>
                <BalanceWrapper>
                    <Title>Total balance</Title>
                    <Balance>
                        $
                        <span contentEditable="true" onKeyPress={this.handleSubmitBalance}>
                            {currentBalance}
                        </span>
                    </Balance>
                    {difference && (
                        <Difference type={difference.type}>
                            {difference.type === 'income' ? '+' : '-'} ${difference.value}
                        </Difference>
                    )}
                </BalanceWrapper>
                <BoxWrapper>
                    <BoxInner>
                        <BoxRow>
                            <BoxCol>
                                <Box label="Revenues" value={revenues} />
                            </BoxCol>
                            <BoxCol>
                                <Box label="Expenses" value={expenses} bg="#6c6fff" />
                            </BoxCol>
                            <BoxCol>
                                <Box label="Savings" bg="#7a82ac" />
                            </BoxCol>
                        </BoxRow>
                    </BoxInner>
                </BoxWrapper>
                <Tabs value={this.state.value} onChange={this.handleChange}>
                    <Tab iconName="bell" label="Activities" />
                    <Tab iconName="bar-chart-2" label="Statistics" />
                    <Tab iconName="list" label="Summary" />
                </Tabs>
                <SwipeableViews axis="x" index={this.state.value} onChangeIndex={this.handleChangeIndex}>
                    <TabContainer>
                        <List>
                            {activities.length ? (
                                activities.map(item => (
                                    <ListItem
                                        key={item.id}
                                        type={item.typeValue}
                                        title={item.title}
                                        created={item.created}
                                        total={item.total}
                                        onClick={() => this.onClick(item.id)}
                                    />
                                ))
                            ) : (
                                <EmptyList>Empty :(</EmptyList>
                            )}
                        </List>
                    </TabContainer>
                    <TabContainer>
                        <Chart activities={activities} />
                    </TabContainer>
                    <TabContainer />
                </SwipeableViews>
            </div>
        );
    }
}

const mapStateToProps = ({ balance, activities }) => {
    const finalBalance = () => {
        const income = activities.filter(item => item.typeValue === 'income');
        const expense = activities.filter(item => item.typeValue === 'expense');
        const getTotal = action => {
            try {
                if (action.length > 1) {
                    return action.reduce((res, item) => res.total + item.total);
                } else {
                    return action[0].total;
                }
            } catch (err) {
                return 0;
            }
        };

        const totalExpense = getTotal(expense);
        const totalIncome = getTotal(income);

        const getCurrentBalance = () => {
            let value = balance;

            if (totalExpense) {
                value -= totalExpense;
            }
            if (totalIncome) {
                value += totalIncome;
            }

            return value;
        };
        const currentBalance = getCurrentBalance();

        const getDifference = () => {
            if (currentBalance === balance) return {};
            if (currentBalance > balance) return { value: currentBalance - balance, type: 'income' };

            return { value: balance - currentBalance, type: 'expense' };
        };

        const difference = getDifference();
        return {
            currentBalance,
            difference,
            expenses: totalExpense,
            revenues: totalIncome,
        };
    };

    const { currentBalance, difference, expenses, revenues } = finalBalance();

    return {
        revenues,
        expenses,
        currentBalance,
        difference,
        activities,
    };
};

export default connect(mapStateToProps)(Home);
