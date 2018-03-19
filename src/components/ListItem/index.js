import React, { Component } from 'react';
import styled from 'styled-components';

import Icon from '../Icon';

const Inner = styled.div`
    display: flex;
    position: relative;
    background-color: #fff;
    padding: 32px 56px;
    margin-bottom: 6px;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;

const Text = styled.div``;

const StyledIcon = styled(Icon)`
    margin-right: 25px;
    width: 20px;
    height: 20px;
    color: ${({ type }) => (type === 'income' ? '#39d498' : '#f9346b')};
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
    color: #455b74;
`;

const Created = styled.div`
    font-size: 22px;
    letter-spacing: 0.5px;
    color: #b5bec8;
`;

const Total = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 22px;
    font-weight: 500;
    flex: none;
    color: #213a5a;

    & > span {
        margin-right: 10px;
        color: ${({ type }) => (type === 'income' ? '#39d498' : '#f9346b')};
    }
`;

export default ({ type = 'income', title, created, total, onClick }) => {
    let date = new Date(created).toLocaleDateString('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <Inner onClick={onClick}>
            <Left>
                {type === 'income' ? (
                    <StyledIcon iconName="arrow-up-right" type={type} />
                ) : (
                    <StyledIcon iconName="arrow-down-left" type={type} />
                )}
                <Text>
                    <Title>{title}</Title>
                    <Created>{date}</Created>
                </Text>
            </Left>
            <Total type={type}>
                <span>{type === 'income' ? '+' : '-'}</span>
                ${total}
            </Total>
        </Inner>
    );
};
