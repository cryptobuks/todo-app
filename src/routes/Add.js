import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Button from '../components/Button';

const Wrapper = styled.div`
    padding: 0 56px;
    box-sizing: border-box;
`;

const Form = styled.form`
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-size: 22px;
    margin-bottom: 15px;
`;

const Input = styled.input`
    width: 100%;
    border-radius: 16px;
    border: 2px solid #a8b2bc;
    font-size: 22px;
    font-weight: 500;
    color: #213a5a;
    padding: 15px 25px;
    box-sizing: border-box;
`;

export default () => {
    return (
        <div>
            <Header>
                <Button href="/" iconName="arrow-left" />
            </Header>
            <Wrapper>
                <Title>Add new activity</Title>
                <Form>
                    <Input placeholder="$666" />
                </Form>
            </Wrapper>
        </div>
    );
};
