import {connect} from 'react-redux';
import {setSelectedCatCategory} from '../ducks/CatsDuck';
import CatCategoriesDropdown from "../components/CatCategoriesDropdown";

const mapStateToProps = (state) => {
    return {
        categories: state.cats_duck.categories,
        selected_category: state.cats_duck.selected_category,
        cats: state.cats_duck.cats
    };
};


const mergeProps = (stateProps, dispatchProps) => {
    const {dispatch} = dispatchProps;
    const {cats, ...otherStateProps} = stateProps;
    return {
        ...otherStateProps,
        selectCategory: (category) => dispatch(setSelectedCatCategory(dispatch, cats, category))
    }
};


export default connect(
    mapStateToProps,
    null,
    mergeProps
)(CatCategoriesDropdown);