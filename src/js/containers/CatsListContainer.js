import {connect} from 'react-redux';
import CatsList from '../components/CatsList';
import {getCats} from '../ducks/CatsDuck';

const mapStateToProps = (state) => {
    return {
        cats: state.cats_duck.cats
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCats: () => dispatch(getCats())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatsList);