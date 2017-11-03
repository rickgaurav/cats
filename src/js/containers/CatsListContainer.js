import {connect} from 'react-redux';
import CatsList from '../components/CatsList';
import {getCats, toggleCatModal} from '../ducks/CatsDuck';

const mapStateToProps = (state) => {
    return {
        cats: state.cats_duck.filtered_cats
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCats: () => dispatch(getCats(dispatch)),
        toggleCatModal: (cat_id) => dispatch(toggleCatModal(dispatch, cat_id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatsList);