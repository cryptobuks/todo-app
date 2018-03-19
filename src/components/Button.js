import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import Icon from './Icon';

const StyledLink = styled(Link)``;

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

export default ({ label, href, iconName, onClick }) => {
    const elem = href ? StyledLink : Button;
    const props = {
        to: href,
    };
    const children = () => (
        <div>
            {iconName && <StyledIcon iconName={iconName} />}
            {label}
        </div>
    );

    return React.createElement(elem, props, children());
    <Button />;
};
