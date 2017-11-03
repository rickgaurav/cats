import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Cat from "./Cat";
import CatDetail from "./CatDetail";
import CatDetailContainer from "../containers/CatDetailContainer";

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
                {
                    this.props.cats.map(cat => {
                        return (
                            <Cat key={`cats-${cat.id}`}
                                 cat={cat}
                                 catClickHandler={() => this.props.toggleCatModal(cat.id)}/>
                        );
                    })
                }
                <CatDetailContainer/>
            </div>
        );
    }
}

CatsList.propTypes = {
    cats: PropTypes.array
};