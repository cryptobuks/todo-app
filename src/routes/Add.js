import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';

import Header from '../components/Header';
import Button from '../components/Button';
import TabContainer from '../components/Tabs/TabContainer';
import Tabs, { Tab } from '../components/Tabs';

import { addActivity } from '../actions/activities';

const Form = styled.form`
    box-sizing: border-box;
`;

const FormGroup = styled.div`
    margin-bottom: 16px;
`;

const Input = styled.input`
    width: 100%;
    border-radius: 16px;
    border: 2px solid #a8b2bc;
    font-size: 22px;
    font-weight: 500;
    color: #213a5a;
    padding: 15px 25px;
    box-sizing: border-box;
`;

const Checkbox = styled.input.attrs({
    type: 'checkbox',
})``;

const StyledButton = styled.button`
    border: 0;
    background: #297aff;
    padding: 15px 25px;
    border-radius: 16px;
    font-size: 22px;
    box-sizing: border-box;
    width: 100%;
    color: #fff;
    cursor: pointer;
`;

class AddActivity extends Component {
    state = {
        title: '',
        total: '',
        type: 'income',
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
    onSubmit = e => {
        e.preventDefault();

        const { title, total, value } = this.state;
        const type = value === 0 ? 'income' : 'expense';

        this.props.dispatch(
            addActivity({
                title,
                total,
                typeValue: type,
            })
        );
        this.props.history.push('/');
    };
    onChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    };
    render() {
        return (
            <div>
                <Header>
                    <Button href="/" iconName="arrow-left" pure />
                </Header>
                <Tabs value={this.state.value} onChange={this.handleChange}>
                    <Tab label="Income" />
                    <Tab label="Expense" />
                </Tabs>
                <SwipeableViews axis="x" index={this.state.value} onChangeIndex={this.handleChangeIndex}>
                    <TabContainer>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Input
                                    name="title"
                                    value={this.state.title}
                                    placeholder="name"
                                    required
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    name="total"
                                    value={this.state.total}
                                    placeholder="$666"
                                    required
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <StyledButton type="submit" children="Submit" />
                            </FormGroup>
                        </Form>
                    </TabContainer>
                    <TabContainer>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Input
                                    name="title"
                                    value={this.state.title}
                                    placeholder="name"
                                    required
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    name="total"
                                    value={this.state.total}
                                    placeholder="$666"
                                    required
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <StyledButton type="submit" children="Submit" />
                            </FormGroup>
                        </Form>
                    </TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

export default connect()(AddActivity);
