import {connect} from 'react-redux';
import TopBar from "../components/TopBar";

const mapStateToProps = (state) => {
    return {
        selected_category: state.cats_duck.selected_category
    };
};

export default connect(
    mapStateToProps,
    null
)(TopBar);