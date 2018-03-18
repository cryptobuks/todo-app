import React, { Component } from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
    width: inherit;
    height: inherit;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    vertical-align: top;
`;

export default ({ iconName, className }) => {
    return (
        <div className={className}>
            <Svg>
                <use xlinkHref={`#${iconName}`} />
            </Svg>
        </div>
    );
};
