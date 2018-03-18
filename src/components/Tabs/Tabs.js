import React, { Component } from 'react';
import styled from 'styled-components';

import TabIndicator from './TabIndicator';

const Inner = styled.div`
    position: relative;
    padding: 0 56px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Row = styled.div`
    display: flex;
`;

class Tabs extends Component {
    state = {
        indicatorStyle: {},
    };
    componentDidMount() {
        this.updateIndicatorState(this.props);
    }
    componentDidUpdate(prevProps, prevState) {
        // The index might have changed at the same time.
        // We need to check again the right indicator position.
        this.updateIndicatorState(this.props);

        if (this.state.indicatorStyle !== prevState.indicatorStyle) {
            this.scrollSelectedIntoView();
        }
    }
    updateIndicatorState(props) {
        const { theme, value } = props;

        const { tabsMeta, tabMeta } = this.getTabsMeta(value);
        let left = 0;

        if (tabMeta && tabsMeta) {
            const correction = tabsMeta.scrollLeft;

            left = tabMeta.left - tabsMeta.left + correction;
        }

        const indicatorStyle = {
            left,
            // May be wrong until the font is loaded.
            width: tabMeta ? tabMeta.width : 0,
        };

        if (
            (indicatorStyle.left !== this.state.indicatorStyle.left ||
                indicatorStyle.width !== this.state.indicatorStyle.width) &&
            !Number.isNaN(indicatorStyle.left) &&
            !Number.isNaN(indicatorStyle.width)
        ) {
            this.setState({ indicatorStyle });
        }
    }
    scrollSelectedIntoView = () => {
        const { value } = this.props;
        const { tabsMeta, tabMeta } = this.getTabsMeta(value);

        if (!tabMeta || !tabsMeta) {
            return;
        }

        if (tabMeta.left < tabsMeta.left) {
            // left side of button is out of view
            const nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);
            scroll.left(this.tabs, nextScrollLeft);
        } else if (tabMeta.right > tabsMeta.right) {
            // right side of button is out of view
            const nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);
            scroll.left(this.tabs, nextScrollLeft);
        }
    };
    getTabsMeta = value => {
        let tabsMeta;

        if (this.tabs) {
            const rect = this.tabs.getBoundingClientRect();
            // create a new object with ClientRect class props + scrollLeft
            tabsMeta = {
                scrollLeft: this.tabs ? this.tabs.scrollLeft : 0,
                left: rect.left,
                right: rect.right,
            };
        }

        let tabMeta;
        if (this.tabs && value !== false) {
            const children = this.tabs.children[0].children;

            if (children.length > 0) {
                const tab = children[this.valueToIndex[value]];

                tabMeta = tab ? tab.getBoundingClientRect() : null;
            }
        }
        return { tabsMeta, tabMeta };
    };
    render() {
        const indicator = <TabIndicator style={this.state.indicatorStyle} />;

        const { children: childrenProp, value, onChange } = this.props;
        this.valueToIndex = {};
        let childIndex = 0;
        const children = React.Children.map(childrenProp, child => {
            if (!React.isValidElement(child)) {
                return null;
            }

            const childValue = child.props.value || childIndex;
            this.valueToIndex[childValue] = childIndex;
            const selected = childValue === value;

            childIndex += 1;
            return React.cloneElement(child, {
                selected,
                onChange,
                indicator,
                value: childValue,
            });
        });

        return (
            <Inner
                innerRef={node => {
                    this.tabs = node;
                }}
            >
                <Row>{children}</Row>
                {indicator}
            </Inner>
        );
    }
}

export default Tabs;
