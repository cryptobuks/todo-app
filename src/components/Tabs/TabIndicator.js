import React, {Component} from 'react';
import styled from 'styled-components';

const Indicator = styled.span`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: #297aff;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    will-change: left, width;
`;

export default ({style}) => {
    return <Indicator style={style} />;
}
