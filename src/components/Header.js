import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import Button from './Button';
import ArrowIcon from '../svg/chevron-down.svg';

const Header = styled.header`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    height: 160px;
    justify-content: space-between;
    padding: 0 60px;
`;


export default ({children}) => {
    return (
        <Header>
            {children}
        </Header>
    );
};
