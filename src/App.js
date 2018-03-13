import React, { Component } from 'react';
import styled from 'styled-components';
import Twemoji from 'react-twemoji';

import Item from './Item';
import NewTask from './NewTask';

const Body = styled.div`
    background-color: #e2ebf0;
    min-height: 100vh;
`;

const Header = styled.header`
    margin-bottom: 16px;
    border-bottom: 1px solid #e1e1e1;
`;

const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    height: 87px;
`;

const Title = styled.h1`
    color: #333435;
    font-size: 14px;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;

    .emoji {
        width: 24px;
        height: 24px;
    }
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export default class App extends Component {
    static defaultProps = {
        itemList: [
            {
                id: 1,
                value: 'first todo',
                checked: true,
            },
            {
                id: 2,
                value: '123',
                checked: false,
            },
        ]
    }
    state = {
        itemList: this.props.itemList
    };
    componentWillReciveProps(prevProps) {
        console.log(prevProps);
    }
    onChange = e => {
        console.log(e);

        // todo callback for data
    };
    onSubmit = value => {
        const {itemList} = this.state;
        const lastItem = itemList.slice(-1)[0];
        const id = lastItem.id + 1;
        const created = new Date().toLocaleString();

        this.setState({
            itemList: [
                ...this.state.itemList,
                {
                    id,
                    value,
                    created,
                    checked: false,
                }
            ]
        });
    };
    render() {
        const { itemList } = this.state;

        return (
            <Body>
                <Header>
                    <Container>
                        <HeaderInner>
                            <Title><Twemoji>ToDo App 📝</Twemoji></Title>
                        </HeaderInner>
                    </Container>
                </Header>
                <Container>
                    <NewTask onSubmit={this.onSubmit} />
                    <List>
                        {itemList.map(item => (
                            <Item key={item.id} id={item.id} checked={item.checked} onChange={this.onChange}>
                                <Twemoji>{item.value}</Twemoji>
                            </Item>
                        ))}
                    </List>
                </Container>
            </Body>
        );
    }
}
