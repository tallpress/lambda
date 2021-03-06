import React, { Component } from 'react';
import GeneticAlgoForm from './components/GeneticAlgoForm'
import AlgoResult from './components/AlgoResult'
import ErrorMessage from './components/ErrorMessage'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: null,
            formError: false,
        }
        this.handleFormSubmission = this.handleFormSubmission.bind(this)
        this.handleFormError = this.handleFormError.bind(this)
    }

    handleFormSubmission(data) {
        this.setState({
            formResult: data,
            formError: false
        });
    }

    handleFormError() {
        this.setState({
            formError: true,
            formData: null
        })
    }

    render() {
        return (
        <div className="App">
            <h1>Genetic algorithm</h1>
            <br></br>
            <p>Fill the hyper-parameters into the form below, hit submit and wait for the result of the lambda function.
            The result will render the list of epochs, and for each one you can open up the results of that epcoh. To start
            try 20 epochs of population 100, with a good:random sample ratio of 6:1, mutation rate of ~0.05, and the target as your first name.
            </p>
            <GeneticAlgoForm
                submissionHandler={this.handleFormSubmission}
                submissionErrorHandler={this.handleFormError}
            />
            {this.state.formResult && <AlgoResult data={this.state.formResult} />}
            {this.state.formError && <ErrorMessage />}
        </div>
        );
    }
}

export default App;
