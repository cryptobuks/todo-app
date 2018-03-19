import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';

import { fetchActivities } from '../actions/activities';

import Box from '../components/Box';
import Button from '../components/Button';
import Header from '../components/Header';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import TabContainer from '../components/Tabs/TabContainer';
import Tabs, { Tab } from '../components/Tabs';

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
        const { activities } = this.props;

        return (
            <div>
                <Header>
                    <Button href="/add" iconName="plus" />
                    <Select>
                        <SelectIcon iconName="calendar" />2017
                        <SelectArrow iconName="chevron-down" />
                    </Select>
                </Header>
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
                            {activities &&
                                activities.map(item => (
                                    <ListItem
                                        type={item.typeValue}
                                        title={item.title}
                                        created={item.created}
                                        total={item.value}
                                    />
                                ))}
                        </List>
                    </TabContainer>
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
                    <TabContainer />
                </SwipeableViews>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        activities: state.activities,
    };
};

export default connect(mapStateToProps)(Home);
