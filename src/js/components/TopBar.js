import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CatCategoriesDropdownContainer from "../containers/CatCategoriesDropdownContainer";

export default class TopBar extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-6 right">
                    <h4>{this.props.selected_category}</h4>
                </div>
                <div className="col-xs-6 right">
                    <CatCategoriesDropdownContainer/>
                </div>
            </div>
        );
    }
}

TopBar.propTypes = {
    selected_category: PropTypes.string
};