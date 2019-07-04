import React, { Component } from 'react';
import EpochResult from './EpochResult'

class AlgoResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            algoResults: this.props.data,
        }
    }

    render() {
        return (
            <div>
                <h4>Your results</h4>
                <p>Click on the epoch to expand it in order to see the epoch's raw population</p>
                <p>You can also view the frequency of results in an epoch, in order to understand the population's make up.</p>
                {this.state.algoResults.map((result, index) => {
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
