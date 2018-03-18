import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 32px;
`;

const Input = styled.div.attrs({
    contentEditable: 'true',
    role: 'textbox',
    spellCheck: 'true',
    dir: 'lt'
})`
    font: inherit;
    resize: vertical;
    font-variant-ligatures: none;
    outline: none;
    white-space: pre-wrap;
    word-wrap: break-word;
    background: #fff;
    width: 100%;
    padding: 12px 15px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 0;
    font-size: 1rem;
`;

export default class NewTask extends Component {
    onKeyPress = e => {
        if (e.key === 'Enter') {
            e.preventDefault();

            const value = e.target.innerText;

            if (typeof this.props.onSubmit === 'function') {
                this.props.onSubmit(value);
            }

            e.target.innerHTML = '';
        }
    };
    render() {
        return (
            <Wrapper>
                <Input onKeyPress={this.onKeyPress} />
            </Wrapper>
        );
    }
}
