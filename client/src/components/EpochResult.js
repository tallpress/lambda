import React, { Component } from 'react';
import axios from 'axios';
// import ErrorMessage from './components/ErrorMessage'

class EpochResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            correct_percentage: this.props.correct_percentage,
            results: this.props.results,
            index: this.props.index,
            displayClicked: false,
            resultsFeqs: null
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
        freqs.forEach(element => {
            console.log(element)
        });
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
                console.log(r)
                this.setState({
                    resultsFeqs: r.data.frequencies
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    render() {
        return (
            <div>
                <hr></hr>
                <div onClick={this.displayResults} className="box">
                    <h5>Epoch {this.props.index}</h5>
                    <p>{this.formatPercentage(this.state.correct_percentage)} correct</p>
                    {this.state.displayClicked ? <div>{this.formatResults(this.state.results)}</div> : ''}
                </div>
                <button onClick={this.getFreqs}>Get frequencies</button>
                <hr></hr>
                {this.state.resultsFeqs ? <div>{this.resultsFeqs}</div> : ''}
            </div>
        )
    }
}

export default EpochResult;
