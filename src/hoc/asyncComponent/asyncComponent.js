import React, {Component} from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            // Executes the provided function that returns a promise:
            importComponent()
                .then(component => {
                    this.setState({
                        component: component.default
                    });
                });
        }

        render() {
            const comp = this.state.component;
            return comp ? <comp {...this.props}/> : null;
        }
    }
}

export default asyncComponent;
