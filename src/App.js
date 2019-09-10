import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            classNames: true
        }
    }
    componentDidMount() {
        import('ie11-custom-properties').then(() => {
            console.log("imported")
        });

        window.setInterval(() => {
            this.setState({classNames: !this.state.classNames})
        }, 6000)
    }
    render() {
        return (
            <div className="App bar">
                <header className={this.state.classNames ? "App-header foo" : "i"}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
