import {connect} from 'react-redux';
import CatDetail from "../components/CatDetail";
import {toggleCatModal} from "../ducks/CatsDuck";

const mapStateToProps = (state) => {
    debugger;
    const cats = state.cats_duck.cats;
    const selected_cat_id = state.cats_duck.selected_cat_id;

    const selected_cat = cats.find(cat => cat.id === selected_cat_id);

    return {
        show_modal: state.cats_duck.show_cat_modal,
        cat: selected_cat
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCatModal: (cat_id) => dispatch(toggleCatModal(dispatch, cat_id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatDetail);