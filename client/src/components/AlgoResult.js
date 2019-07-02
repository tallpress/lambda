import React, { Component } from 'react';
import EpochResult from './EpochResult'

class AlgoResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [
                {
                    correct_percentage: 0.1,
                    results: ['adlsfj', 'asdadsadadasd']
                },
                {
                    correct_percentage: 0.1,
                    results: ['adlsfj', 'kasdfjldsa']
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h4>Your results</h4>
                {this.state.results.map((result, index) => {
                    return (<EpochResult
                        index={index+1}
                        correct_percentage={result.correct_percentage}
                        results={result.results}
                    />)
                })}
            </div>
        )
    }
}

export default AlgoResult;
