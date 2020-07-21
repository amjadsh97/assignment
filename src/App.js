import React, {Component} from 'react';
import './App.css';
import UserOutput from "./Components/UserOutput";
import UserInput from "./Components/UserInput";

class App extends Component {
    state = {
        username: 'amjadshsh'
    };

    eventHandlerState = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    render() {
        return (
            <div className="App">
                <h1>assignment</h1>
                <UserInput
                    changed={this.eventHandlerState}
                    currentName={this.state.username}
                />
                <UserOutput username={this.state.username}/>
                <UserOutput username='amjad'/>
                <UserOutput username='aksd'/>
                <UserOutput username='ak32sd'/>
            </div>
        );
    }
}

export default App;
