import React, { Component } from 'react';
import Chart from 'chart.js';

export default class extends Component {
    constructor() {
        super();

        this.state = {
            chart: null,
        };
    }
    componentDidMount() {
        const { activities } = this.props;
        const income = activities.filter(item => item.typeValue === 'income');
        const expense = activities.filter(item => item.typeValue === 'expense');
        const getTotal = (action) => {
            try {
                if (action.length > 1) {
                    return action.reduce((res, item) => res.total + item.total);
                } else {
                    return action[0].total;
                }
            } catch(err) {
                return 0;
            }
        };
        const totalIncome = getTotal(income);
        const totalExpense = getTotal(expense);

        this.setState({
            chart: new Chart(this.chartWrap, {
                type: 'pie',
                data: {
                    datasets: [
                        {
                            data: [totalIncome, totalExpense],
                            backgroundColor: ['#52c7ca', '#6c6fff'],
                            label: 'Dataset 1',
                        },
                    ],
                    labels: ['Income', 'Expense'],
                },
                options: {
                    responsive: true,
                },
            }),
        });
    }
    render() {
        return (
            <div>
                <canvas ref={node => (this.chartWrap = node)} />
            </div>
        );
    }
}
