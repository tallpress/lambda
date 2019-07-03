import React, { Component } from 'react';
import axios from 'axios';
import ErrorMessage from './ErrorMessage'

class EpochResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            correct_percentage: this.props.correct_percentage,
            results: this.props.results,
            index: this.props.index,
            displayClicked: false,
            resultsFeqs: null,
            getFreqError: false,
        }
        this.getFreqs = this.getFreqs.bind(this)
        this.displayResults = this.displayResults.bind(this)
        this.formatResults = this.formatResults.bind(this)
    }

    formatPercentage(float) {
        return float * 100 + '%';
    }

    formatResults(array) {
        return array.join(', ')
    }

    formatFreqs(freqs) {
        // let string = '';
        // freqs.forEach(element => {
        //      element.count + ': ' + element.values.join(', ')
        // });
        return (
            // <ul>
            freqs.map(element => {
                <li>{element.count}: {element.values}</li>
            })
            // </ul>

        )
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
            to_format: this.state.results
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
        const error = (this.state.getFreqError)
            ? <ErrorMessage />
            : '';

        const data = (this.state.displayClicked)
            ? <div > { this.formatResults(this.state.results) }</div>
            : ''

        const freqs = (this.state.resultsFeqs)
            ? <ul>
                {this.state.resultsFeqs.map((result) => {
                    return (<li>
                        {result.count}: {result.values.join(', ')}
                    </li>
                    )
                })}
            </ul>
            : ''

        return (
            <div>
                <hr></hr>
                <div onClick={this.displayResults} className="box">
                    <h5>Epoch {this.props.index}</h5>
                    <p>{this.formatPercentage(this.state.correct_percentage)} correct</p>
                    {data}
                </div>
                {this.state.resultsFeqs ? <div>{this.resultsFeqs}</div> : ''}
                <button onClick={this.getFreqs}>Get frequencies</button>
                {freqs}
                {error}
                <hr></hr>
            </div>
        )
    }
}

export default EpochResult;
