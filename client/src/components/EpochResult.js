import React, { Component } from 'react';
import axios from 'axios';
import ErrorMessage from './ErrorMessage'
import Frequencies from './Frequencies'

class EpochResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: this.props.results,
            displayClicked: false,
            resultsFeqs: null,
            getFreqError: false,
        }
        this.getFreqs = this.getFreqs.bind(this)
        this.displayResults = this.displayResults.bind(this)
        this.formatResults = this.formatResults.bind(this)
        this.formatPercentage = this.formatPercentage.bind(this)
    }

    formatPercentage(float) {
        return float + '%';
    }

    formatResults(array) {
        return array.join(', ')
    }

    displayResults() {
        this.setState({
            displayClicked: !this.state.displayClicked
        });
    }

    getFreqs() {
        if (this.state.resultsFeqs) {
            return
        }
        let requestBody = {
            to_format: this.props.results
        }
        axios.post('http://localhost:3030/genetic-algorithm/epoch/format', requestBody)
            .then(r => {
                this.setState({
                    resultsFeqs: r.data.frequencies,
                    getFreqError: false
                })
            })
            .catch(e => {
                this.setState({
                    getFreqError: true
                })
            })
    }

    render() {
        return (
            <div>
                <hr></hr>
                <div onClick={this.displayResults} className="box">
                    <h5>Epoch {this.props.index}</h5>
                    <p>{this.formatPercentage(this.props.correct_percentage)} correct</p>
                    {this.state.displayClicked && <div >{this.formatResults(this.props.results)}</div>}
                </div>
                <button onClick={this.getFreqs} className="btn btn-secondary" disabled={this.state.resultsFeqs}>Show frequencies</button>
                {this.state.resultsFeqs && <Frequencies data={this.state.resultsFeqs} />}
                {this.state.getFreqError && <ErrorMessage />}
                <hr></hr>
            </div>
        )
    }
}

export default EpochResult;
