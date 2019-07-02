import React, { Component } from 'react';
import GeneticAlgoForm from './components/GeneticAlgoForm'
import AlgoResult from './components/AlgoResult'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: null
        }
        this.handleFormSubmission = this.handleFormSubmission.bind(this)
    }

    handleFormSubmission(data) {
        this.setState({
            formResult: data
        });
    }

    render() {
        const algoResult = (this.state.formResult)
            ? <AlgoResult data={this.state.formResult}/>
            : '';

        return (
        <div className="App">
            <h1>Genetic algorithm</h1>
            <br></br>
            <p>Fill the hyper-parameters into the form below, hit submit and wait for the result of the lambda function.
            The result will render the list of epochs, and for each one you can open up the results of that epcoh.
            </p>
                <GeneticAlgoForm
                    submissionHandler={this.handleFormSubmission}
                />
                {algoResult}
        </div>
        );
    }
}

export default App;
