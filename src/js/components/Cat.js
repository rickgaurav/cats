import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CatDetail from "./CatDetail";

export default class Cat extends Component {
    render() {
        const path = `images/${this.props.cat.url}`;
        return (
            <div className="list-item"
                 onClick={this.props.catClickHandler}>
                <img src={path} alt="Image not loaded"/>
            </div>
        );
    }
}

Cat.propTypes = {
    cat: PropTypes.object
};