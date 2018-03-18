import React, { Component } from 'react';
import styled from 'styled-components';

const Inner = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    border-radius: 5px;
    background: #fff;
    margin-bottom: 16px;
    color: #495057;
    box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08);
    transition: box-shadow 0.25s ease 0s, opacity 0.25s ease 0s;
    ${props => props.checked && 'opacity: .5'}

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        box-shadow: 5px 12px 20px rgba(36, 37, 38, 0.13);
    }
`;

const Text = styled.div`
    flex: 1;
`;

const Input = styled.input.attrs({
    type: 'checkbox',
})`
    display: none;

    &:checked + ${StyledCheckbox}::before {
        opacity: 1;
    }
`;

const StyledCheckbox = styled.span`
    display: inline-block;
    flex: none;
    background-color: #fff;
    border: 1px solid #e1e1e1;
    border-radius: 24px;
    width: 24px;
    height: 24px;
    padding-left: 16px;
    margin-right: 5px;
    position: relative;
    cursor: pointer;
    box-sizing: border-box;

    &::before {
        content: '';
        border-style: none solid solid none;
        border-width: 0 3px 3px 0;
        width: 6px;
        height: 10px;
        position: absolute;
        top: 3px;
        left: 7px;
        color: #2673e7;
        transform: rotate(45deg);
        transition: all 0.1s ease-in-out;
        opacity: 0;
    }
`;

export default class Item extends Component {
    state = {
        completed: this.props.completed,
    };
    handleChange = e => {
        const { checked } = e.target;
        const { id } = e.target.dataset;

        this.setState({
            checked,
        });

        if (this.props.onChange) this.props.onChange(checked, id);
    };
    render() {
        const { id, children } = this.props;

        return (
            <Inner {...this.state}>
                <Text>{children}</Text>
                <Input checked={this.state.completed} data-id={id} onChange={this.handleChange} />
                <StyledCheckbox />
            </Inner>
        );
    }
}
