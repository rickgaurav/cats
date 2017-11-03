import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DropdownButton, MenuItem} from "react-bootstrap";

export default class CatCategoriesDropdown extends Component {

    setSelectedCategory(selected_category) {
        this.props.selectCategory(selected_category);
    }

    render() {
        return (
            <DropdownButton bsStyle="default"
                            title="Filter by Category"
                            id="dropdown-categories">
                {
                    this.props.categories.map(
                        category => {
                            return (
                                <MenuItem
                                    key={`menu-item-${category}`}
                                    onClick={() => this.setSelectedCategory(category)}
                                    active={category === this.props.selected_category}>
                                    {category}
                                </MenuItem>
                            );
                        }
                    )
                }
            </DropdownButton>
        );
    }
}

CatCategoriesDropdown.propTypes = {
    categories: PropTypes.array,
    selected_category: PropTypes.string
};