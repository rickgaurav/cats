import React, {Component} from 'react';
import CatsListContainer from "../containers/CatsListContainer";

export default class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Nokia Sample Application</a>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <CatsListContainer/>
                </div>
            </div>

        );
    }
}