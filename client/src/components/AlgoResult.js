import React, { Component } from 'react';
import EpochResult from './EpochResult'

class AlgoResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: this.props.data,
        }
    }

    render() {
        return (
            <div>
                <h4>Your results</h4>
                <p>Click on the box to expand it in order to see the epoch's population</p>
                {this.state.results.map((result, index) => {
                    return (<EpochResult
                        key={index+1}
                        index={index+1}
                        correct_percentage={result.correct_percentage}
                        results={result.result}
                    />)
                })}
            </div>
        )
    }
}

export default AlgoResult;
