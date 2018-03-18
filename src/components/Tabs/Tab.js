import React, { Component } from 'react';
import styled from 'styled-components';

import Icon from '../Icon';

const Button = styled.button`
    background: none;
    border: 0;
    flex: 1;
    height: 90px;
    cursor: pointer;
`;

const Label = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    color: #213a5a;

    ${props =>
        props.selected &&
        `&::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        right: 0;
        height: 3px;
        background-color: #297aff;
    }`};
`;

const StyledIcon = styled(Icon)`
    width: 20px;
    height: 20px;
    color: #297aff;
    margin-right: 12px;
`;

class TabTitle extends Component {
    onClick = (event: SyntheticEvent<>) => {
        const { onChange, value, onClick } = this.props;

        if (onChange) {
            onChange(event, value);
        }

        if (onClick) {
            onClick(event);
        }
    };
    render() {
        const { iconName, selected, label } = this.props;

        return (
            <Button
                role="tab"
                aria-selected={selected}
                onClick={this.onClick}
            >
                <Label innerRef={node => {
                    this.label = node;
                }}>
                    {iconName && <StyledIcon iconName={iconName} />}
                    {label}
                </Label>
            </Button>
        );
    }
}

export default TabTitle;
