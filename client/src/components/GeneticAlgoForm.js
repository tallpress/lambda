import React, { Component } from 'react';
import axios from 'axios';

class GeneticAlgoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            target: '',
            mutationRateSlider: null,
            populationSize: null,
            goodSampleSize: null,
            randomSampleSize: null,
            epochs: null,
            formResult: null,
        }
        this.submissionHandler = this.props.submissionHandler.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        const formResult = {
            target: this.state.target,
            mutation_rate: this.state.mutationRateSlider,
            population_size: this.state.populationSize,
            good_sample_size: this.state.goodSampleSize,
            random_sample_size: this.state.randomSampleSize,
            epochs: this.state.epochs,
        }
        axios.post('http://localhost:3030/calculate/genetic-algorithm', formResult)
        .then(r => {
                return this.props.submissionHandler(r.data.response.epochs)
            }
        );
    }

    render() {
        return (
            <div className="form">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="target">Target</label>
                        <input
                            className="form-control"
                            name="target"
                            type="text"
                            onChange={this.handleInputChange}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mutationRate">Mutation rate: {this.state.mutationRateSlider}</label>
                        <input
                            className="form-control"
                            name="mutationRateSlider"
                            type="range"
                            min="0"
                            max="0.1"
                            step="0.001"
                            onChange={this.handleInputChange}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="population_size">Population size</label>
                        <input
                            className="form-control"
                            name="populationSize"
                            type="number"
                            min="1"
                            max="10000"
                            onChange={this.handleInputChange}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="good_sample_size">Good sample size</label>
                        <input
                            className="form-control"
                            name="goodSampleSize"
                            type="number"
                            min="0"
                            onChange={this.handleInputChange}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="random_sample_size">Random sample size</label>
                        <input
                            className="form-control"
                            name="randomSampleSize"
                            type="number"
                            min="0"
                            onChange={this.handleInputChange}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="epochs">Epochs</label>
                        <input
                            className="form-control"
                            name="epochs"
                            type="number"
                            min="0"
                            max="10000"
                            onChange={this.handleInputChange}
                        ></input>
                    </div>
                    <button type="submit" className="btn btn-primary form-control">Mutate</button>
                </form>
            </div>
        );
    }
}

export default GeneticAlgoForm;
