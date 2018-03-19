import React, { Component } from 'react';
import styled from 'styled-components';

const TabContent = styled.div`
    background-color: #f5f7f9;
    padding: 24px 56px 0;
`;

export default ({children}) => {
    return (
        <TabContent>
            {children}
        </TabContent>
    );
};
