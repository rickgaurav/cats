import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Cat from "./Cat";

export default class CatsList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCats();
    }

    render() {
        if(!this.props.cats.length) {
            return (
                <div className="list">
                    No cats available.
                </div>
            );
        }

        return (
            <div className="list">
                {this.props.cats.map(cat => <Cat cat={cat} key={`cats-${cat.id}`}/>)}
            </div>
        );
    }
}

CatsList.propTypes = {
    cats: PropTypes.array
};