import React, {Component} from 'react';
import CatsListContainer from "../containers/CatsListContainer";
import CatCategoriesDropdownContainer from "../containers/CatCategoriesDropdownContainer";
import TopBarContainer from "../containers/TopBarContainer";

export default class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-static-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Nokia Sample Application</a>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div>
                        <TopBarContainer/>
                    </div>
                    <CatsListContainer/>
                </div>
            </div>

        );
    }
}