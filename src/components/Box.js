import React, { Component } from 'react';
import styled from 'styled-components';

import Icon from './Icon';

const Inner = styled.div`
    background-color: ${({bg}) => bg || '#52c7ca'};
    border-radius: 16px;
    padding: 30px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
`;

const Header = styled.div``;

const Title = styled.div`
    font-size: 20px;
    text-transform: uppercase;
    opacity: 0.7;
`;

const Value = styled.div`
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1;
`;

const StyledIcon = styled(Icon)`
    display: inline-block;
    width: 20px;
    height: 20px;
    color: #fff;
    margin-right: 10px;
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: 500;
`;

export default ({label, value, bg}) => {
    return (<Inner bg={bg}>
        <Header>
            <Title>{label}</Title>
            <Value>${value}</Value>
        </Header>
        <Footer><StyledIcon iconName="arrow-up-right" />0.60%</Footer>
    </Inner>);
}
