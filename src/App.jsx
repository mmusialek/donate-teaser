import React, {Component} from 'react';
import {DonateComponent} from "./epic/DonateComponent";
import {CenterContainerWrapper} from "./hoc/CenterContainerWrapper";

class App extends Component {

    componentWillMount() {

        this.setState({
            donateComponent: new CenterContainerWrapper(DonateComponent)
        });
    }

    render() {
        return (
            <div>
                {this.state.donateComponent}
            </div>
        );
    }
}

export default App;
