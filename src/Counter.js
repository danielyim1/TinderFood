import './App.css';
import { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.incrementCounter = this.incrementCounter.bind(this);

        this.state={
            value : 0
        };

    }

    incrementCounter() {
        this.setState((state) => {
            return {value: state.value + 1};
          });
    }

    render() {
        return (
            <div className="Counter">
                <p>
                    {this.state['value']}
                </p>
                <button onClick={this.incrementCounter}>
                    {this.props['buttonText']}
                </button>
            </div>
        )
    }
}

export default Counter;
