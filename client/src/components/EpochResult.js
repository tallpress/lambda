import React, { Component } from 'react';

class EpochResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            correct_percentage: this.props.correct_percentage,
            results: this.props.results,
            index: this.props.index,
            displayClicked: false,
        }
        this.displayResults = this.displayResults.bind(this)
        this.formatResults = this.formatResults.bind(this)
    }

    formatPercentage(float) {
        return float * 100 + '%';
    }

    formatResults(array) {
        return array.join(', ')
    }

    displayResults() {
        this.setState({
            displayClicked: !this.state.displayClicked
        });
    }

    render() {
        return (
            <div onClick={this.displayResults} className="box">
                <hr></hr>
                <h5>Epoch {this.props.index}</h5>
                <p>{this.formatPercentage(this.state.correct_percentage)} correct</p>
                {this.state.displayClicked ? <div>{this.formatResults(this.state.results)}</div> : '' }
                <hr></hr>
            </div>
        )
    }
}

export default EpochResult;
