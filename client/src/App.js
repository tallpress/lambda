import React, { Component } from 'react';
import GeneticAlgoForm from './components/GeneticAlgoForm'
import AlgoResult from './components/AlgoResult'

class App extends Component {
    render() {
        return (
        <div className="App">
            <h1>Genetic algorithm</h1>
            <br></br>
            <p>Fill the hyper-parameters into the form below, hit submit and wait for the result of the lambda function.
            The result will render the list of epochs, and for each one you can open up the results of that epcoh.
            </p>
            <GeneticAlgoForm />
            <AlgoResult />
        </div>
        );
    }
}

export default App;
