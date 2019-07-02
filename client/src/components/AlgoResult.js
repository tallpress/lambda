import React, { Component } from 'react';
import EpochResult from './EpochResult'

class AlgoResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mockResults: [
                {
                    correct_percentage: 0.1,
                    results: ['adlsfj', 'asdadsadadasd']
                },
                {
                    correct_percentage: 0.1,
                    results: ['adlsfj', 'kasdfjldsa']
                }
            ],
            results: this.props.data,
        }
    }

    render() {
        return (
            <div>
                <h4>Your results</h4>
                {this.state.results.map((result, index) => {
                    return (<EpochResult
                        key={index+1}
                        index={index+1}
                        correct_percentage={result.percent_correct}
                        results={result.algorithm_output}
                    />)
                })}
            </div>
        )
    }
}

export default AlgoResult;
