import React, { Component } from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import ArrowIcon from '../svg/chevron-down.svg';

const Header = styled.header`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    height: 160px;
    justify-content: space-between;
    padding: 0 60px;
`;

const Button = styled.button`
    background: none;
    border: 0;
    cursor: pointer;
`;

const StyledIcon = styled(Icon)`
    width: 50px;
    height: 50px;
    color: #a8b2bc;
`;

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

export default () => {
    return (
        <Header>
            <Button>
                <StyledIcon iconName="plus" />
            </Button>
            <Select>
                <SelectIcon iconName="calendar" />2017
                <SelectArrow iconName="chevron-down" />
            </Select>
        </Header>
    );
};
